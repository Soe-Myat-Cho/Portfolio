import React, { useRef } from "react";

import Type from "./Type";
import profile from "../assets/images/profile.jpg";
import { keyframes } from "@emotion/react";

const Hero = () => {
  const contactRef = useRef(null);

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
            and Next.js, Node.js, Laravel API development, MySQL, and MongoDB.
          </p>
          <button className="btn-primary mt-8">
            <a href="#projects">See My Work</a>
          </button>
        </div>
      </div>
      <div ref={contactRef}></div>
    </section>
  );
};

export default Hero;
