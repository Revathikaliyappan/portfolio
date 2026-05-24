import { useState, useEffect } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaTools, FaRegUser } from "react-icons/fa";

// Import all assets
import salon from "../assets/Saloon.png";
import salonDashboard from "../assets/Salon Dashboard.jpg";
import restaurant from "../assets/res pos.png";
import app from "../assets/Home.png";
import foodDelivery from "../assets/foodDelivery.png";
import menuScreen from "../assets/menuScreen.png";
import onBoarding from "../assets/onboardingScreen.png";
import futureIsAlreadyWatching from "../assets/The Future is already watching - Cover Page.png";
import powerOfRelationship from "../assets/The Power of Relationship - Cover Page.png";
import scifi from "../assets/scifi.jpeg";
import easter from "../assets/easteregg.jpeg";
import poster from "../assets/poster.jpeg";
import brochure from "../assets/broucher.jpeg";
import tshirt from "../assets/tshirt.jpeg";
import product1 from "../assets/product-1.jpeg";
import product2 from "../assets/product-2.jpeg";

export const projects = [
  {
    title: "GourmetGo - Food Delivery App",
    category: "Mobile UI",
    img: app,
    images: [app, menuScreen, onBoarding, foodDelivery],
    role: "Lead UI/UX Designer",
    tools: ["Figma", "Illustrator"],
    description: "An elegant, user-centric mobile application designed to streamline the food ordering and delivery experience. Focuses on mouth-watering visual presentations, highly intuitive navigation, smooth menu interactions, and real-time order tracking.",
    link: "https://www.behance.net/gallery/220116363/Food-Restaurant-End-User-App",
  },
  {
    title: "Salon POS & Scheduler",
    category: "Web & POS",
    img: salon,
    images: [salon, salonDashboard],
    role: "Product Designer",
    tools: ["Figma", "Photoshop"],
    description: "A comprehensive point-of-sale and appointment management platform tailored for high-end beauty salons. Optimizes service scheduling, stylist allocations, inventory management, and provides intuitive analytics dashboards.",
    link: "https://www.behance.net/gallery/220117481/Saloon-POS-Dashboard",
  },
  {
    title: "Restaurant POS System",
    category: "Web & POS",
    img: restaurant,
    images: [restaurant],
    role: "UI/UX Designer",
    tools: ["Figma"],
    description: "A robust, high-performance touch screen POS system built for fast-paced restaurant environments. Designed with quick-action layouts, table grid mapping, payment integrations, and clear receipt previews.",
    link: "https://www.behance.net/gallery/220127795/Restaurant-POS-Dashboard",
  },
  {
    title: "Eco-Friendly Product Branding",
    category: "Print & Branding",
    img: product1,
    images: [product1, product2],
    role: "Branding Designer",
    tools: ["Photoshop", "Canva"],
    description: "A complete packaging and visual identity system created for a premium organic product line. Uses natural earth tones, minimalistic layouts, and high-fidelity mockups to communicate sustainability and elegance.",
    link: "https://www.behance.net/gallery/220116363/Food-Restaurant-End-User-App",
  },
  {
    title: "Sci-Fi Instagram Carousel",
    category: "Graphic Design",
    img: scifi,
    images: [scifi],
    role: "Graphic Designer",
    tools: ["Photoshop", "Canva"],
    description: "A visually striking multi-slide social media campaign based around cyberpunk and futuristic sci-fi aesthetics. Highlighting glowing typography, neon color palettes, and seamless slide transitions to maximize engagement.",
    link: "https://www.behance.net/gallery/220117481/Saloon-POS-Dashboard",
  },
  {
    title: "Easter Hunt Campaign",
    category: "Graphic Design",
    img: easter,
    images: [easter],
    role: "Graphic Designer",
    tools: ["Illustrator", "Photoshop"],
    description: "A bright, playful, and engaging social media carousel campaign for Easter events. Uses tailored pastel branding, high-quality illustrations, custom iconography, and interactive puzzle elements.",
    link: "https://www.behance.net/gallery/220127795/Restaurant-POS-Dashboard",
  },
  {
    title: "Apparel Merchandise Design",
    category: "Print & Branding",
    img: tshirt,
    images: [tshirt],
    role: "Graphic Designer",
    tools: ["Photoshop"],
    description: "Modern typographic and illustrative apparel designs presented in high-fidelity realistic t-shirt mockups. Designed for maximum streetwear aesthetic and clean silk-screen production layout.",
    link: "https://www.behance.net/gallery/220116363/Food-Restaurant-End-User-App",
  },
  {
    title: "Corporate Trifold Brochure",
    category: "Print & Branding",
    img: brochure,
    images: [brochure],
    role: "Print & Graphic Designer",
    tools: ["Illustrator", "Canva"],
    description: "A modern trifold corporate brochure designed with clean grid geometry, premium typography, and spacious layouts. Balanced for informative content delivery with strong visual hierarchies.",
    link: "https://www.behance.net/gallery/220116363/Food-Restaurant-End-User-App",
  },
  {
    title: "Creative Event Poster",
    category: "Graphic Design",
    img: poster,
    images: [poster],
    role: "Poster Designer",
    tools: ["Photoshop", "Illustrator"],
    description: "A visually complex poster combining illustrative textures, bold retro-modern typography, and conceptual color schemes. Crafted to stand out in physical print spaces and high-traffic digital feeds.",
    link: "https://www.behance.net/gallery/220117481/Saloon-POS-Dashboard",
  },
  {
    title: "The Future is Already Watching",
    category: "Print & Branding",
    img: futureIsAlreadyWatching,
    images: [futureIsAlreadyWatching],
    role: "Book Cover Designer",
    tools: ["Photoshop"],
    description: "A mysterious and atmospheric sci-fi book cover design featuring dramatic cinematic lighting, deep shadow details, and futuristic title typographic composition.",
    link: "https://www.behance.net/gallery/220116363/Food-Restaurant-End-User-App",
  },
  {
    title: "The Power of Relationship",
    category: "Print & Branding",
    img: powerOfRelationship,
    images: [powerOfRelationship],
    role: "Book Cover Designer",
    tools: ["Illustrator"],
    description: "A warm, minimalist, and highly conceptual book cover design. Employs stylized abstract line art and sophisticated editorial layout to evoke connection and emotional resonance.",
    link: "https://www.behance.net/gallery/220116363/Food-Restaurant-End-User-App",
  }
];

const categories = ["All", "Mobile UI", "Web & POS", "Graphic Design", "Print & Branding"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects based on selected category
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-bg-secondary px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="animate-reveal">
            <span className="text-accent-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Selected <span className="text-gradient">Works</span>
            </h2>
            
            {/* Filter Category Tabs */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 active:scale-95 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-white text-black shadow-lg shadow-white/5 font-bold"
                      : "glass text-text-secondary hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <p className="text-text-secondary text-base md:text-lg max-w-md md:text-right leading-relaxed">
            A curated showcase of design solutions, translating complex concepts into clean, high-fidelity visual assets and immersive interfaces.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="group relative block overflow-hidden rounded-3xl aspect-[16/10] cursor-pointer border border-white/5 shadow-2xl transition-all duration-500 hover:border-white/10 hover:shadow-accent-primary/5"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8">
                <span className="text-accent-primary text-xs font-semibold tracking-widest uppercase mb-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.category}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary text-sm line-clamp-2 mb-4 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  {project.description}
                </p>

                <div className="flex items-center text-white text-sm font-semibold translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                  <span>Explore Design Specs</span>
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              
              {/* Standard Initial Badge */}
              <div className="absolute top-5 right-5 glass px-4 py-1.5 rounded-full text-[10px] font-bold text-white tracking-widest uppercase group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                {project.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      {selectedProject && (
        <ProjectModal
          key={selectedProject.title}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

// Lightbox Modal Component with keyboard navigation and slider support
function ProjectModal({ project, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close on Escape, navigate on Arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (project.images && project.images.length > 1) {
        if (e.key === "ArrowRight") {
          setActiveImageIndex((prev) => (prev + 1) % project.images.length);
        }
        if (e.key === "ArrowLeft") {
          setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // Lock page scroll

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = ""; // Restore page scroll
    };
  }, [project, onClose]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % project.images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-bg-secondary border border-white/5 rounded-3xl w-full max-w-6xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh] md:max-h-[85vh] animate-reveal"
        onClick={(e) => e.stopPropagation()} // Stop closing on click inside content
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-white hover:text-black hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <FaTimes size={18} />
        </button>

        {/* Left Side: Dynamic Image Carousel/Viewer */}
        <div className="w-full lg:w-3/5 bg-black/40 flex flex-col justify-center relative min-h-[300px] md:min-h-[450px] lg:min-h-0 border-b lg:border-b-0 lg:border-r border-white/5 select-none">
          {/* Main Active Image */}
          <div className="w-full h-full p-4 flex items-center justify-center overflow-hidden">
            <img
              src={project.images ? project.images[activeImageIndex] : project.img}
              alt={`${project.title} screenshot ${activeImageIndex + 1}`}
              className="max-w-full max-h-[50vh] lg:max-h-[70vh] object-contain rounded-xl shadow-xl transition-all duration-500"
            />
          </div>

          {/* Carousel Arrow Controls */}
          {project.images && project.images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-black/60 border border-white/10 text-white hover:bg-white hover:text-black transition-all active:scale-90 cursor-pointer hover:shadow-lg shadow-black/50 z-10"
              >
                <FaChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-black/60 border border-white/10 text-white hover:bg-white hover:text-black transition-all active:scale-90 cursor-pointer hover:shadow-lg shadow-black/50 z-10"
              >
                <FaChevronRight size={16} />
              </button>
            </>
          )}

          {/* Dots Indicator & Multi-screen Label */}
          {project.images && project.images.length > 1 && (
            <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-widest bg-black/60 border border-white/5 px-2.5 py-1 rounded-full text-text-secondary">
                Screen {activeImageIndex + 1} of {project.images.length}
              </span>
              <div className="flex gap-2">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeImageIndex === idx ? "w-6 bg-accent-primary" : "w-2.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Detailed Project Metadata Panel */}
        <div className="w-full lg:w-2/5 p-6 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[40vh] lg:max-h-none">
          <div className="space-y-6">
            <div>
              <span className="text-accent-primary text-xs font-bold tracking-widest uppercase mb-1 block">
                {project.category}
              </span>
              <h3 className="text-3xl font-bold tracking-tight text-white mb-2 leading-none">
                {project.title}
              </h3>
            </div>

            {/* Role & Core Tools */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-accent-primary">
                  <FaRegUser size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-text-secondary uppercase font-semibold tracking-wider">Role</p>
                  <p className="text-sm font-semibold text-white">{project.role}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-accent-secondary">
                  <FaTools size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-text-secondary uppercase font-semibold tracking-wider">Design Tool</p>
                  <p className="text-sm font-semibold text-white">{project.tools.join(", ")}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs uppercase font-bold text-white tracking-widest mb-2">Project Overview</h4>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Styled Tools Badges */}
            <div>
              <h4 className="text-xs uppercase font-bold text-white tracking-widest mb-3">Creative Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3.5 py-1.5 text-xs font-bold tracking-wide rounded-lg glass text-text-primary uppercase border border-white/5"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex-grow flex items-center justify-center gap-2 px-6 py-4 bg-white text-black font-bold rounded-2xl hover:scale-[1.02] active:scale-95 transition-all duration-300 text-sm shadow-xl shadow-white/5"
            >
              <span>View Behance Case Study</span>
              <FaExternalLinkAlt size={12} className="ml-1" />
            </a>
            
            <button
              onClick={onClose}
              className="px-6 py-4 glass text-text-primary font-semibold rounded-2xl hover:bg-white/5 active:scale-95 transition-all duration-300 text-sm cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;


