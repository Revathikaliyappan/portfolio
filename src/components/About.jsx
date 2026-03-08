import img from '../assets/Banner.jpeg';
import resume from '../documents/Graphical Designer - Revathi.pdf';

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <img
          src={img}
          alt="Revathi Banner"
          className="rounded-xl shadow-lg w-full h-auto object-cover"
        />

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Creative Graphic Designer with experience in creating visually appealing
            designs for digital and print media. Skilled in Adobe Illustrator, Photoshop,
            Canva, and Figma with a strong understanding of typography, color theory, and
            layout design. Passionate about transforming ideas into engaging visual
            content that enhances brand identity and user experience.
          </p>

          <a
            href={resume}
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Download CV
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;