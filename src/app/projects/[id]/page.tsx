import { siteConfig } from "@/data/config";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: PageProps) {
  // Find the project data
  const project = siteConfig.projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="max-w-[1600px] mx-auto p-8 lg:p-12">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-white hover:text-gray-400 transition-colors mb-12"
        >
          <FaArrowLeft className="text-xl" />
        </Link>

        {/* Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
          
          {/* Left Column (Sticky Sidebar) - Project Info */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-12">
              <h1 className="text-4xl lg:text-5xl font-light uppercase tracking-wide mb-6 leading-tight">
                {project.name}
              </h1>
              
              {project.date && (
                <p className="text-gray-400 text-lg mb-8 font-light tracking-wider">
                  {project.date}
                </p>
              )}

              <div className="text-gray-300 font-light leading-relaxed whitespace-pre-wrap">
                {project.longDescription || project.description}
              </div>
            </div>
          </div>

          {/* Right Column - Scrolling Images */}
          <div className="lg:col-span-9 flex flex-col">
            {project.contentImages?.map((img, index) => (
              <div key={index} className="mb-0 relative group">
                {/* Image */}
                <div className="w-full bg-[#111] aspect-[16/10] relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${img.url})` }}
                  >
                    {!img.url && (
                      <div className="w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    )}
                  </div>
                </div>

                {/* Optional Subtitle and Description aligned to left column space for remaining images */}
                {index > 0 && (img.subtitle || img.description) && (
                  <div className="absolute top-1/2 -translate-y-1/2 -left-[33.33%] w-[25%] hidden lg:block pr-8">
                    {img.subtitle && (
                      <h3 className="text-xl font-light uppercase tracking-wider mb-2">
                        {img.subtitle}
                      </h3>
                    )}
                    {img.description && (
                      <p className="text-gray-400 text-sm font-light leading-relaxed">
                        {img.description}
                      </p>
                    )}
                  </div>
                )}
                
                {/* Mobile version of subtitle/description (shows below image instead of beside it) */}
                {index > 0 && (img.subtitle || img.description) && (
                  <div className="lg:hidden mt-4 mb-8">
                    {img.subtitle && (
                      <h3 className="text-xl font-light uppercase tracking-wider mb-2">
                        {img.subtitle}
                      </h3>
                    )}
                    {img.description && (
                      <p className="text-gray-400 text-sm font-light leading-relaxed">
                        {img.description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
