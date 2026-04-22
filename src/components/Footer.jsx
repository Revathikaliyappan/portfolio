import { FaLinkedin, FaGithub, FaBehance, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-xl font-bold text-white tracking-tight">
            REV<span className="text-accent-primary">ATHI</span>
          </h2>
          <p className="text-text-secondary text-sm">
            Crafting digital excellence through design.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-8 text-xl text-text-secondary">
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
          <a
            href="mailto:itrevathik2012@gmail.com"
            className="hover:text-white transition-all hover:-translate-y-1"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-text-secondary text-xs tracking-widest uppercase font-medium">
          © {new Date().getFullYear()} All Rights Reserved
        </p>

      </div>
    </footer>
  );
}

export default Footer;