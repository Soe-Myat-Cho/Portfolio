import React, { useRef } from "react";
import Type from "./Type";
import profile from "../assets/images/profile.jpg";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const socialMediaLinks = [
  "https://www.linkedin.com/in/soe-myat-cho-8b8635352/",
  "https://github.com/Soe-Myat-Cho",
  "https://web.facebook.com/soe.m.ic",
];

const socialMediaIcons = ["logo-linkedin", "logo-github", "logo-facebook"];

const Hero = () => {
  const contactRef = useRef(null);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-y-10 gap-x-0 px-5 md:px-20 py-16"
    >
      {/* Left Side (Image) */}
      <motion.div
        className="flex-1 flex items-center justify-center w-full"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={profile}
          alt="profile"
          className="md:w-3/5 md:mr-15 w-2/3 mt-5 h-auto object-cover img"
        />
      </motion.div>

      {/* Right Side (Text Content) */}
      <motion.div
        className="flex-1 w-full"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
      >
        <div className="text-center md:text-left">
          <span className="block font-semibold text-[clamp(1.25rem,4vw,2rem)]">
            Transform your ideas{" "}
            <span className="text-cyan-600">into reality</span>
          </span>
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold text-white mt-2 leading-tight">
            <span className="font-light text-cyan-600">with </span>
            Soe Myat Cho
          </h1>
          <h4 className="text-[clamp(1.125rem,3vw,1.75rem)] font-bold text-gray-300 mt-4">
            <Type />
          </h4>
          <p className="text-gray-300 mt-4 leading-6 max-w-xl mx-auto md:mx-0 text-[clamp(0.9rem,2.5vw,1rem)]">
            Specialized in building full-stack applications using React, Vue,
            Next.js, Node.js, Express.js, Laravel API Development, MySQL,
            Appwrite and MongoDB.
          </p>

          {/* University Button */}
          <button className="relative overflow-hidden mt-8 group text-white font-semibold text-lg px-6 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 mx-auto md:mx-0">
            <FaGraduationCap className="relative z-10 text-xl" />
            <a
              href="https://www.gre.ac.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10"
            >
              University of Greenwich
            </a>
            <span className="absolute left-[-100%] top-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
          </button>

          {/* Social Icons */}
          <div className="mt-8 text-3xl flex justify-center md:justify-start gap-6">
            {socialMediaIcons.map((icon, index) => (
              <a
                key={icon}
                href={socialMediaLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white transition-colors duration-300"
              >
                <ion-icon name={icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <div ref={contactRef}></div>
    </section>
  );
};

export default Hero;
