import { motion } from "framer-motion";
import team1 from "/team1.jpeg";
import team2 from "/team2.jpeg";
import team3 from "/team3.jpeg";
import team4 from "/team4.jpeg";

const teamMembers = [
  {
    name: "Alif Kepanjen",
    position: "CEO",
    image: team1,
  },
  {
    name: "Jennifer Sukun",
    position: "Business Development",
    image: team2,
  },
  {
    name: "David Pakis",
    position: "Tech Officer",
    image: team3,
  },
  {
    name: "Radu Klojen",
    position: "Infrastructure",
    image: team4,
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function TeamSection() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-10 lg:px-20" data-aos="fade-up" data-aos-delay="200">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 mb-5 rounded-full bg-white/10 text-sm shadow-white font-medium tracking-wide text-white">
          Our Creative Minds
        </span>
        <h2 className="text-6xl text-white font-hero font-medium" data-aos="fade-up" data-aos-delay="200"> 
          The People Behind the Magic
        </h2>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-[#0E0E10] rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-4"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[22rem] object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-center">{member.name}</h3>
            <p className="text-sm text-center text-gray-500">
              {member.position}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
