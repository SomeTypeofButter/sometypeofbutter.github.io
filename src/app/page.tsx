import { siteConfig } from "@/data/config";
import { FaInstagram, FaLinkedin, FaArtstation, FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import Image from "next/image";

// Helper function to render the correct icon based on the config string
const renderIcon = (iconName: string) => {
  switch (iconName.toLowerCase()) {
    case 'instagram': return <FaInstagram size={22} />;
    case 'linkedin': return <FaLinkedin size={22} />;
    case 'artstation': return <FaArtstation size={22} />;
    case 'github': return <FaGithub size={22} />;
    default: return <FaLink size={22} />;
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      
      {/* 
        HERO SECTION 
        Note: You will need to place your actual background image in the 'public' folder 
        and name it 'hero-bg.jpg', or update the path in src/data/config.ts 
      */}
      <div className="relative w-full h-[85vh] md:h-[90vh] flex flex-col items-center justify-end pb-2 md:pb-4 overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-100 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${siteConfig.heroImage})` }}
        ></div>
        
        {/* Radial vignette gradient (dark corners, bright center) */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.9)_100%)]"></div>
        
        {/* Additional bottom fade to ensure seamless blending with the black page */}
        <div className="absolute inset-x-0 bottom-0 z-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center translate-y-1">
          <p className="text-gray-400 text-sm tracking-[0.2em] uppercase mb-1 font-medium">
            PORTFOLIO OF
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-wide mb-6">
            {siteConfig.name}
          </h1>
          
          {/* Navigation Links */}
          <div className="flex gap-4 text-[#8a8a8a] text-sm tracking-widest uppercase mb-10">
            <a href={siteConfig.links.about} className="hover:text-white transition-colors">ABOUT ME</a>
            <span className="text-gray-600">|</span>
            <a href={siteConfig.links.resume} className="hover:text-white transition-colors">RESUME</a>
          </div>

          {/* Social Icons */}
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
      </div>

      {/* 
        PROJECTS GRID SECTION 
      */}
      <div className="w-full max-w-4xl mx-auto px-6 py-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              className="group flex flex-col cursor-pointer"
            >
              {/* Project Thumbnail */}
              <div className="aspect-square w-full rounded-xl overflow-hidden mb-5 relative bg-[#0a0a0a] border border-[#222]">
                {/* 
                  Replace this placeholder with the Next.js Image component once you add 
                  your actual images to the public folder:
                  <Image src={project.thumbnail} alt={project.name} fill className="object-cover" />
                */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.thumbnail})` }}
                >
                  {/* Fallback pattern if image is missing */}
                  <div className="w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="px-0 text-left">
                <h3 className="text-xl md:text-2xl font-light tracking-wide mb-1 text-white transition-colors">
                  {project.name}
                </h3>
                
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-3 mt-1">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-[0.65rem] text-[#aaa] uppercase tracking-wider border border-white/20 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <p className="text-sm text-[#999] font-light">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}