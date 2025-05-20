import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const marqueeTexts = [
  [
    "Full-Stack Developer",
    "Creative Thinker",
    "Team Player",
    "React & Vue Enthusiast",
    "Backend with Laravel & Node",
    "Database Expert",
  ],
  [
    "Problem Solver",
    "Lifelong Learner",
    "Responsive Design Expert",
    "Next.js",
    "RESTful API Development",
    "Clean Code Advocate",
  ],
  [
    "Tailwind CSS Wizard",
    "JavaScript Lover",

    "Version Control with Git",
    "UX First Approach",
    "Fast Learner ",
  ],
];

const TextMarqueeRows = () => {
  return (
    <section className="py-12 text-white">
      <div className="absolute left-4/5 w-[300px] h-[300px] bg-blue-900 blur-3xl opacity-20 rounded-full z-0"></div>
      <h2 className="text-center text-4xl font-bold mb-10">
        What I <span className="text-cyan-500">Bring</span>
      </h2>
      <div className="absolute bottom-0 left-4/5 w-[400px] h-[400px] bg-blue-900 blur-3xl opacity-20 rounded-full z-0"></div>
      {marqueeTexts.map((row, i) => (
        <Marquee
          key={i}
          direction={i % 2 === 0 ? "left" : "right"} // alternate direction
          pauseOnHover
          speed={40}
          gradient={false}
          className="py-2"
        >
          {row.map((text, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mx-8 text-6xl  font-extrabold outlined-text outlined-text-hover cursor-default leading-relaxed"
            >
              {text}
            </motion.span>
          ))}
        </Marquee>
      ))}
    </section>
  );
};

export default TextMarqueeRows;
