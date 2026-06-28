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
      <div className="relative w-full h-[60vh] md:h-[70vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${siteConfig.heroImage})` }}
        ></div>
        
        {/* Gradient fade to black at the bottom of the hero image */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>

        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center text-center mt-[25vh]">
          <p className="text-gray-400 text-sm tracking-[0.2em] uppercase mb-2 font-medium">
            PORTFOLIO OF
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-medium tracking-normal mb-8">
            {siteConfig.name}
          </h1>
          
          {/* Navigation Links */}
          <div className="flex gap-4 text-[#8a8a8a] text-sm tracking-widest uppercase mb-6">
            <a href={siteConfig.links.about} className="hover:text-white transition-colors">ABOUT ME</a>
            <span className="text-gray-600">|</span>
            <a href={siteConfig.links.resume} className="hover:text-white transition-colors">RESUME</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {siteConfig.socials.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#e0e0e0] text-black hover:bg-white rounded-sm flex items-center justify-center transition-all duration-300"
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
      <div className="w-full max-w-6xl mx-auto px-6 py-20 pb-32 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              className="group flex flex-col cursor-pointer"
            >
              {/* Project Thumbnail */}
              <div className="aspect-square w-full rounded-2xl overflow-hidden mb-4 relative bg-[#0a0a0a]">
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
              <div className="px-2">
                <h3 className="text-xl md:text-2xl font-light tracking-wide mb-2 group-hover:text-gray-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-500 font-light">
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