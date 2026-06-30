import { siteConfig } from "@/data/config";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      
      <HeroSection />

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
                ></div>
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