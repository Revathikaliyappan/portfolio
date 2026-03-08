import { FaLinkedin, FaGithub, FaBehance, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Copyright */}
        <p className="text-center md:text-left text-sm md:text-base">
          © {new Date().getFullYear()} Revathi | All Rights Reserved
        </p>

        {/* Social Links */}
        <div className="flex gap-6 text-xl md:text-2xl justify-center md:justify-end">
          <a
            href="https://www.linkedin.com/in/revathi-vijaya-342049217"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Revathikaliyappan"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.behance.net/revathikaliyap"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-600 transition-colors"
          >
            <FaBehance />
          </a>
          <a
            href="mailto:itrevathik2012@gmail.com"
            className="hover:text-blue-500 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;