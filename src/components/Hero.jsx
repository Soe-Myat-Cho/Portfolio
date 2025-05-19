import React, { useRef } from "react";

import Type from "./Type";
import profile from "../assets/images/profile.jpg";
import { keyframes } from "@emotion/react";
import { FaGraduationCap } from "react-icons/fa";

const socialMediaLinks = [
  "https://github.com/Soe-Myat-Cho",
  "https://www.linkedin.com/in/soe-myat-cho-8b8635352/",
  "https://web.facebook.com/soe.m.ic",
];

const Hero = () => {
  const contactRef = useRef(null);

  const social_media = ["logo-github", "logo-linkedin", "logo-facebook"];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={profile}
          alt="profile"
          className="md:w-2/4 h-auto object-cover img"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <span className=" font-semibold md:text-4xl text-xl">
            Transform your ideas{" "}
            <span className="text-cyan-600">into reality</span>
          </span>
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white ">
            <span className=" font-regular text-cyan-600">with </span>
            <span className="font-semibold">Soe Myat Cho</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-300">
            <Type />
          </h4>
          <p className="md:text-left text-justify max-w-lg text-md mt-4 text-gray-300 leading-6">
            Specialized in building full-stack applications using React, Vue,
            Next.js, Node.js, Express.js, Laravel API Development, MySQL,
            Appwrite and MongoDB.
          </p>
          {/* <button className="relative overflow-hidden mt-8 group text-white font-semibold text-lg px-6 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg">
            <a href="#projects" className="relative z-10">
              See My Work
            </a>
            <span className="absolute left-[-100%] top-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
          </button> */}
          <button className="relative overflow-hidden mt-8 group text-white font-semibold text-lg px-6 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg flex items-center gap-2">
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

          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon, index) => (
              <a
                key={icon}
                href={socialMediaLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div ref={contactRef}></div>
    </section>
  );
};

export default Hero;
