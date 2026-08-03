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
import adventureStandy from "../assets/adventure-standy.jpg";
import Customer from "../assets/Customer.png";
import Setting from "../assets/Setting.png";
import Chat from "../assets/Chat.png";
import Menu from "../assets/Menu.png";
import foodDeliveryHome from "../assets/foodDeliveryHome.png";
import foodDeliveryConfirmation from "../assets/foodDeliveryOrderConfirm.png";
import foodDeliveryStatus from "../assets/foodDeliveryOrderStatus.png";
import churchBanner from "../assets/church-banner.jpg";

// Import poster and advertisement mockup assets
import groundnutRealTaste from "../assets/sales the groundnut oil.jpg";
import gingellyOil from "../assets/oil.jpg";
import coconutOil from "../assets/coconut oil.jpg";
import groundnutFarm from "../assets/groundnut oil poster 2.jpg";
import productCollection from "../assets/cooking oil.jpg";
import iceCreamPoster from "../assets/icrcream promotion.jpg";
import mattressAd from "../assets/promoting beds.jpg";
import gamingHeadphones from "../assets/headphone sales.jpg";
import aachiChilli from "../assets/red chill powder.jpg";

export const projects = [
  {
    title: "Cold Pressed Groundnut Oil (Real Taste)",
    category: "Graphic Design",
    img: groundnutRealTaste,
    images: [groundnutRealTaste],
    role: "Graphic Designer",
    tools: ["Photoshop", "Illustrator"],
    description: "Headline: Real Taste with Real Nutrition in Every Drop. Subheading: Experience the richness of traditionally cold-pressed groundnut oil, packed with natural goodness for healthier cooking. Features: 100% Natural | Cold Pressed | No Artificial Chemicals | Rich in Vitamin E | Heart Healthy. CTA: Cook Healthy. Live Better.",
    link: "https://www.behance.net/gallery/220117481/Saloon-POS-Dashboard",
    isPortrait: true,
    mockupType: "poster-frame-wood",
  },
  {
    title: "Gingelly Oil Promotion",
    category: "Graphic Design",
    img: gingellyOil,
    images: [gingellyOil],
    role: "Graphic Designer",
    tools: ["Photoshop", "Illustrator"],
    description: "Headline: Cook Healthy Recipes with Premium Gingelly Oil. Subheading: Bring authentic flavor and nutrition to every meal with naturally extracted sesame oil. Features: Traditional Wood Pressed | Rich Aroma | High Nutritional Value | Perfect for Everyday Cooking. CTA: Healthy Food Begins with Healthy Oil.",
    link: "https://www.behance.net/gallery/220117481/Saloon-POS-Dashboard",
    isPortrait: true,
    mockupType: "poster-hanging",
  },
  {
    title: "Coconut Oil",
    category: "Graphic Design",
    img: coconutOil,
    images: [coconutOil],
    role: "Graphic Designer",
    tools: ["Photoshop", "Illustrator"],
    description: "Headline: Made from the Finest Quality Coconuts. Subheading: Pure coconut oil crafted using traditional methods to preserve its natural nutrients and freshness. Features: Cold Pressed | No Preservatives | Natural Aroma | Suitable for Cooking & Wellness. CTA: Nature's Goodness in Every Drop.",
    link: "https://www.behance.net/gallery/220117481/Saloon-POS-Dashboard",
    isPortrait: true,
    mockupType: "poster-frame-silver",
  },
  {
    title: "Groundnut Oil (Farm Background)",
    category: "Graphic Design",
    img: groundnutFarm,
    images: [groundnutFarm],
    role: "Graphic Designer",
    tools: ["Photoshop", "Illustrator"],
    description: "Headline: Pure Goodness. Richer Taste. Features: Wood Pressed | 100% Pure | No Chemicals | Rich in Vitamin E | Heart Friendly | Naturally Nutritious. CTA: Healthy Family Starts with Healthy Cooking.",
    link: "https://www.behance.net/gallery/220117481/Saloon-POS-Dashboard",
    isPortrait: true,
    mockupType: "poster-hanging",
  },
  {
    title: "Product Collection Poster",
    category: "Graphic Design",
    img: productCollection,
    images: [productCollection],
    role: "Graphic Designer",
    tools: ["Photoshop", "Illustrator"],
    description: "Headline: The Health You Need. The Taste You Love. Subheading: Choose from our premium collection of naturally extracted cooking oils for every kitchen. Products: Groundnut Oil | Gingelly Oil | Coconut Oil. CTA: Healthy Choices Begin Here.",
    link: "https://www.behance.net/gallery/220117481/Saloon-POS-Dashboard",
    isPortrait: true,
    mockupType: "poster-billboard",
  },
  {
    title: "Ice Cream Poster",
    category: "Graphic Design",
    img: iceCreamPoster,
    images: [iceCreamPoster],
    role: "Graphic Designer",
    tools: ["Photoshop"],
    description: "Headline: Summer Special Ice Cream. Offer: Limited Time Offer. Highlights: Real Fruit Flavours | Premium Ingredients | Free Home Delivery | Freshly Made Daily. Price: Only ₹150. CTA: Order Now & Beat the Heat!",
    link: "https://www.behance.net/gallery/220117481/Saloon-POS-Dashboard",
    isPortrait: true,
    mockupType: "poster-frame-wood",
  },
  {
    title: "Mattress Advertisement",
    category: "Print & Branding",
    img: mattressAd,
    images: [mattressAd],
    role: "Graphic Designer",
    tools: ["Photoshop"],
    description: "Headline: Wake Up Fresh Every Morning. Subheading: Sleep better with premium comfort designed for healthier living. Features: 10-Year Warranty | Anti-Dust Technology | Allergy Free | Ultra Comfort Foam | Breathable Fabric. CTA: Book Your Perfect Sleep Today.",
    link: "https://www.behance.net/gallery/220117481/Saloon-POS-Dashboard",
    isPortrait: true,
    mockupType: "poster-billboard",
  },
  {
    title: "Gaming Headphones",
    category: "Graphic Design",
    img: gamingHeadphones,
    images: [gamingHeadphones],
    role: "Graphic Designer",
    tools: ["Photoshop"],
    description: "Headline: Professional Gaming Headphones. Features: 80 Hours Battery | Bluetooth Connectivity | Low Latency | Crystal Clear Audio | Comfortable Ear Cushions | Noise Cancellation. Offer: 30% OFF. CTA: Upgrade Your Gaming Experience.",
    link: "https://www.behance.net/gallery/220117481/Saloon-POS-Dashboard",
    isPortrait: true,
    mockupType: "poster-frame-silver",
  },
  {
    title: "Aachi Chilli Powder",
    category: "Print & Branding",
    img: aachiChilli,
    images: [aachiChilli],
    role: "Graphic Designer",
    tools: ["Photoshop"],
    description: "Headline: Real Flavour for Every Dish. Subheading: Made from carefully selected premium red chillies to bring authentic taste to every recipe. Features: Rich Colour | Strong Aroma | Premium Quality | Hygienically Packed. CTA: Add the Perfect Spice to Every Meal.",
    link: "https://www.behance.net/gallery/220117481/Saloon-POS-Dashboard",
    isPortrait: true,
    mockupType: "packaging",
  },
  {
    title: "Blessing & Prayer Ceremony Banner",
    category: "Graphic Design",
    img: churchBanner,
    images: [churchBanner],
    role: "Visual Designer",
    tools: ["Photoshop"],
    description: "Title: Blessing & Prayer Ceremony. Description: A day filled with faith, gratitude, prayer, and community gathering. May God's blessings bring peace, hope, and joy to every family. Quote: 'Faith brings hope, prayer brings strength, and love brings us together.' Footer: Thank you to everyone who participated and made this celebration memorable.",
    link: "https://www.behance.net/gallery/220117481/Saloon-POS-Dashboard",
    isPortrait: true,
    mockupType: "banner",
  },
  {
    title: "A River Adventure - Standy Design",
    category: "Print & Branding",
    img: adventureStandy,
    images: [adventureStandy],
    role: "Visual Designer",
    tools: ["Photoshop", "Illustrator"],
    description: "A large-scale outdoor marketing standy and promotional poster designed for an adventure park. Features highly dynamic thematic layouts, high-fidelity vector assets, and print-ready formatting.",
    link: "https://www.behance.net/gallery/220116363/Food-Restaurant-End-User-App",
    isPortrait: true,
    mockupType: "standy",
  },
  {
    title: "GourmetGo - Food Delivery App",
    category: "Mobile UI",
    img: app,
    images: [app, menuScreen, onBoarding, foodDeliveryHome, foodDeliveryConfirmation, foodDeliveryStatus],
    role: "Lead UI/UX Designer",
    tools: ["Figma", "Illustrator"],
    description: "An elegant, user-centric mobile application designed to streamline the food ordering and delivery experience. Focuses on mouth-watering visual presentations, highly intuitive navigation, smooth menu interactions, and real-time order tracking.",
    link: "https://www.behance.net/gallery/220116363/Food-Restaurant-End-User-App",
    mockupType: "mobile",
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
    mockupType: "desktop",
  },
  {
    title: "Restaurant POS System",
    category: "Web & POS",
    img: restaurant,
    images: [restaurant, Menu, Customer, Setting, Chat],
    role: "UI/UX Designer",
    tools: ["Figma"],
    description: "A robust, high-performance touch screen POS system built for fast-paced restaurant environments. Designed with quick-action layouts, table grid mapping, payment integrations, and clear receipt previews.",
    link: "https://www.behance.net/gallery/220127795/Restaurant-POS-Dashboard",
    mockupType: "desktop",
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
    isPortrait: true,
    mockupType: "poster",
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
    isPortrait: true,
    mockupType: "album",
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
    isPortrait: true,
    mockupType: "album",
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
    isPortrait: true,
    mockupType: "poster",
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
    isPortrait: true,
    mockupType: "pamphlet",
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
    isPortrait: true,
    mockupType: "desktop",
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
    isPortrait: true,
    mockupType: "poster",
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
    isPortrait: true,
    mockupType: "poster",
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
                  className={`relative px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 active:scale-95 cursor-pointer ${activeCategory === cat
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
              className="group relative block overflow-hidden rounded-3xl aspect-[4/3] sm:aspect-[16/10] cursor-pointer border border-white/5 shadow-2xl transition-all duration-500 hover:border-white/10 hover:shadow-accent-primary/5"
            >
              <div className="w-full h-full relative flex items-center justify-center p-4 bg-slate-950/90 overflow-hidden">
                {/* Soft blurred background backdrop */}
                <img
                  src={project.img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 pointer-events-none scale-110"
                />
                {/* Apply poster mockup frames for first 8 images only */}
                {projects.findIndex(p => p.title === project.title) < 8 ? (
                  /* Render diversified mockups for first 8 projects */
                  project.mockupType === "poster-frame-wood" ? (
                    /* 3D Wooden Framed Poster Mockup */
                    <div className="relative h-[85%] max-h-[250px] aspect-[1/1.4] bg-[#22160d] border-[6px] border-[#3e2723] rounded-lg shadow-[0_20px_45px_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(255,255,255,0.05)] overflow-hidden transition-all duration-700 group-hover:scale-[1.02] flex items-center justify-center p-2">
                      <div className="absolute inset-0 border border-black/60 z-10 pointer-events-none" />
                      <div className="w-full h-full bg-slate-950 overflow-hidden relative shadow-inner">
                        <img src={project.img} className="w-full h-full object-contain object-center" loading="lazy" alt={project.title} />
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-20" />
                      </div>
                    </div>
                  ) : project.mockupType === "poster-frame-silver" ? (
                    /* 3D Metallic Framed Poster Mockup */
                    <div className="relative h-[85%] max-h-[250px] aspect-[1/1.4] bg-[#9e9e9e] border-[5px] border-[#e0e0e0] rounded-lg shadow-[0_20px_45px_rgba(0,0,0,0.8),inset_0_1px_3px_rgba(255,255,255,0.5)] overflow-hidden transition-all duration-700 group-hover:scale-[1.02] flex items-center justify-center p-1.5">
                      <div className="absolute inset-0 border border-black/40 z-10 pointer-events-none" />
                      <div className="w-full h-full bg-slate-950 overflow-hidden relative shadow-inner">
                        <img src={project.img} className="w-full h-full object-contain object-center" loading="lazy" alt={project.title} />
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-20" />
                      </div>
                    </div>
                  ) : project.mockupType === "poster-hanging" ? (
                    /* Hanging Bulldog Clip Paper Poster Mockup */
                    <div className="relative h-[85%] max-h-[250px] aspect-[1/1.4] flex flex-col items-center justify-center select-none group-hover:scale-[1.03] transition-all duration-700 pt-4">
                      {/* Metal bulldog clip */}
                      <div className="absolute top-0 w-8 h-3.5 bg-gradient-to-b from-neutral-400 to-neutral-600 rounded-t-sm shadow-md border-b border-black/30 flex items-center justify-center z-20">
                        <div className="w-4 h-1.5 bg-neutral-800 rounded-sm" />
                      </div>
                      {/* Hanging String */}
                      <div className="absolute top-[-8px] w-[1px] h-3 bg-neutral-500 z-10" />
                      {/* Paper Poster */}
                      <div className="flex-1 w-full bg-[#faf9f6] text-black shadow-[0_15px_35px_rgba(0,0,0,0.6)] relative overflow-hidden p-1">
                        <img src={project.img} className="w-full h-full object-contain object-center rounded-sm" loading="lazy" alt={project.title} />
                        {/* Paper curling shadow and curve highlights */}
                        <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/15 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-3 bg-gradient-to-l from-black/15 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                  ) : (
                    /* Glow Billboard Lightbox Mockup (poster-billboard) */
                    <div className="relative h-[80%] max-h-[240px] aspect-[1.5] bg-neutral-900 border-[8px] border-neutral-900 rounded-lg shadow-[0_20px_45px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-700 group-hover:scale-[1.02] flex flex-col justify-between">
                      <div className="flex-1 w-full bg-slate-950 relative shadow-inner overflow-hidden">
                        <img src={project.img} className="w-full h-full object-contain object-center" loading="lazy" alt={project.title} />
                        <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_80%) pointer-events-none z-10" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-15" />
                      </div>
                      {/* Metal base support plate */}
                      <div className="h-[5%] w-full bg-gradient-to-b from-neutral-800 to-neutral-900 border-t border-black/50" />
                    </div>
                  )
                ) : projects.findIndex(p => p.title === project.title) >= projects.length - 2 ? (
                  /* Render the last two projects in normal way (Clean raw image view) */
                  <div className="relative w-full h-full flex items-center justify-center p-2">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="max-w-full max-h-[85%] object-contain rounded-2xl shadow-xl transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  project.mockupType === "mobile" ? (
                    /* Smartphone screen mockup */
                    <div className="h-[80%] max-h-[280px] md:max-h-[320px] aspect-[9/19] relative border-[4px] md:border-[6px] border-slate-800 bg-black rounded-[24px] md:rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[5%] max-h-[14px] bg-slate-800 rounded-b-xl z-20 flex items-center justify-center">
                        <div className="w-1/3 h-[20%] bg-slate-900 rounded-full mb-0.5" />
                      </div>
                      {/* Viewport content */}
                      <div className="w-full h-full rounded-[18px] md:rounded-[26px] overflow-hidden relative bg-black">
                        <img src={project.img} className="w-full h-full object-cover object-top" loading="lazy" alt={project.title} />
                        {/* Home bar */}
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/60 rounded-full z-20" />
                      </div>
                    </div>
                  ) : project.mockupType === "standy" ? (
                    /* 3D Roll-Up Standy Mockup */
                    <div className="relative h-[90%] max-h-[280px] aspect-[1/2.3] flex flex-col items-center justify-between select-none group-hover:scale-[1.03] transition-transform duration-700">
                      {/* Metallic Top Bar */}
                      <div className="w-[95%] h-[2.5%] bg-gradient-to-r from-slate-400 via-slate-200 to-slate-500 rounded-t-sm shadow-sm border-b border-black/40 z-10" />
                      {/* Banner Print Area */}
                      <div className="flex-1 w-[90%] bg-slate-900 relative shadow-2xl border-x border-white/5 overflow-hidden">
                        <img src={project.img} className="w-full h-full object-cover object-center" loading="lazy" alt={project.title} />
                        {/* Banner curve highlights */}
                        <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-l from-black/20 via-transparent to-transparent pointer-events-none" />
                        {/* Outdoor glare overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
                      </div>
                      {/* Metallic Roll-up Base */}
                      <div className="w-full h-[6%] bg-gradient-to-b from-slate-300 via-slate-400 to-slate-600 rounded-sm shadow-md border-t border-white/10 flex flex-col justify-between items-center z-10">
                        {/* Base shadow crease */}
                        <div className="h-[20%] w-full bg-black/20" />
                        <div className="h-[10%] w-3/4 bg-slate-800/80 rounded-t-sm" />
                      </div>
                      {/* Standy Feet Support */}
                      <div className="w-[105%] h-[1.5%] flex justify-between px-2 z-0 -mt-[1px]">
                        <div className="w-[20%] h-full bg-gradient-to-b from-slate-600 to-slate-800 rounded-b-md shadow-md" />
                        <div className="w-[20%] h-full bg-gradient-to-b from-slate-600 to-slate-800 rounded-b-md shadow-md" />
                      </div>
                    </div>
                  ) : (project.mockupType === "desktop" || project.mockupType === "pamphlet" || project.mockupType === "banner") ? (
                    /* Desktop web browser mockup */
                    <div className="w-[85%] max-w-[450px] aspect-[16/10] bg-slate-900 rounded-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col transition-transform duration-700 group-hover:scale-[1.02]">
                      {/* Browser Toolbar header */}
                      <div className="h-6 bg-slate-950 px-3 flex items-center gap-1.5 border-b border-white/5 select-none shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                        <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                        <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                      </div>
                      {/* Viewport content */}
                      <div className="flex-1 w-full bg-slate-950 overflow-hidden relative">
                        <img src={project.img} className="w-full h-full object-cover object-top" loading="lazy" alt={project.title} />
                      </div>
                    </div>
                  ) : (
                    /* Instagram Carousel/Post Mockup for album, book, packaging, poster */
                    <div className="relative h-[80%] max-h-[250px] aspect-square bg-[#050505] rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col group-hover:scale-[1.02] transition-transform duration-700">
                      {/* Mock Instagram Header */}
                      <div className="h-9 px-3 flex items-center justify-between border-b border-white/5 shrink-0 bg-black/20">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-accent-primary to-accent-secondary" />
                          <span className="text-[10px] font-bold text-white/80 tracking-wide">revathi_designs</span>
                        </div>
                        <div className="flex gap-[2px]">
                          <div className="w-1 h-1 rounded-full bg-white/40" />
                          <div className="w-1 h-1 rounded-full bg-white/40" />
                          <div className="w-1 h-1 rounded-full bg-white/40" />
                        </div>
                      </div>
                      {/* Viewport/Image container */}
                      <div className="flex-1 w-full bg-slate-950 overflow-hidden relative flex items-center justify-center">
                        <img src={project.img} className="w-full h-full object-contain" loading="lazy" alt={project.title} />

                        {/* Carousel Indicator Icon */}
                        <div className="absolute top-2.5 right-2.5 bg-black/60 p-1.5 rounded-lg border border-white/10 text-white/90 z-10">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 2H8a2 2 0 00-2 2v1H5a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-1h1a2 2 0 002-2V4a2 2 0 00-2-2zM8 4h11v11H8V4zm11 16H5V7h1V6a2 2 0 012-2h1v11a2 2 0 002 2h7v1z" />
                          </svg>
                        </div>

                        {/* Dots Indicator Overlay */}
                        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1 bg-black/50 px-2 py-1 rounded-full z-10">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

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
        className="relative bg-bg-secondary border border-white/5 rounded-3xl w-full max-w-6xl overflow-y-auto lg:overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[92vh] lg:max-h-[85vh] animate-reveal"
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
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeImageIndex === idx ? "w-6 bg-accent-primary" : "w-2.5 bg-white/20 hover:bg-white/40"
                      }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Detailed Project Metadata Panel */}
        <div className="w-full lg:w-2/5 p-6 md:p-10 flex flex-col justify-between lg:overflow-y-auto h-auto lg:h-full max-h-none lg:max-h-none">
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


