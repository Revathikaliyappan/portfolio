import { FaLinkedin, FaGithub, FaBehance, FaArrowDown } from "react-icons/fa";

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-mesh px-4 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/20 rounded-full blur-[128px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[128px] -z-10 animate-pulse delay-700"></div>

      <div className="text-center max-w-4xl mx-auto z-10">
        <div className="animate-reveal">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-accent-primary uppercase glass rounded-full">
            Available for freelance
          </span>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-4">
            Creative <span className="text-gradient">Designer</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            I'm <span className="text-white font-medium">Revathi</span>, specialized in crafting visually stunning 
            Graphic Designs and intuitive UI experiences that leave a lasting impression.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="mailto:itrevathik2012@gmail.com"
              className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Get in touch</span>
              <div className="absolute inset-0 bg-accent-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </a>
            
            <div className="flex items-center gap-6 text-2xl text-text-secondary">
              <a
                href="https://www.linkedin.com/in/revathi-vijaya-342049217"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-all hover:-translate-y-1"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/Revathikaliyappan"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-all hover:-translate-y-1"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.behance.net/revathikaliyap"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-all hover:-translate-y-1"
              >
                <FaBehance />
              </a>
            </div>
          </div>
        </div>

        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-secondary animate-bounce hover:text-white transition-colors"
        >
          <FaArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}

export default Home;