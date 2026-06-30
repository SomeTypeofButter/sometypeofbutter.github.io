import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const timeline = [
  {
    years: "2025 – 2029",
    institution: "University of the Arts London (UAL)",
    degree: "BA Immersive Media and Mixed Reality",
    focus: "VR Environment Architecture, Real-Time VFX (Niagara/Houdini), Technical Animation.",
  },
  {
    years: "2021 – 2023",
    institution: "School of Visual Arts (SVA)",
    degree: "Illustration (Undergraduate Coursework)",
    focus: "Visual storytelling, concept art, and traditional fundamentals.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="max-w-[1600px] mx-auto p-8 lg:p-12">

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-white hover:text-gray-400 transition-colors mb-16"
        >
          <FaArrowLeft className="text-xl" />
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">

          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col items-start gap-8">

            {/* Profile picture placeholder */}
            <div className="w-48 h-48 rounded-full bg-[#111] border border-white/10 flex items-center justify-center shrink-0">
              <span className="text-white/20 text-sm tracking-widest uppercase">Photo</span>
            </div>

            {/* Name + title */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-light uppercase tracking-wide mb-2">
                Jessica Sun
              </h1>
              <p className="text-gray-400 text-sm tracking-[0.2em] uppercase">
                Immersive Mixed Reality Artist
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 flex flex-col gap-16">

            {/* Bio */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">
                Bio / Background
              </h2>
              <div className="flex flex-col gap-5 text-gray-300 font-light leading-relaxed">
                <p>
                  I am a Technical Artist and XR Developer specializing in interactive environments, procedural simulations, and surreal digital spaces.
                </p>
                <p>
                  My foundation started in traditional and digital illustration, but my focus shifted toward spatial computing and technical art to build living, reactive worlds. I currently bridge the gap between creative vision and complex technical implementation, working heavily with Unreal Engine 5, Maya, and creative coding frameworks to build immersive VR experiences, audio-reactive installations, and advanced character simulations.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-8">
                Timeline / Education
              </h2>
              <div className="flex flex-col gap-10">
                {timeline.map((item, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-8">
                    <span className="text-gray-500 text-sm font-light tracking-wider shrink-0">
                      {item.years}
                    </span>
                    <div>
                      <p className="text-white font-light text-lg mb-1">{item.institution}</p>
                      <p className="text-gray-400 text-sm mb-2">{item.degree}</p>
                      <p className="text-gray-500 text-sm font-light leading-relaxed">
                        Focus: {item.focus}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
