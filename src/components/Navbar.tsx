import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import clsx from "clsx";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  let timeoutId: ReturnType<typeof setTimeout>;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setIsDropdownVisible(false), 150);
  };

  return (
    <>
{/* Mobile Fullscreen Dropdown Menu */}
{menuOpen && (
  <div className="fixed inset-0 z-40 bg-[#121214] px-4 py-6 flex items-start justify-center transition-all duration-300">
    <div className="w-full max-w-[90%] bg-[#181818] border border-white/10 rounded-2xl py-8 px-6 flex flex-col items-center gap-6 text-white text-lg font-medium shadow-xl mt-[64px]">
      <a href="#whyus" className="hover:text-orange-400 transition" onClick={() => setMenuOpen(false)}>Why Us</a>
      <a href="#mission" className="hover:text-orange-400 transition" onClick={() => setMenuOpen(false)}>Mission</a>
      <a href="#works" className="hover:text-orange-400 transition" onClick={() => setMenuOpen(false)}>Works</a>
      <a href="#services" className="hover:text-orange-400 transition" onClick={() => setMenuOpen(false)}>Services</a>
      <Link to="/contact" className="hover:text-orange-400 transition" onClick={() => setMenuOpen(false)}>Contact</Link>
      <Link to="/terms" className="hover:text-orange-400 transition" onClick={() => setMenuOpen(false)}>Term & Conditions</Link>
      <Link to="/404" className="hover:text-orange-400 transition" onClick={() => setMenuOpen(false)}>404 Page</Link>

      <Link
  to="/contact"
  onClick={() => setMenuOpen(false)}
  className="mt-6 w-full relative inline-flex justify-center items-center gap-2 px-6 py-3 text-base font-medium text-white bg-[#0E0E10] border border-white/10 rounded-xl transition overflow-hidden animate-border-glow"
>
  <span className="absolute inset-0 z-0 rounded-xl bg-[radial-gradient(circle_at_top_left,_rgba(255,115,51,0.1)_0%,_transparent_100%)] pointer-events-none" />
  <span className="relative z-10 flex items-center gap-2">
    Let’s Talk
    <ArrowUpRight size={18} />
  </span>
</Link>

    </div>
  </div>
)}


      {/* Main Navbar */}
      <nav
        className={clsx(
          "fixed top-4 w-full z-50 flex justify-center transition-all duration-300",
          isScrolled ? "bg-black backdrop-blur-xl shadow-md" : "bg-transparent"
        )}
      >
        <div className="w-full max-w-5xl px-6 pt-3">
          <div className="flex items-center justify-between bg-[#0A0A0A]/70 backdrop-blur-lg text-white rounded-full px-6 py-3 border border-[#2a2a2a] shadow-lg">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 font-medium font-hero text-[#E87811] text-lg"
            >
              <span className="text-orange-300 pl-3">Automatix</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 font-medium text-lg text-white/70">
              <a href="#whyus" className="hover:text-white transition">Why Us</a>
              <a href="#mission" className="hover:text-white transition">Mission</a>
              <a href="#works" className="hover:text-white transition">Works</a>
              <a href="#services" className="hover:text-white transition">Services</a>

              {/* Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="hover:text-white transition">Pages ▾</button>
                {isDropdownVisible && (
                  <div className="absolute left-0 mt-2 flex flex-col bg-black text-white border border-[#2a2a2a] shadow-lg rounded-md z-50 min-w-[220px]">
                    <Link to="/contact" className="px-4 py-2 text-white/70 hover:text-white">Contact</Link>
                    <Link to="/terms" className="px-4 py-2 text-white/70 hover:text-white">Term & Conditions</Link>
                    <Link to="/404" className="px-4 py-2 text-white/70 hover:text-white">404</Link>
                  </div>
                )}
              </div>
            </div>

     <Link to="/contact" className="hidden md:block relative group">
  <span className="relative inline-flex items-center gap-2 px-6 py-2 rounded-md text-lg font-medium text-white bg-[#0E0E10] border border-white/10 transition-all overflow-hidden z-10">
    <span className="absolute inset-0 z-0 rounded-full bg-[radial-gradient(circle_at_top_left,_rgba(255,115,51,0.2)_0%,_transparent_100%)]" />
    <span className="absolute inset-0 border border-orange-400 transition-all z-0" />
    <span className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-[#111] opacity-90 z-0" />
    <span className="relative z-10 flex items-center gap-2 pr-5">
      Let’s Talk
      <ArrowUpRight className="transition-transform duration-300 group-hover:-rotate-45" size={16} />
    </span>
  </span>
  <span className="absolute inset-0 rounded-full pointer-events-none animate-border-glow border border-orange-500/20" />
</Link>



            {/* Mobile Menu Icon */}
            <div className="md:hidden z-50 relative">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <X size={28} color="white" className="transition-transform duration-300" />
                ) : (
                  <Menu size={28} color="white" className="transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
