"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Props {
  layer: "bg" | "fg";
}

function makeWindowTexture(cols: number, rows: number): THREE.CanvasTexture {
  const size = 128;
  const c = document.createElement("canvas");
  c.width = size;
  c.height = size;
  const ctx = c.getContext("2d")!;

  ctx.clearRect(0, 0, size, size);
  ctx.strokeStyle = "rgba(160, 200, 255, 0.9)";
  ctx.lineWidth = 1.5;

  // outer border
  ctx.strokeRect(2, 2, size - 4, size - 4);

  // vertical dividers
  for (let i = 1; i < cols; i++) {
    const x = (size / cols) * i;
    ctx.beginPath();
    ctx.moveTo(x, 2);
    ctx.lineTo(x, size - 2);
    ctx.stroke();
  }

  // horizontal dividers
  for (let i = 1; i < rows; i++) {
    const y = (size / rows) * i;
    ctx.beginPath();
    ctx.moveTo(2, y);
    ctx.lineTo(size - 2, y);
    ctx.stroke();
  }

  return new THREE.CanvasTexture(c);
}

function buildCube(
  w: number,
  h: number,
  d: number,
  faceOpacity: number,
  edgeOpacity: number,
  texture: THREE.CanvasTexture
): THREE.Group {
  const group = new THREE.Group();

  const geo = new THREE.BoxGeometry(w, h, d);

  const faceMat = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    opacity: faceOpacity,
    depthWrite: false,
  });
  group.add(new THREE.Mesh(geo, faceMat));

  const edgesMat = new THREE.LineBasicMaterial({
    color: 0x99bbff,
    transparent: true,
    opacity: edgeOpacity,
  });
  group.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), edgesMat));

  return group;
}

type Particle = {
  mesh: THREE.Group;
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
    camera.position.z = layer === "bg" ? 12 : 6;

    const texA = makeWindowTexture(3, 4);
    const texB = makeWindowTexture(2, 3);

    const isBg = layer === "bg";
    const count = isBg ? 35 : 18;
    const spread = { x: 14, y: 8 };
    const zRange = isBg ? [-6, -2] : [1, 4];
    const faceOp = isBg ? 0.06 : 0.18;
    const edgeOp = isBg ? 0.15 : 0.4;
    const sizeRange = isBg ? [0.08, 0.22] : [0.04, 0.12];

    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const s = sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]);
      const h = s * (1.2 + Math.random() * 1.0);
      const tex = Math.random() > 0.5 ? texA : texB;
      const cube = buildCube(s, h, s * 0.5, faceOp, edgeOp, tex);

      cube.position.set(
        (Math.random() - 0.5) * spread.x * 2,
        (Math.random() - 0.5) * spread.y * 2,
        zRange[0] + Math.random() * (zRange[1] - zRange[0])
      );
      cube.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );

      scene.add(cube);
      particles.push({
        mesh: cube,
        vx: (Math.random() - 0.5) * (isBg ? 0.003 : 0.005),
        vy: (Math.random() - 0.5) * (isBg ? 0.002 : 0.003),
        vr: (Math.random() - 0.5) * (isBg ? 0.002 : 0.004),
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
        p.mesh.position.y += p.vy + Math.sin(t + p.phase) * 0.0006;
        p.mesh.rotation.y += p.vr;
        p.mesh.rotation.x += p.vr * 0.4;

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
