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
    title: "Sci Fi Carousel",
    category: "Graphic Design",
    img: scifi,
    link: "https://www.behance.net/gallery/220117481/Saloon-POS-Dashboard",
  },
  {
    title: "Easter Hunt Carousel",
    category: "Graphic Design",
    img: easter,
    link: "https://www.behance.net/gallery/220127795/Restaurant-POS-Dashboard",
  },
  {
    title: "Salon POS",
    category: "UI Design",
    img: salon,
    link: "https://www.behance.net/gallery/220117481/Saloon-POS-Dashboard",
  },
  {
    title: "Restaurant POS",
    category: "UI Design",
    img: restaurant,
    link: "https://www.behance.net/gallery/220127795/Restaurant-POS-Dashboard",
  },
  {
    title: "Food App Main",
    category: "Mobile UI",
    img: app,
    link: "https://www.behance.net/gallery/220116363/Food-Restaurant-End-User-App",
  },
  {
    title: "Tracking Screen",
    category: "Mobile UI",
    img: foodDelivery,
    link: "https://www.behance.net/gallery/220116363/Food-Restaurant-End-User-App",
  },
  {
    title: "Menu Interface",
    category: "UI Design",
    img: menuScreen,
    link: "https://www.behance.net/gallery/220116363/Food-Restaurant-End-User-App",
  },
  {
    title: "App Onboarding",
    category: "Mobile UI",
    img: onBoarding,
    link: "https://www.behance.net/gallery/220116363/Food-Restaurant-End-User-App",
  },
  {
    title: "Power of Relationship",
    category: "Book Cover",
    img: powerOfRelationship,
    link: "https://www.behance.net/gallery/220116363/Food-Restaurant-End-User-App",
  },
  {
    title: "The Future",
    category: "Book Cover",
    img: futureIsAlreadyWatching,
    link: "https://www.behance.net/gallery/220116363/Food-Restaurant-End-User-App",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg-secondary px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="animate-reveal">
            <span className="text-accent-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Selected <span className="text-gradient">Works</span>
            </h2>
          </div>
          <p className="text-text-secondary text-lg max-w-md md:text-right">
            A collection of projects where I've combined aesthetic appeal with functional design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-3xl aspect-[16/10]"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-accent-primary text-sm font-semibold tracking-widest uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {project.title}
                </h3>
                <div className="flex items-center text-white/70 text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  View Case Study 
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              
              {/* Initial Badge */}
              <div className="absolute top-6 right-6 glass px-4 py-1.5 rounded-full text-xs font-bold text-white tracking-widest uppercase group-hover:opacity-0 transition-opacity">
                {project.category}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

