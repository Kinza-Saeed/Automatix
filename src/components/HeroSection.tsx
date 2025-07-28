import { useEffect } from "react";
import { withHover } from "../utils/withEffects";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const EnhancedSection = motion.section;

const logos = [
  "https://framerusercontent.com/images/gtA2k0HxvLgyb2ShavqPh2ut8M.svg",
  "https://framerusercontent.com/images/v8pRoXjGv8Kuqg4GJYQjdWqJD0.svg",
  "https://framerusercontent.com/images/z6DLxkMPmuYBeO3zshpNfjAxLg8.svg",
  "https://framerusercontent.com/images/tnjkbQJwRbdGkxEcDO0Jqu1aTZM.svg",
  "https://framerusercontent.com/images/497xK9DhewPLaDj5d8bkw0cAg.svg",
];

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const AnimatedButton = withHover(motion.button);

  return (
    <>
    <EnhancedSection
  className="relative z-10 w-full max-w-7xl mx-auto 
    px-4 pt-32 pb-8 
    sm:pt-40 sm:pb-16 
    md:pt-44 md:pb-20 
    lg:pt-52 lg:pb-16"
>

      
{/* Dotted Background - Only for Hero */}
<div className="absolute inset-0 z-0 pointer-events-none">
  <div
    className="
      pt-36                  // mobile top padding (below navbar)
      sm:pt-48               // more top space for tablets
      lg:pt-56               // even more top padding on desktop
      h-[480px]
      sm:h-[560px]
      lg:h-[680px]           // taller dotted background for large screens
      w-full
      bg-[radial-gradient(#e87811_1px,transparent_1px)]
      [background-size:10px_10px]
      opacity-25
      transition-all
      duration-300
    "
  />
</div>

 {/* Hero Content */}
        <div
          className="relative z-10 text-center max-w-2xl sm:max-w-4xl w-full mx-auto flex flex-col items-center justify-center"
          data-aos="fade-up"
        >
          {/* Availability Badge */}
          <div
            className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-[#181818] border border-[#212121] text-xs sm:text-sm text-[#AFAFAF] shadow-md"
            data-aos="zoom-in"
          >
            <div className="relative flex items-center justify-center w-4 h-4 mr-2">
              <div className="absolute w-4 h-4 bg-green-500 rounded-full animate-ping opacity-30" />
              <div className="relative w-2 h-2 bg-green-500 rounded-full" />
            </div>
            Available now, only 3 spots left
          </div>

          {/* Heading */}
          <h1
  className="text-[2rem] xs:text-[2.3rem] sm:text-5xl md:text-6xl lg:text-9xl xl:text-7xl 
    font-medium leading-tight font-satoshi 
    space-y-3 
    mt-2 sm:mt-4 md:mt-6"
  data-aos="fade-up"
  data-aos-delay="200"
>
  <span className="text-[#E87811] block pt-2 sm:pt-4">Automation Agency</span>
  <span className="text-white block mt-6 sm:mt-4">Beyond <span className="text-white">✦</span> Limits.</span>
  <span className="text-[#E87811] block mt-6 sm:mt-4">Amplified With AI.</span>
</h1>


         <p
  className="text-sm xs:text-base sm:text-lg text-[#AFAFAF] mt-6 font-manrope px-2 sm:px-6 md:px-12 text-center"
  data-aos="fade-up"
  data-aos-delay="400"
>
  Design services at your fingertips <br className="sm:hidden" />
  Pause or cancel anytime.
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <line x1="7" y1="7" x2="17" y2="17" />
                <polyline points="17 7 17 17 7 17" />
              </svg>
            </a>
          </AnimatedButton>
        </div>
      </EnhancedSection>

  {/* Trusted By Section OUTSIDE Dotted Background */}
      <div className="relative z-20 w-full bg-black/5 pt-10 pb-6 sm:py-16">
        <div className="font-inter text-[12px] leading-normal tracking-normal max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-gray-400 mb-6 sm:mb-8">
            Our services are featured on
          </p>
          <div className="relative w-full overflow-hidden">
            <div
              className="mx-auto w-full max-w-full sm:max-w-4xl overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              }}
            >
              <div className="flex items-center animate-scroll-x gap-8 sm:gap-12">
                {[...logos, ...logos].map((logo, idx) => (
                  <img
                    key={idx}
                    src={logo}
                    alt={`Logo ${idx + 1}`}
                    className="h-8 sm:h-10 w-auto object-contain grayscale opacity-80 hover:opacity-100 transition"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
