import { FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";

function Home() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gray-50 px-4"
    >
      <div className="text-center">

        <p className="text-lg sm:text-base text-gray-600">
          Hello,
        </p>

        <h1 className="text-4xl sm:text-3xl md:text-5xl font-bold mt-2">
          I'm Revathi
        </h1>

        <h2 className="text-lg sm:text-base md:text-xl text-blue-600 mt-4">
          Graphic Designer | UI Designer
        </h2>

        <div className="mt-6">
          <a
            href="mailto:itrevathik2012@gmail.com"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-sm sm:text-base"
          >
            Hire Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 sm:gap-6 mt-6 text-xl sm:text-lg md:text-2xl text-gray-700">
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
            className="hover:text-black transition-colors"
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
        </div>

      </div>
    </section>
  );
}

export default Home;