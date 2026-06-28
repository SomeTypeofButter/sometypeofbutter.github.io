export default function Home() {
  const projects = [
    {
      id: "AWE-102",
      title: "THE ANOMALY (VR)",
      status: "CONTAINED",
      description: "Subject entails a virtual reality environment exploring severe informational psychological stress. Built via UE5 architecture utilizing stationary mechanical restraints, forced LOD optimizations, and complex anomalous cloth simulations.",
      clearance: "LEVEL 4"
    },
    {
      id: "AWE-204",
      title: "X-CRAWLER",
      status: "MONITORED",
      description: "Interactive artifact exhibiting a custom Carrier & Element Detachment mechanism. Hand interactions require localized spatial monitoring for VR integrity.",
      clearance: "LEVEL 2"
    }
  ];

  return (
    <div className="min-h-screen text-gray-300 font-sans selection:bg-[#cc0000] selection:text-white p-4 md:p-12 uppercase tracking-widest leading-relaxed">
      <div className="max-w-5xl mx-auto border border-gray-800 bg-[#121212] shadow-2xl relative overflow-hidden">
        
        {/* Department Header */}
        <header className="border-b border-gray-800 p-8 flex flex-col md:flex-row justify-between items-start md:items-end bg-[#0a0a0a]">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2 text-white">
              [YOUR NAME]
            </h1>
            <h2 className="text-sm md:text-base text-gray-500 font-mono tracking-widest">
              DEPT. OF IMMERSIVE MIXED REALITY // TECHNICAL ARTIST
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <div className="text-xs text-gray-600 font-mono">DOCUMENT NO.</div>
            <div className="text-lg font-bold text-[#cc0000]">FBC-PORTFOLIO-2026</div>
          </div>
        </header>

        {/* Warning Banner */}
        <div className="bg-[#cc0000] text-black text-center font-bold font-mono py-1 text-xs md:text-sm tracking-[0.3em]">
          RESTRICTED ACCESS • CONFIDENTIAL MATERIAL • DO NOT DISTRIBUTE
        </div>

        {/* Main Content Area */}
        <div className="p-8 md:p-12">
          
          <section className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-[#cc0000] pb-2 inline-block">
              // EXECUTIVE SUMMARY
            </h3>
            <p className="max-w-3xl text-gray-400 font-mono text-sm leading-loose">
              SUBJECT SPECIALIZES IN THE MITIGATION OF UNSTABLE VIRTUAL ENVIRONMENTS. 
              DEMONSTRATED EXPERTISE IN OPTIMIZED ARCHITECTURAL GEOMETRY (UE5), 
              ANOMALOUS ENTITY MANAGEMENT (METAHUMAN CLOTHING SIMULATIONS), AND 
              NARRATIVE CONTAINMENT PROTOCOLS.
            </p>
          </section>

          {/* Altered World Events (Projects) */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-[#cc0000] pb-2 inline-block">
              // LOGGED INCIDENTS (SELECTED WORKS)
            </h3>
            
            <div className="space-y-12">
              {projects.map((proj) => (
                <div key={proj.id} className="group border border-gray-800 bg-[#0d0d0d] p-1 relative hover:border-gray-600 transition-colors">
                  {/* Decorative Corner Brackets */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#cc0000] opacity-50"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#cc0000] opacity-50"></div>
                  
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                      <div>
                        <div className="text-[#cc0000] font-mono text-xs mb-1">{proj.id}</div>
                        <h4 className="text-3xl font-bold text-white tracking-tight">{proj.title}</h4>
                      </div>
                      <div className="mt-4 md:mt-0 px-3 py-1 bg-[#1a1a1a] border border-gray-700 font-mono text-xs text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#cc0000] animate-pulse-slow"></span>
                        {proj.status}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-t border-b border-gray-800 py-6">
                      <div className="md:col-span-2">
                        <p className="text-sm font-mono text-gray-400 leading-relaxed">
                          <span className="text-gray-600">DESCRIPTION:</span><br/>
                          {proj.description}
                        </p>
                      </div>
                      <div className="flex flex-col justify-between border-l border-gray-800 pl-8">
                        <div>
                          <span className="text-gray-600 font-mono text-xs block mb-1">CLEARANCE REQ.</span>
                          <span className="font-bold text-white">{proj.clearance}</span>
                        </div>
                      </div>
                    </div>

                    {/* Placeholder for classified footage */}
                    <div className="w-full h-64 md:h-80 bg-black border border-gray-800 flex items-center justify-center relative overflow-hidden group-hover:border-gray-700 transition-colors">
                      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 40L40 0H20L0 20M40 40V20L20 40\\' fill=\\'%23cc0000\\' fill-opacity=\\'0.4\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')]"></div>
                      <span className="font-mono text-gray-600 text-sm z-10 bg-black px-4 py-1 border border-gray-800">
                        [ REDACTED VISUAL ARCHIVE ]
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="border-t border-[#cc0000] p-6 bg-[#0a0a0a] flex flex-col md:flex-row justify-between items-center font-mono text-xs text-gray-600">
          <div>DIRECTOR: YOUR.EMAIL@EXAMPLE.COM</div>
          <a href="#" className="mt-4 md:mt-0 text-gray-400 hover:text-white hover:border-b hover:border-[#cc0000] transition-colors pb-1">
            REQUEST DOSSIER (RESUME)
          </a>
        </footer>
      </div>
    </div>
  );
}