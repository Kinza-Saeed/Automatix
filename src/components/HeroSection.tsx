import { useEffect } from "react";
import { withHover } from "../utils/withEffects";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const EnhancedSection = motion.section;

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const AnimatedButton = withHover(motion.button);

  return (
    <EnhancedSection
      className="relative overflow-hidden bg-black min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-32 pb-20 lg:pt-60"
      data-aos-delay="200"
      data-aos-duration="1200"
    >
      {/* Dotted Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(#e87811_1px,transparent_1px)] [background-size:15px_15px] opacity-30" />
      </div>

      {/* Spacer for top navbar */}
      <div className="relative z-0" />

      {/* Hero Content */}
      <div
        className="relative z-10 text-center max-w-2xl sm:max-w-4xl w-full mx-auto flex flex-col items-center justify-center"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1200"
      >
        {/* Availability Badge */}
        <div
          className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-[#181818] border border-[#212121] text-xs sm:text-sm text-[#AFAFAF] shadow-md"
          data-aos="zoom-in"
        >
          <div className="relative flex items-center justify-center w-4 h-4 mr-2">
            <div className="absolute w-4 h-4 bg-green-500 rounded-full animate-ping opacity-30"></div>
            <div className="relative w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          Available now, only 3 spots left
        </div>

        {/* Heading */}
        <h1
          className="text-[2rem] xs:text-[2.3rem] sm:text-5xl md:text-6xl lg:text-8xl xl:text-7xl font-bold leading-tight font-satoshi space-y-3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="text-[#E87811] block pt-2 sm:pt-4">Automation Agency</span>
          <span className="text-white block mt-2 pt-2">Beyond <span className="text-white">✦</span> Limits.</span>
          <span className="text-[#E87811] block mt-2 pt-2">Amplified With AI.</span>
        </h1>

        {/* Subtext */}
        <p
          className="text-sm xs:text-base sm:text-lg text-[#AFAFAF] mt-6 font-manrope px-2 sm:px-6 md:px-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Design services at your fingertips. Pause or cancel anytime.
        </p>

        {/* CTA Button */}
        <AnimatedButton>
          <a
            href="#whyus"
            className="inline-flex text-sm xs:text-base sm:text-lg items-center justify-center px-5 sm:px-6 py-3 mt-8 bg-gradient-to-b from-[#212121] to-[#050505] border border-[#212121] rounded-lg text-[#DEDEDE] transition hover:scale-105 shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <line x1="7" y1="7" x2="17" y2="17" />
              <polyline points="17 7 17 17 7 17" />
            </svg>
          </a>
        </AnimatedButton>
      </div>
    </EnhancedSection>
  );
}
