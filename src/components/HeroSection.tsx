"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/config";
import { FaInstagram, FaLinkedin, FaArtstation, FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import ParticleField from "@/components/ParticleField";

const renderIcon = (iconName: string) => {
  switch (iconName.toLowerCase()) {
    case 'instagram': return <FaInstagram size={22} />;
    case 'linkedin': return <FaLinkedin size={22} />;
    case 'artstation': return <FaArtstation size={22} />;
    case 'github': return <FaGithub size={22} />;
    default: return <FaLink size={22} />;
  }
};

export default function HeroSection() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      targetRef.current = {
        x: (e.clientX - cx) / cx,
        y: (e.clientY - cy) / cy,
      };
    };

    const animate = () => {
      const lerp = 0.06;
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * lerp;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * lerp;
      setOffset({ x: currentRef.current.x, y: currentRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const bgX = offset.x * -10;
  const bgY = offset.y * -10;
  const fgX = offset.x * 5;
  const fgY = offset.y * 5;

  return (
    <div className="relative w-full h-[76vh] md:h-[81vh] flex flex-col items-center justify-end pb-2 md:pb-4 overflow-hidden">
      {/* Background image — moves opposite to mouse for depth */}
      <div
        className="absolute inset-0 z-0 opacity-100 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${siteConfig.heroImage})`,
          transform: `translate(${bgX}px, calc(${bgY}px - 5%)) scale(0.9)`,
          willChange: "transform",
        }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.9)_100%)]" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 z-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent" />

      {/* Edge blur mask */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          boxShadow: "inset 0 0 180px 120px black",
        }}
      />

      {/* Background particles — behind content */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <ParticleField layer="bg" />
      </div>

      {/* Content wrapper — static */}
      <div className="relative z-10 flex flex-col items-center text-center translate-y-1">

        {/* Name — moves with mouse */}
        <div
          style={{
            transform: `translate(${fgX}px, ${fgY}px)`,
            willChange: "transform",
          }}
        >
          <p className="text-gray-400 text-sm tracking-[0.2em] uppercase mb-1 font-medium">
            PORTFOLIO OF
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-wide mb-6">
            {siteConfig.name}
          </h1>
        </div>

        {/* Nav + socials — static */}
        <div className="flex gap-4 text-[#8a8a8a] text-sm tracking-widest uppercase mb-10">
          <a href={siteConfig.links.about} className="hover:text-white transition-colors">ABOUT ME</a>
          <span className="text-gray-600">|</span>
          <a href={siteConfig.links.resume} className="hover:text-white transition-colors">RESUME</a>
        </div>

        <div className="flex gap-3">
          {siteConfig.socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#b0b0b0] transition-colors p-1"
              aria-label={social.name}
            >
              {renderIcon(social.icon)}
            </a>
          ))}
        </div>
      </div>

      {/* Foreground particles — in front of content */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <ParticleField layer="fg" />
      </div>
    </div>
  );
}
