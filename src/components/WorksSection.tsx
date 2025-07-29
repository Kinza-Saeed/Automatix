import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const workItems = [
  {
    title: "Grapho AI",
    description:
      "That's Why We Leverage AI to Create Impactful, Lasting Experiences that Engage, and Transform Every Interaction.",
    shortText: "47% increase in new customers",
    image: "/work1.jpeg",
  },
  {
    title: "VectraOps",
    description:
      "That's Why We Leverage AI to Create Impactful, Lasting Experiences that Engage, and Transform Every Interaction.",
    shortText: "34% increase in online sales",
    image: "/work2.jpeg",
  },
  {
    title: "Signum",
    description:
      "That's Why We Leverage AI to Create Impactful, Lasting Experiences that Engage, and Transform Every Interaction.",
    shortText: "47% increase in new customers",
    image: "/work3.jpeg",
  },
];

const stats = [
  { label: "Active Users", value: "150k+" },
  { label: "Rating", value: "4.9/5" },
  { label: "Positive Reviews", value: "99k+" },
  { label: "Users Satisfied", value: "85k+" },
];

export default function WorksSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedItem, setExpandedItem] = useState<number>(0);

  const toggleExpand = (index: number) => {
    setActiveIndex(index);
    setExpandedItem(expandedItem === index ? -1 : index);
  };

  return (
    <section
      className="bg-black text-white py-20 px-4 sm:px-6 md:px-16 lg:px-32"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1200"
    >
      {/* Down Arrow */}
      <div className="flex justify-center pb-12">
        <FaArrowDown className="text-6xl sm:text-7xl text-orange-500 font-medium animate-bounce" />
      </div>

      {/* Heading */}
      <div className="text-center mb-16" id="works">
        <div className="inline-block px-4 py-1 mb-5 rounded-full bg-white/10 text-sm font-medium tracking-wide">
          Work That Makes Us Proud
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl font-medium leading-tight font-hero text-white pb-5"
        >
          Recent Works, Notable Impact
        </motion.h2>
      </div>

      {/* Work Display */}
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-12 items-start">
        {/* Right - Image (on top for mobile) */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2" data-aos="fade-up" data-aos-delay="200">
          <motion.img
            key={activeIndex}
            src={workItems[activeIndex].image}
            alt={workItems[activeIndex].title}
            className="w-full rounded-xl shadow-lg object-cover"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Left - Dropdown Text Options */}
        <div className="flex-1 order-2 lg:order-1 space-y-8">
          {workItems.map((item, index) => (
            <div
              key={index}
              className={clsx(
                "border-l-4 pl-6 transition-all duration-300",
                activeIndex === index
                  ? "border-orange-500"
                  : "border-transparent"
              )}
            >
              {/* Clickable Header with Short Text */}
              <div
                onClick={() => toggleExpand(index)}
                className="cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-hero font-medium text-white group-hover:text-orange-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <AnimatePresence>
                        {expandedItem !== index && (
                          <motion.p
                            initial={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ 
                              duration: 0.4, 
                              ease: [0.4, 0.0, 0.2, 1]
                            }}
                            className="text-sm sm:text-base text-gray-400 leading-relaxed ml-4 flex-shrink-0"
                          >
                            {item.shortText}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedItem === index ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="text-orange-500 text-xl sm:text-2xl ml-4"
                  >
                    
                  </motion.div>
                </div>
              </div>

              {/* Dropdown Content */}
              <AnimatePresence>
                {expandedItem === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -5 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -5 }}
                    transition={{ 
                      duration: 0.6, 
                      ease: [0.4, 0.0, 0.2, 1],
                      opacity: { duration: 0.4 },
                      height: { duration: 0.6 }
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-400 pt-2 pb-4">
                      {item.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Separator Line */}
              <div className="w-full h-px bg-gray-800 mx-auto mt-6" />
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center mt-16 border-y border-gray-700 py-10">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={clsx(
              "w-1/2 md:w-1/4 text-center px-4 py-4",
              i !== stats.length - 1 && "border-r border-gray-700"
            )}
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-white">
              {stat.value}
            </div>
            <div className="text-base sm:text-lg mt-2 text-white font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
