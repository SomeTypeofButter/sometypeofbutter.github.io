"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Props {
  layer: "bg" | "fg";
}

function makeWindowTexture(): THREE.CanvasTexture {
  const size = 128;
  const c = document.createElement("canvas");
  c.width = size;
  c.height = size;
  const ctx = c.getContext("2d")!;

  // solid grey-green face
  ctx.fillStyle = "rgba(72, 88, 72, 1)";
  ctx.fillRect(0, 0, size, size);

  // window grid lines — slightly lighter
  ctx.strokeStyle = "rgba(110, 135, 110, 0.9)";
  ctx.lineWidth = 2;

  const cols = 3;
  const rows = 4;
  const pad = 6;

  ctx.strokeRect(pad, pad, size - pad * 2, size - pad * 2);

  for (let i = 1; i < cols; i++) {
    const x = pad + ((size - pad * 2) / cols) * i;
    ctx.beginPath();
    ctx.moveTo(x, pad);
    ctx.lineTo(x, size - pad);
    ctx.stroke();
  }

  for (let i = 1; i < rows; i++) {
    const y = pad + ((size - pad * 2) / rows) * i;
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(size - pad, y);
    ctx.stroke();
  }

  return new THREE.CanvasTexture(c);
}

type Particle = {
  mesh: THREE.Mesh;
  vx: number;
  vy: number;
  vr: number;
  phase: number;
};

export default function ParticleField({ layer }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      200
    );
    camera.position.z = layer === "bg" ? 10 : 5;

    const texture = makeWindowTexture();
    const isBg = layer === "bg";
    const count = isBg ? 3 : 4;
    const spread = { x: 10, y: 5 };
    const zRange = isBg ? [-4, -1] : [0.5, 2];
    const opacity = isBg ? 0.18 : 0.32;
    const sizeRange = isBg ? [0.3, 0.55] : [0.15, 0.35];

    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const s = sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]);
      const geo = new THREE.BoxGeometry(s, s * (1.3 + Math.random() * 0.6), s * 0.8);
      const mat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(geo, mat);

      mesh.position.set(
        (Math.random() - 0.5) * spread.x * 2,
        (Math.random() - 0.5) * spread.y * 2,
        zRange[0] + Math.random() * (zRange[1] - zRange[0])
      );
      mesh.rotation.set(
        (Math.random() - 0.5) * 0.4,
        Math.random() * Math.PI * 2,
        (Math.random() - 0.5) * 0.3
      );

      scene.add(mesh);
      particles.push({
        mesh,
        vx: (Math.random() - 0.5) * (isBg ? 0.002 : 0.003),
        vy: (Math.random() - 0.5) * (isBg ? 0.001 : 0.002),
        vr: (Math.random() - 0.5) * (isBg ? 0.001 : 0.002),
        phase: Math.random() * Math.PI * 2,
      });
    }

    let animId: number;
    let t = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.008;

      for (const p of particles) {
        p.mesh.position.x += p.vx;
        p.mesh.position.y += p.vy + Math.sin(t + p.phase) * 0.0005;
        p.mesh.rotation.y += p.vr;

        if (p.mesh.position.x > spread.x) p.mesh.position.x = -spread.x;
        if (p.mesh.position.x < -spread.x) p.mesh.position.x = spread.x;
        if (p.mesh.position.y > spread.y) p.mesh.position.y = -spread.y;
        if (p.mesh.position.y < -spread.y) p.mesh.position.y = spread.y;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, [layer]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
