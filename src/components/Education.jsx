import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { div, img } from "framer-motion/client";

import lv4 from "../assets/images/lv4.jpg";
import lv5 from "../assets/images/lv5.png";
import jlpt from "../assets/images/jlpt.jpg";

const Education = () => {
  const educationDetails = [
    {
      level: "NCC Level 5 Diploma in Computing",
      year: "2024 - 2025",
      score: " Achieved Five Distinctions in Six Modules",
      desc: "I recently completed the NCC Level 5 Diploma in Computing with five distinctions out of six modules. This diploma is equivalent to the second year of a UK honours degree in computing. It deepened my knowledge in software engineering, systems analysis, network security, and web technologies. The program also developed my research and critical thinking skills, preparing me for more advanced computing roles and higher education.",
      img: lv5,
    },
    {
      level: " NCC Level 4 Diploma in Computing",
      year: "2023 - 2024",
      score: "Achieved Distinctions in every Module",
      desc: "I completed the NCC Level 4 Diploma in Computing with distinction in every module. This diploma is equivalent to the first year of a UK university degree in computing and covered essential areas such as computer systems, software development, database design, networks, and web development. It provided a strong foundation in both theoretical and practical aspects of computing, helping me build solid problem-solving and programming skills.",
      img: lv4,
    },
  ];
  const [selectedImg, setSelectedImg] = React.useState(null);
  return (
    <div id="education" className="container mx-auto px-4 py-12 ">
      <h3 className="text-4xl text-center font-semibold mb-1">
        My <span className="text-cyan-600">Education</span>
      </h3>
      <p className="text-lg text-center font-normal mb-8">
        My educational details are as follows.
      </p>
      {/* <hr className="border-gray-300 w-full mb-8" /> */}

      <div className="relative border-l-2 border-white ml-40 mt-10">
        <div className="mb-5 ml-14">
          <h4 className="text-3xl font-semibold ">
            BSc (Hons) Computing (Information Systems and Network Systems)
          </h4>
          <h5 className="text-xl mt-2 text-gray-300">KMD College, Yangon</h5>
        </div>
        {educationDetails.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-10 ml-14 relative "
          >
            {/* Dot on the vertical line */}
            <div className="absolute w-6 h-6 bg-white rounded-full -left-17 top-2"></div>

            {/* Year on the left side of the line */}
            <div className="absolute -left-50 top-1 text-lg text-gray-200 font-semibold text-right">
              {edu.year}
              {/* <div>hi</div> */}
            </div>

            {/* Education Info */}
            <div className="flex flex-col md:flex-row items-start gap-16">
              <div className="w-full md:w-3/4">
                <h5 className="text-2xl text-gray-300">{edu.level}</h5>
                <p className="text-lg text-gray-300 mt-2">{edu.score}</p>
                <p className="text-gray-300 mt-2">{edu.desc}</p>
              </div>
              <div className="w-full md:w-1/6 flex items-center justify-center">
                <img
                  className="w-3/4 h-auto object-cover rounded-md cursor-pointer"
                  src={edu.img}
                  alt=""
                  onClick={() => setSelectedImg(edu.img)}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="relative border-l-2 border-white ml-40 mt-20">
        <div className="mb-5 ml-14">
          <h4 className="text-3xl font-semibold ">
            University of Foreign Language (UFL)
          </h4>
          <h5 className="text-xl mt-2 text-gray-300">Mandalay</h5>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 ml-14 relative"
        >
          {/* Dot on the vertical line */}
          <div className="absolute w-6 h-6 bg-white rounded-full -left-17 top-2"></div>

          {/* Year on the left side of the line */}
          <div className="absolute -left-35 top-1 text-lg text-gray-200 font-semibold text-right">
            2022
          </div>

          {/* Education Info */}
          <div className="flex flex-col md:flex-row items-start gap-14">
            <div className="w-full md:w-3/4">
              <h5 className="text-2xl text-gray-300">
                Japanese-Language Proficiency Test - N4 Level
              </h5>
              <p className="text-lg text-gray-300 mt-2">
                Grade A in all sections - Reading, Writing, Listening
              </p>
              <p className="text-gray-300 mt-2">
                I passed the JLPT N4 exam with Grade A in all sections—grammar,
                vocabulary, reading, and listening—demonstrating strong
                foundational proficiency in the Japanese language. This level
                certifies that I can understand basic Japanese used in everyday
                conversations and written texts, including commonly used
                expressions and sentence structures. My achievement reflects
                dedication to consistent language practice and a strong
                understanding of both spoken and written Japanese.
              </p>
            </div>
            <div className="w-full md:w-1/6 flex items-center justify-center">
              <img
                className="w-3/4 h-auto object-cover rounded-md cursor-pointer"
                src={jlpt}
                alt=""
                onClick={() => setSelectedImg(jlpt)}
              />
            </div>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-gray-900/90 bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              src={selectedImg}
              alt="Result"
              className="max-w-3xl max-h-[90vh] rounded-lg shadow-lg mt-15 "
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Education;
