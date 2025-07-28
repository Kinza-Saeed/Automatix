import { ArrowUpRight } from "lucide-react";

export default function BottomSection() {
  return (
    <section
      className="relative w-full bg-black text-white py-20 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1200"
    >
    

      {/* Rounded Container */}
      <div className="relative z-10 max-w-6xl mx-auto bg-black rounded-3xl border border-gray-800 px-6 sm:px-10 py-14 sm:py-16 shadow-xl">
         {/* Dotted Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(#e87811_1px,transparent_1px)] [background-size:10px_10px] opacity-20" />
      </div>
        {/* Logo */}
        <div className="mb-8 flex justify-center text-orange-300 text-lg font-medium font-hero tracking-wide">
          Automatix
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-center font-medium font-hero mb-4">
          Let’s Turn Your <br /> Dream Into Reality
        </h2>

        {/* Paragraph */}
        <p className="text-base sm:text-lg text-gray-400 text-center mb-6 leading-relaxed max-w-md sm:max-w-xl mx-auto pt-3">
          We bring your vision to life with creativity{" "}
          <br className="hidden sm:block" />
          and precision. Let’s make it happen.
        </p>

        {/* Book a Call Button */}
        <div className="mb-6 text-center">
          <button className="inline-flex items-center gap-2 bg-black text-orange-400  px-6 py-3 rounded-full font-medium text-lg transition duration-300">
            Book a Call
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        {/* Separator */}
        <div className="w-20 h-px bg-gray-800 mx-auto mb-10" />

        {/* Nav Links */}
<div className="grid grid-cols-3 gap-4 md:flex md:justify-center md:gap-6 text-lg text-gray-400 font-medium mb-10 text-center">
  <a href="#whyus" className="col-span-1 hover:text-white transition">
    Why Us
  </a>
  <a href="#mission" className="col-span-1 hover:text-white transition">
    Mission
  </a>
  <a href="#works" className="col-span-1 hover:text-white transition">
    Works
  </a>
  <div className="col-span-3 grid grid-cols-2 gap-4">
    <a href="#services" className="hover:text-white transition">
      Services
    </a>
    <a href="/contact" className="hover:text-white transition">
      Contact
    </a>
  </div>
</div>



        {/* Footer */}
        <p className="text-lg sm:text-lg font-hero text-center text-gray-400">
          © Automatix. All rights reserved.
        </p>
      </div>
    </section>
  );
}
