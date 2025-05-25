import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

import lv4 from "../assets/images/lv4.jpg";
import lv5 from "../assets/images/lv5.png";
import jlpt from "../assets/images/jlpt.jpg";

const educationData = [
  {
    date: "2025 - 2026",
    title: "BSc (Hons) Computer Science",
    subtitle: "University of Greenwich",
    description:
      "I am currently attending the BSc (Hons) Computer Science degree offered by the University of Greenwich. This degree is equivalent to the final year of a UK honours degree and builds upon my previous academic qualifications in computing.",
  },
  {
    date: "2024 - 2025",
    title: "NCC Level 5 Diploma in Computing",
    subtitle: "Achieved Five Distinctions",
    description:
      "I recently completed the NCC Level 5 Diploma in Computing with five distinctions out of six modules. This diploma is equivalent to the second year of a UK honours degree in computing. It deepened my knowledge in software engineering, systems analysis, network security, and web technologies.",
    img: lv5,
  },
  {
    date: "2023 - 2024",
    title: "NCC Level 4 Diploma in Computing",
    subtitle: "Distinction in Every Module",
    description:
      "I completed the NCC Level 4 Diploma in Computing with distinction in every module. This diploma is equivalent to the first year of a UK university degree in computing and covered essential areas such as computer systems, software development, database design, networks, and web development.",
    img: lv4,
  },
  {
    date: "2022",
    title: "Japanese-Language Proficiency Test - N4",
    subtitle: "Grade A in All Sections",
    description:
      "I passed the JLPT N4 exam with Grade A in all sections—grammar, vocabulary, reading, and listening—demonstrating strong foundational proficiency in the Japanese language. This level certifies that I can understand basic Japanese used in everyday conversations.",
    img: jlpt,
  },
  {
    date: "2018 - 2019",
    title: "Matriculation Exam - Myanmar",
    subtitle: "2 Distinctions in 6 Subjects",
    description: "Mathematics (87 marks) • Biology (79 marks)",
  },
];

const EducationTimeline = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div
      id="education"
      className="text-white py-14 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto"
    >
      <h3 className="text-3xl sm:text-4xl text-center font-bold mb-2">
        My <span className="text-cyan-500">Education</span>
      </h3>
      <p className="text-base sm:text-lg text-center mb-10 sm:mb-12 text-gray-400">
        Here's a timeline of my academic journey.
      </p>

      <VerticalTimeline lineColor="#ccc">
        {educationData.map((edu, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={edu.date}
            contentStyle={{
              background: "rgba(15, 23, 42, 0.7)",
              color: "#fff",
              boxShadow: "none",
              border: "none",
            }}
            contentArrowStyle={{
              borderRight: "7px solid rgba(15, 23, 42, 0.7)",
            }}
            iconStyle={{ background: "#06b6d4", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">{edu.title}</h3>
              <h4 className="text-sm sm:text-md mt-1 text-cyan-400">
                {edu.subtitle}
              </h4>
              <h4 className="mt-2 text-sm sm:text-base text-gray-300 font-light">
                {edu.description}
              </h4>
              {edu.img && (
                <div>
                  <p className="mt-3 text-gray-300 font-light">
                    Click to view certificate
                  </p>
                  <motion.img
                    src={edu.img}
                    alt="Education Certificate"
                    className="mt-2 w-24 sm:w-32 h-auto rounded cursor-pointer border border-gray-600 shadow-lg hover:shadow-blue-500/50"
                    onClick={() => setSelectedImg(edu.img)}
                    animate={{
                      rotate: [0, -5, 5, -5, 5, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatDelay: 2,
                      duration: 1,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              )}
            </div>
          </VerticalTimelineElement>
        ))}

        {/* Responsive blur backgrounds for larger screens only */}
        <div className="hidden md:block">
          <div className="absolute top-0 left-[80%] w-[300px] h-[300px] bg-blue-900 blur-3xl opacity-20 rounded-full z-0"></div>
          <div className="absolute bottom-60 right-[85%] w-[400px] h-[400px] bg-blue-900 blur-3xl opacity-20 rounded-full z-0"></div>
        </div>
      </VerticalTimeline>

      {/* Image preview modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              src={selectedImg}
              alt="Preview"
              className="w-11/12 sm:max-w-3xl max-h-[90vh] rounded-lg mt-8"
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

export default EducationTimeline;
