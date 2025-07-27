import {
  Brain,
  Cloud,
  Server,
  BarChart3,
  ShieldCheck,
  Clock3,
  Radar,
  DatabaseZap,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const miniServices = [
  { title: "AI-Driven Solutions", icon: <Brain size={22} /> },
  { title: "Serverless Computing", icon: <Server size={22} /> },
  { title: "Cloud Integration", icon: <Cloud size={22} /> },
  { title: "Data Insight", icon: <DatabaseZap size={22} /> },
  { title: "Analytics", icon: <BarChart3 size={22} /> },
  { title: "API Security", icon: <ShieldCheck size={22} /> },
  { title: "Real-Time", icon: <Clock3 size={22} /> },
  { title: "Ad Targeting", icon: <Radar size={22} /> },
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const ServicesSection = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="w-full py-20 bg-black text-white px-4 sm:px-6 md:px-16 relative overflow-hidden"
      id="services"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1200"
    >
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <span className="inline-block px-4 py-1 mb-5 rounded-full bg-white/10 text-sm font-medium tracking-wide">
          Our Services
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl mt-4 font-hero font-medium">
          Expertise That Drives Quality
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-hero pt-5">
          With deep expertise, we deliver quality solutions that drive <br className="hidden sm:block" />
          success and exceed industry standards consistently.
        </p>
      </motion.div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5 scale-110 z-0 pointer-events-none">
        <img
          src="https://framerusercontent.com/images/EaQHg2lXGfJYdlkVzsdOTUA4AIk.png"
          alt="grid background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-16 relative z-10">
        {[1, 2, 3].map((_, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1A1A1A] p-6 sm:p-8 rounded-3xl shadow-xl transition-all duration-300 group flex flex-col items-center justify-between text-center h-[480px] sm:h-[500px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            custom={idx + 1}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4 pt-5">
              {idx === 0 ? "Plan & Organize" : idx === 1 ? "Custom Projects" : "Smart Automation"}
            </h3>
            <motion.img
              alt="service"
              src={`/service${idx + 1}.jpeg`}
              className="rounded-xl mb-5 w-full h-44 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <p className="text-gray-300 text-lg sm:text-lg pb-5">
              {idx === 0 && "We enhance efficiency by integrating apps and reducing downtime."}
              {idx === 1 && "We created a versatile chatbot that understands diverse questions."}
              {idx === 2 && "We analyze operations and suggest AI solutions to boost efficiency."}
            </p>
          </motion.div>
        ))}
      </div>

    {/* Mini Service Cards */}
<motion.div
  className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 relative z-10"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={textVariants}
  custom={4}
>
  {miniServices.map((service, idx) => (
    <motion.div
      key={idx}
      className="bg-[#1A1A1A] hover:bg-[#2a2a2a] transition rounded-xl px-4 py-4 sm:px-5 flex items-center gap-4 shadow-md"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="w-11 h-11 min-w-[44px] sm:w-12 sm:h-12 rounded-full bg-black text-orange-500 border border-black flex items-center justify-center">
        {service.icon}
      </div>
      <p className="text-base sm:text-lg text-white font-hero">{service.title}</p>
    </motion.div>
  ))}
</motion.div>

    </section>
  );
};

export default ServicesSection;
