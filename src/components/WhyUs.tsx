import { motion } from "framer-motion";
import InnovationIcon from "/card1.jpeg";
import ExperienceIcon from "/card2.jpeg";
import PartnershipIcon from "/card3.jpeg";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut" as const,
    },
  }),
};

export default function WhyUs() {
  const cards = [
    {
      title: "Innovative Approach",
      desc: "Look for works that reflect a unique character and differentiate in a crowded marketplace.",
      img: InnovationIcon,
    },
    {
      title: "Seamless Experience",
      desc: "A seamless user experience across all devices, ensuring every interaction connects with the user.",
      img: ExperienceIcon,
    },
    {
      title: "Ongoing Partnership",
      desc: "Find a new partner easily, not just providers, who offer ongoing support even after the project ends.",
      img: PartnershipIcon,
    },
  ];

  return (
   <section
  id="whyus"
  className="
    w-full 
    bg-black 
    text-white 
    pt-8          // ✅ reduced top padding on mobile
    sm:pt-12      // ✅ slightly more padding on tablet
    md:pt-16      // ✅ more padding on desktop
    pb-8 
    sm:pb-12 
    md:pb-20 
    px-4 
    sm:px-6 
    md:px-12 
    lg:px-24
  "
  style={{
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    overflow: "visible",
    scrollMarginTop: "40px",
  }}
  data-aos="fade-up"
  data-aos-delay="200"
  data-aos-duration="1200"
>

      {/* Section Header */}
      <motion.div
        className="text-center max-w-4xl mx-auto mb-6 sm:mb-12 md:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
        custom={0}
      >
        <div className="inline-block px-3 py-1 mb-3 sm:mb-4 md:mb-5 rounded-full bg-white/10 text-xs sm:text-sm font-medium tracking-wide text-white">
          Why Us
        </div>

        <h2 className="text-xl sm:text-3xl md:text-5xl font-satoshi font-medium text-white mb-3 sm:mb-4 leading-tight" data-aos="fade-up" data-aos-delay="200">
          Experience the Benefits <br />
          of Our Expertise
        </h2>

        <p className="text-sm sm:text-lg md:text-xl font-manrope text-white/60 max-w-2xl mx-auto px-2" data-aos="fade-up" data-aos-delay="200">
          That drives impactful gain powerful results
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-10 mb-8 sm:mb-14 md:mb-20 w-full max-w-6xl" data-aos=" zoom-in" data-aos-delay="200">
        {cards.map(({ title, desc, img }, index) => (
          <motion.div
            key={index}
            className="bg-[#161618] border border-white/10 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:scale-[1.02]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            custom={index + 1}
          >
            <img
              src={img}
              alt={title}
              className="w-full max-w-[300px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] h-auto object-contain mb-4 sm:mb-5 rounded-2xl sm:rounded-xl md:rounded-2xl shadow-md"
            />
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-satoshi font-medium text-white mb-2 sm:mb-3 text-center w-full">
              {title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/70 font-manrope leading-relaxed line-clamp-3 sm:line-clamp-3 md:line-clamp-none text-center px-2 sm:px-0 w-full">
              {desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
        custom={4}
      >
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 text-white text-sm sm:text-base md:text-lg font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl border border-orange-400 bg-gradient-to-br from-orange-400 to-orange-600 hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="200"
        >
          See Pricing
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 stroke-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <line x1="7" y1="7" x2="17" y2="17" />
            <polyline points="17 7 17 17 7 17" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
