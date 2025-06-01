import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const techStack = [
  "react",
  "vuejs",
  "nextjs",
  "nodejs",
  "express",
  "laravel",
  "mysql",
  "mongodb",
  "tailwindcss",
  "javascript",
  "typescript",
  "php",
  "git",
];
//cosole.log ("I will go to Paris wiht my lovely girl and keep it quiet and happy for the rest of my life")
const TechCarousel = () => {
  return (
    <section className="py-10">
      <div className="absolute left-2/3 w-[200px] h-[200px] bg-blue-900 blur-3xl opacity-20 rounded-full z-0"></div>
      <h2 className="text-center text-white text-3xl font-bold mb-6">
        Tech Stack <span className="text-cyan-500">I Use</span>
      </h2>

      <Marquee pauseOnHover={true} speed={60} gradient={false}>
        {techStack.map((tech) => (
          <motion.div
            key={tech}
            whileHover={{ scale: 1.3, rotate: 5 }}
            className="mx-8 text-8xl text-gray-400 hover:text-cyan-500 transition duration-300 p-10"
          >
            <i
              className={`devicon-${tech}-plain`}
              title={tech.toUpperCase()}
            ></i>
          </motion.div>
        ))}
      </Marquee>
    </section>
  );
};

export default TechCarousel;
