import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tools", href: "#tools" },
    { name: "Works", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "top-4" : "top-0"}`}>
      <div className={`max-w-4xl mx-auto flex justify-between items-center px-6 py-3 transition-all duration-300 ${scrolled ? "glass rounded-full shadow-2xl mx-4 md:mx-auto" : "bg-transparent"}`}>

        {/* Logo */}
        <h1 className="text-xl font-bold text-white tracking-tight">
          REV<span className="text-accent-primary">ATHI</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-text-secondary hover:text-white transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden text-xl cursor-pointer text-white" onClick={toggleNav}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-[calc(100%-2rem)] left-4 mt-2 transition-all duration-300 ${
          navOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="glass rounded-2xl flex flex-col items-center gap-6 py-8 shadow-2xl">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-text-secondary text-lg hover:text-white transition-colors"
                onClick={() => setNavOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;