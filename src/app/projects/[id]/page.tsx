import { siteConfig } from "@/data/config";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return siteConfig.projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  // Await the params object
  const resolvedParams = await params;
  
  // Find the project data
  const project = siteConfig.projects.find((p) => p.id === resolvedParams.id);

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 relative">
          
          {/* Left Column - Project Info */}
          <div className="lg:col-span-3">
            <div>
              <h1 className="text-3xl lg:text-4xl font-light uppercase tracking-wide mb-6 leading-tight">
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
          <div className="lg:col-span-9 flex flex-col gap-6">
            {project.contentImages?.map((img, index) => (
              <div key={index} className="relative group">
                {/* Media Container (Image, Video, or Row of Videos) */}
                {img.youtubeIdRow ? (
                  <div className="w-full flex flex-col md:flex-row gap-4 aspect-auto md:aspect-[24/10] bg-transparent">
                    {img.youtubeIdRow.map((vid, vIndex) => (
                      <div key={vIndex} className="flex-1 bg-[#111] relative aspect-[16/10] md:aspect-auto h-full">
                        <iframe 
                          className="absolute inset-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${vid}`}
                          title={`YouTube video player ${vIndex + 1}`} 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          allowFullScreen
                        ></iframe>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="w-full bg-[#111] aspect-[16/10] relative">
                    {img.youtubeId ? (
                      <iframe 
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${img.youtubeId}`}
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${img.url})` }}
                      >
                        {!img.url && (
                          <div className="w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Optional Subtitle and Description - Restructured to sit natively in the grid instead of floating */}
                {index > 0 && (img.subtitle || img.description) && (
                  <div className="absolute top-1/2 -translate-y-1/2 right-[100%] w-[33.333vw] max-w-[400px] hidden lg:block pr-12 lg:pr-24 bg-black py-4 z-10 pointer-events-none">
                    <div className="pointer-events-auto">
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
