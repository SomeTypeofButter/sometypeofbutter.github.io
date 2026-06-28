export default function Home() {
  const projects = [
    {
      title: "The Anomaly (VR)",
      tags: ["UE5", "Marvelous Designer", "MetaHuman", "Optimization"],
      description: "A VR experience exploring information overload. Built in UE5 utilizing stationary mechanics, forced LODs for performance, and complex cloth simulations."
    },
    {
      title: "X-Crawler",
      tags: ["Interaction Design", "Blueprint", "UI/UX"],
      description: "An interactive project featuring a custom Carrier & Element Detachment card system with optimized VR hand interactions."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f4f4f4] font-sans selection:bg-[#ff3366] selection:text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-12">
        {/* Header Section */}
        <header className="h-[80vh] flex flex-col justify-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">
            HI, I&apos;M <span className="text-[#ff3366]">[YOUR NAME]</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-[#ff3366] font-light mb-6">
            Immersive Mixed Reality Artist & VR Developer
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Specializing in optimized VR environments, interactive narratives, and technical art workflows bridging Maya, Houdini, and Unreal Engine 5.
          </p>
        </header>

        {/* Projects Section */}
        <section id="projects" className="py-20 animate-slide-up">
          <h2 className="text-2xl font-bold tracking-widest text-[#ff3366] mb-12 uppercase">
            Selected Works
          </h2>
          
          <div className="space-y-16">
            {projects.map((proj, index) => (
              <div 
                key={index} 
                className="border-l-4 border-[#ff3366] pl-6 py-4 bg-gradient-to-r from-[#1a1a1a]/80 to-transparent rounded-r-xl transition-transform hover:translate-x-2 duration-300"
              >
                <h3 className="text-3xl font-semibold mb-4">{proj.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="bg-[#111] text-[#ff3366] border border-[#333] px-3 py-1 rounded-md text-xs font-bold tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 max-w-3xl">
                  {proj.description}
                </p>
                
                <div className="w-full h-64 md:h-96 bg-[#111] border border-[#333] rounded-lg flex items-center justify-center text-gray-600">
                  [Video/Image Placeholder]
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-[#222] mt-20 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>Contact: your.email@example.com</p>
          <a href="#" className="text-[#ff3366] hover:text-white transition-colors mt-4 md:mt-0">
            Download Resume
          </a>
        </footer>
      </div>
    </div>
  );
}