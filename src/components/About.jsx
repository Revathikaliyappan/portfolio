import img from '../assets/Banner.jpeg';
import resume from '../documents/Graphical Designer - Revathi.pdf';

function About() {
  return (
    <section id="about" className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center relative z-10">
          {/* Image Container */}
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute inset-0 bg-accent-primary/20 rounded-2xl blur-2xl group-hover:bg-accent-primary/30 transition-all"></div>
            <img
              src={img}
              alt="Revathi Portfolio"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="text-accent-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Biography
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Crafting Digital <span className="text-gradient">Experiences</span>
            </h2>

            <p className="text-text-secondary leading-relaxed text-lg mb-8">
              Creative Graphic Designer with experience in creating visually appealing
              designs for digital and print media. Skilled in <span className="text-white">Adobe Illustrator, Photoshop,
              Canva, and Figma</span> with a strong understanding of typography, color theory, and
              layout design. 
            </p>
            
            <p className="text-text-secondary leading-relaxed text-lg mb-8">
              Passionate about transforming ideas into engaging visual
              content that enhances brand identity and user experience.
            </p>

            <a
              href={resume}
              download
              className="inline-flex items-center justify-center px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
}

export default About;