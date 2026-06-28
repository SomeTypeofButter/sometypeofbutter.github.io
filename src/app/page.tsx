export default function Home() {
  const projects = [
    {
      title: "THE ANOMALY (VR)",
      tags: ["UE5", "MARVELOUS DESIGNER", "METAHUMAN", "OPTIMIZATION"],
      description: "A VR experience exploring information overload. Built in UE5 utilizing stationary mechanics, forced LODs for performance, and complex cloth simulations."
    },
    {
      title: "X-CRAWLER",
      tags: ["INTERACTION DESIGN", "BLUEPRINT", "UI/UX"],
      description: "An interactive project featuring a custom Carrier & Element Detachment card system with optimized VR hand interactions."
    }
  ];

  return (
    <div className="min-h-screen text-black font-mono selection:bg-[#ff0000] selection:text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation / Top Bar */}
        <nav className="border-4 border-black bg-white p-4 mb-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] flex justify-between items-center">
          <span className="font-black text-2xl uppercase tracking-tighter">XR_PORTFOLIO.EXE</span>
          <span className="bg-[#ff0000] text-white px-2 py-1 font-bold text-sm blink">STATUS: ONLINE</span>
        </nav>

        {/* Hero Section */}
        <header className="border-4 border-black bg-[#ffff00] p-8 md:p-16 mb-12 shadow-[12px_12px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-6 leading-none">
            [YOUR NAME]
          </h1>
          <div className="bg-black text-white inline-block px-4 py-2 text-xl md:text-3xl font-bold uppercase mb-8">
            Immersive XR & Tech Artist
          </div>
          <p className="text-xl md:text-2xl font-bold max-w-3xl leading-snug border-l-8 border-black pl-6 bg-white p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            SPECIALIZING IN OPTIMIZED VR ENVIRONMENTS, INTERACTIVE NARRATIVES, AND TECHNICAL ART WORKFLOWS.
          </p>
        </header>

        {/* Projects Section */}
        <section id="projects" className="mb-12">
          <div className="bg-black text-white inline-block px-6 py-3 text-3xl font-black uppercase mb-8 shadow-[8px_8px_0px_rgba(255,0,0,1)]">
            // SELECTED_WORKS
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, index) => (
              <div 
                key={index} 
                className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                <h3 className="text-3xl md:text-4xl font-black uppercase mb-6 bg-[#ff0000] text-white inline-block px-3 py-1">
                  {proj.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="border-2 border-black px-2 py-1 text-xs md:text-sm font-bold uppercase bg-[#c0c0c0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-lg font-medium border-t-4 border-black pt-4 mb-6">
                  {proj.description}
                </p>
                
                <div className="w-full h-64 bg-[#e5e5e5] border-4 border-black flex items-center justify-center font-black text-2xl uppercase text-gray-500 overflow-hidden relative group cursor-pointer">
                  <span className="z-10 bg-white px-4 py-2 border-2 border-black group-hover:bg-[#ffff00] transition-colors">
                    [ INSERT MEDIA ]
                  </span>
                  {/* Decorative stripes inside placeholder */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 8px)' }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-4 border-black bg-black text-white p-8 shadow-[8px_8px_0px_rgba(255,255,0,1)] flex flex-col md:flex-row justify-between items-start md:items-center font-bold uppercase text-xl gap-6">
          <div className="flex flex-col">
            <span className="text-gray-400 text-sm mb-1">SYSTEM.CONTACT:</span>
            <span className="text-[#ffff00]">your.email@example.com</span>
          </div>
          <a 
            href="#" 
            className="bg-white text-black px-6 py-3 border-4 border-black hover:bg-[#ff0000] hover:text-white transition-colors"
          >
            DOWNLOAD_RESUME.PDF
          </a>
        </footer>

      </div>
    </div>
  );
}