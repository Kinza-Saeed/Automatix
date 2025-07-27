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
      ease: "easeOut",
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
    <section className="w-full bg-black text-white py-16 px-4 sm:px-6 md:px-16 lg:px-24" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
      {/* Section Header */}
      <motion.div
        className="text-center max-w-4xl mx-auto mb-14 sm:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
        custom={0}
      >
        <div
          id="whyus"
          className="inline-block px-4 py-1 mb-4 sm:mb-5 rounded-full bg-white/10 text-xs sm:text-sm font-medium tracking-wide text-white"
        >
          Why Us
        </div>

        <h2 className="text-3xl sm:text-5xl font-satoshi font-medium text-white mb-5 leading-snug sm:leading-tight">
          Experience the Benefits <br className="hidden sm:block" />
          of Our Expertise
        </h2>

        <p className="text-base sm:text-xl font-manrope text-white/60 max-w-2xl mx-auto">
          That drives impactful gain powerful results
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-14 sm:mb-20">
        {cards.map(({ title, desc, img }, index) => (
          <motion.div
            key={index}
            className="relative bg-[#161618] border border-white/10 px-6 py-10 sm:px-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center overflow-hidden hover:-translate-y-1 hover:scale-[1.015]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            custom={index + 1}
          >
            {/* Icon */}
            <img
              src={img}
              alt={title}
              className="w-full max-w-[250px] h-auto object-contain mb-6 animate-fade-in"
            />

            <h3 className="text-xl sm:text-2xl font-satoshi font-medium text-white mb-4">
              {title}
            </h3>
            <p className="text-base sm:text-lg text-white/70 font-manrope leading-relaxed">
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
          className="inline-flex items-center gap-2 text-white text-sm sm:text-lg font-semibold px-6 py-3 rounded-xl border border-orange-400 bg-gradient-to-br from-orange-400 to-orange-600 hover:scale-105 transition-transform duration-300"
        >
          See Pricing
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 stroke-white"
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
