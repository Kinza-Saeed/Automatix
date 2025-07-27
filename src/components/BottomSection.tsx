import { ArrowUpRight } from "lucide-react";

export default function BottomSection() {
  return (
    <section
      className="relative w-full bg-black text-white py-16 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1200"
    >
      {/* Dotted Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(#e87811_1px,transparent_1px)] [background-size:15px_15px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-screen-lg mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center text-orange-500 text-lg">
          Automatix
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-center font-medium font-hero mb-4">
          Let’s Turn Your <br /> Dream Into Reality
        </h2>

        {/* Paragraph */}
        <p className="text-base sm:text-lg text-gray-400 text-center mb-6 leading-relaxed max-w-md sm:max-w-xl mx-auto pt-3">
          We bring your vision to life with creativity <br className="hidden sm:block" /> and precision. Let’s make it happen.
        </p>

        {/* Book a Call Button */}
        <div className="mb-6 text-center">
          <button className="inline-flex items-center gap-2 bg-black-500 text-orange-400 px-6 py-3 rounded-full font-medium text-base transition">
            Book a Call
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        {/* Separator */}
        <div className="w-20 h-px bg-gray-800 mx-auto mb-10" />

{/* Nav Links */}
<div className="flex flex-wrap md:flex-nowrap justify-center gap-4 md:gap-6 text-lg md:text-lg text-gray-400 font-medium mb-10">
  <a href="#whyus" className="w-1/3 md:w-auto text-center hover:text-white transition">Why Us</a>
  <a href="#mission" className="w-1/3 md:w-auto text-center hover:text-white transition">Mission</a>
  <a href="#works" className="w-1/3 md:w-auto text-center hover:text-white transition">Works</a>
  <a href="#services" className="w-1/2 md:w-auto text-center hover:text-white transition">Services</a>
  <a href="/contact" className="w-1/2 md:w-auto text-center hover:text-white transition">Contact</a>
</div>



        {/* Footer */}
        <p className="text-lg font-hero text-center text-gray-400">Copyright Automatix. All right reserved.</p>
      </div>
    </section>
  );
}
