import React from "react";
const About = () => {
  const info = [
    //{ text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "10" },
    { text: "Academic Years", count: "3" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-100 my-3">
              <p className="text-justify font-thin leading-9 w-11/12 mx-auto text-xl ">
                Passionate Full-Stack Developer with a strong academic
                excellence and hand-on projects . Started as a self-taught
                developer in 2022 and further enhanced my skills by joining NCC
                Education in 2023. Specialized in building full-stack
                applications using frontend frameworks like React, Vue, and
                Next.js, alongside server-side technologies such as Node.js,
                Express.js, Laravel API development, MySQL, Appwrite and
                MongoDB.
              </p>
            </div>
            <div className="flex mt-10 items-center gap-7">
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
