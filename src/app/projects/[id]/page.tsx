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
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <div className="max-w-[1600px] mx-auto p-8 lg:p-12">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-white hover:text-gray-400 transition-colors mb-12"
        >
          <FaArrowLeft className="text-xl" />
        </Link>

        {/* Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-32 relative">
          
          {/* Left Column - Project Info */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div>
              <h1 className="text-3xl lg:text-4xl font-light uppercase tracking-wide mb-6 leading-tight">
                {project.name}
              </h1>
              
              {project.date && (
                <p className="text-gray-400 text-lg mb-4 font-light tracking-wider">
                  {project.date}
                </p>
              )}

              {project.software && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.software.map((sw, i) => (
                    <span
                      key={i}
                      className="text-[0.65rem] text-[#aaa] uppercase tracking-wider border border-white/20 px-2 py-0.5 rounded-full"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              )}

              <div className="text-gray-300 font-light leading-relaxed whitespace-pre-wrap">
                {project.longDescription || project.description}
              </div>
            </div>
          </div>

          {/* Right Column - Scrolling Images */}
          <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-6 min-w-0 overflow-hidden">
            {project.contentImages?.map((img, index) => (
              <div key={index} className="relative group w-full">
                {/* Media Container (Image, Video, Row of Videos, or Row of Images) */}
                {img.imageGrid ? (
                  <div className="w-full grid grid-cols-2 gap-4">
                    {img.imageGrid.map((src, iIndex) => (
                      <div key={iIndex} className="bg-[#111] relative overflow-hidden">
                        <img
                          src={src}
                          alt={`Image ${iIndex + 1}`}
                          className="w-full h-auto object-cover block"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                ) : img.imageRow ? (
                  <div className="w-full flex flex-col md:flex-row gap-4">
                    {img.imageRow.map((src, iIndex) => (
                      <div key={iIndex} className="flex-1 bg-[#111] relative overflow-hidden">
                        <img
                          src={src}
                          alt={`GIF ${iIndex + 1}`}
                          className="w-full h-auto object-cover block"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                ) : img.youtubeIdRow ? (
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
                  <div className="w-full bg-[#111] relative overflow-hidden">
                    {img.youtubeId ? (
                      <div className="aspect-[16/10] relative">
                        <iframe 
                          className="absolute inset-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${img.youtubeId}`}
                          title="YouTube video player" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : img.url ? (
                      <div className="w-full">
                        <img 
                          src={img.url} 
                          alt={img.subtitle || "Project image"}
                          className="w-full h-auto object-cover block"
                        />
                      </div>
                    ) : (
                      <div className="w-full aspect-[16/10] relative bg-[#0a0a0a]"></div>
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
                        <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">
                          {img.description}
                        </p>
                      )}
                      {img.tags && (
                        <div className="flex flex-col gap-4 mt-4">
                          {img.tags.map((tag, tIndex) => (
                            <div key={tIndex}>
                              <span className="text-[#aaa] uppercase tracking-wider block mb-1">{tag.label}</span>
                              <p className="text-gray-400 font-light leading-relaxed">{tag.text}</p>
                            </div>
                          ))}
                        </div>
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
                      <p className="text-gray-400 font-light leading-relaxed mb-4">
                        {img.description}
                      </p>
                    )}
                    {img.tags && (
                      <div className="flex flex-col gap-4 mt-4">
                        {img.tags.map((tag, tIndex) => (
                          <div key={tIndex}>
                            <span className="text-[#aaa] uppercase tracking-wider block mb-1">{tag.label}</span>
                            <p className="text-gray-400 font-light leading-relaxed">{tag.text}</p>
                          </div>
                        ))}
                      </div>
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
