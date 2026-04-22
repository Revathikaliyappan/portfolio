import html from "../assets/html.png";
import css from "../assets/css.png";
import wordpress from "../assets/wordpress.png";
import figma from "../assets/figma.png";
import canva from "../assets/canva.png";
import photoshop from "../assets/photoshop.jpg";
import illustrator from "../assets/illustrator.png";

const tools = [
  { name: "HTML", img: html, color: "hover:shadow-orange-500/20" },
  { name: "CSS", img: css, color: "hover:shadow-blue-500/20" },
  { name: "WORDPRESS", img: wordpress, color: "hover:shadow-blue-400/20" },
  { name: "FIGMA", img: figma, color: "hover:shadow-purple-500/20" },
  { name: "CANVA", img: canva, color: "hover:shadow-cyan-400/20" },
  { name: "PHOTOSHOP", img: photoshop, color: "hover:shadow-blue-600/20" },
  { name: "ILLUSTRATOR", img: illustrator, color: "hover:shadow-orange-600/20" },
];

function Tools() {
  return (
    <section id="tools" className="py-24 bg-bg-primary px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            My Creative <span className="text-gradient">Toolkit</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Leveraging industry-standard tools to bring creative visions to life with precision and style.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`glass p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 group ${tool.color} hover:shadow-2xl`}
            >
              <div className="relative mb-4 flex justify-center">
                <div className="absolute inset-0 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src={tool.img}
                  alt={tool.name}
                  className="h-16 w-16 object-contain relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="font-semibold text-xs tracking-widest text-text-secondary group-hover:text-white text-center transition-colors uppercase">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none"></div>
    </section>
  );
}

export default Tools;