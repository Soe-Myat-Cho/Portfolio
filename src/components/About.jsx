import React from "react";

const About = () => {
  const info = [
    { text: "Completed Projects", count: "10" },
    { text: "Academic Years", count: "3" },
  ];

  return (
    <section id="about" className="py-16 text-white">
      <div className="text-center">
        <h3 className="text-3xl md:text-4xl font-bold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-2 mb-6 text-base md:text-lg">
          My introduction
        </p>

        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
          {/* Text Section */}
          <div className="w-full ">
            <p className="text-gray-100 text-justify text-[clamp(1rem,2.5vw,1.25rem)] leading-8 md:leading-9 font-light">
              Passionate Full-Stack Developer with a strong academic excellence
              and hands-on projects. Started as a self-taught developer in 2022
              and further enhanced my skills by joining NCC Education in 2023.
              Specialized in building full-stack applications using frontend
              frameworks like React, Vue, and Next.js, alongside server-side
              technologies such as Node.js, Express.js, Laravel API development,
              MySQL, Appwrite and MongoDB.
            </p>

            <div className="flex flex-wrap mt-10 gap-10 md:gap-16 justify-center md:justify-start">
              {info.map((content) => (
                <div key={content.text}>
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    {content.count}
                    <span className="text-cyan-600">+</span>{" "}
                  </h3>
                  <span className="md:text-base text-xs">{content.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
