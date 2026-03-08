import html from "../assets/html.png";
import css from "../assets/css.png";
import wordpress from "../assets/wordpress.png";
import figma from "../assets/figma.png";
import canva from "../assets/canva.png";
import photoshop from "../assets/photoshop.jpg";
import illustrator from "../assets/illustrator.png";

const tools = [
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "WORDPRESS", img: wordpress },
  { name: "FIGMA", img: figma },
  { name: "CANVA", img: canva },
  { name: "PHOTOSHOP", img: photoshop },
  { name: "ILLUSTRATOR", img: illustrator },
];

function Tools() {
  return (
    <section id="tools" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Tools
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">

          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center flex flex-col items-center"
            >
              <img
                src={tool.img}
                alt={tool.name}
                className="h-12 sm:h-16 mb-3 object-contain"
              />
              <p className="font-medium text-sm sm:text-base">{tool.name}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Tools;