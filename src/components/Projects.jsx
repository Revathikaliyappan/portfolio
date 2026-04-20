import { useState } from "react";

import salon from "../assets/Saloon.png";
import restaurant from "../assets/res pos.png";
import app from "../assets/Home.png";
import foodDelivery from "../assets/foodDelivery.png";
import menuScreen from "../assets/menuScreen.png";
import onBoarding from "../assets/onboardingScreen.png";
import futureIsAlreadyWatching from "../assets/The Future is already watching - Cover Page.png";
import powerOfRelationship from "../assets/The Power of Relationship - Cover Page.png";
import scifi from "../assets/scifi.jpeg";
import easter from "../assets/easteregg.jpeg";

export const projects = [
  {
    title: "Sci Fi",
    img: scifi,
    link: "https://www.behance.net/gallery/220117481/Saloon-POS-Dashboard",
  },
  {
    title: "Restaurant POS",
    img: easter,
    link: "https://www.behance.net/gallery/220127795/Restaurant-POS-Dashboard",
  },
  {
    title: "Salon POS",
    img: salon,
    link: "https://www.behance.net/gallery/220117481/Saloon-POS-Dashboard",
  },
  {
    title: "Restaurant POS",
    img: restaurant,
    link: "https://www.behance.net/gallery/220127795/Restaurant-POS-Dashboard",
  },
  {
    title: "Restaurant End-User App Main Screen",
    img: app,
    link: "https://www.behance.net/gallery/220116363/Food-Restaurant-End-User-App",
  },
  {
    title: "Restaurant End-User App Tracking Screen",
    img: foodDelivery,
    link: "https://www.behance.net/gallery/220116363/Food-Restaurant-End-User-App",
  },
  {
    title: "Menu Screen",
    img: menuScreen,
    link: "https://www.behance.net/gallery/220116363/Food-Restaurant-End-User-App",
  },
  {
    title: "onboarding Screen",
    img: onBoarding,
    link: "https://www.behance.net/gallery/220116363/Food-Restaurant-End-User-App",
  },
  {
    title: "Book Cover - The Power of Relationship",
    img: powerOfRelationship,
    link: "https://www.behance.net/gallery/220116363/Food-Restaurant-End-User-App",
  },
  {
    title: "Book Cover - The Future is already watching",
    img: futureIsAlreadyWatching,
    link: "https://www.behance.net/gallery/220116363/Food-Restaurant-End-User-App",
  },
];

function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleProject = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          My Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="shadow-lg rounded-xl overflow-hidden p-5 flex flex-col"
            >
              <img
                src={project.img}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-auto object-cover"
              />

              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {openIndex === index ? project.full : project.short}
              </p>

              {/* <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-auto">
                <button
                  onClick={() => toggleProject(index)}
                  className="text-blue-600 font-medium hover:underline"
                >
                  {openIndex === index ? "Show Less" : "More"}
                </button>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Live Project →
                </a>
              </div> */}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;
