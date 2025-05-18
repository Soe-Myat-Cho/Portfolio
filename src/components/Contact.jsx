import React from "react";
const socialMediaLinks = [
  "https://github.com/Soe-Myat-Cho",
  "https://www.linkedin.com/in/soemyat-cho-8b8635352/",
  "https://web.facebook.com/soe.m.ic",
];

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "soemyatchobgn@gmail.com" },
    { logo: "call-outline", text: "+668 4221 9830" },
    {
      logo: "location",
      text: "Bangkok, Thailand",
    },
  ];
  const social_media = ["logo-github", "logo-linkedin", "logo-facebook"];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex flex-col gap-6 max-w-4xl bg-gray-800 md:p-6 p-4 rounded-lg mx-auto">
          <div className="flex flex-col md:flex-row gap-7">
            {/* Contact Info Section */}
            <div className="flex flex-col gap-5 md:w-1/2">
              {contact_info.map((contact, i) => (
                <div
                  key={i}
                  className="flex flex-row text-left gap-4 flex-wrap items-center"
                >
                  <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                    <ion-icon name={contact.logo}></ion-icon>
                  </div>
                  <p className="md:text-base text-sm break-words">
                    {contact.text}
                  </p>
                </div>
              ))}
              <div className="text-3xl flex items-center md:justify-start justify-center gap-5">
                {social_media?.map((icon, index) => (
                  <a
                    key={icon}
                    href={socialMediaLinks[index]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-white cursor-pointer"
                  >
                    <ion-icon name={icon}></ion-icon>
                  </a>
                ))}
              </div>
            </div>

            {/* Paragraph Section */}
            <div className="md:w-1/2 text-white flex items-center pr-6">
              <p className="text-lg leading-relaxed font-light text-gray-100 text-left not-italic">
                Thank you for visiting my portfolio. I am always excited to
                connect with new people and explore potential collaborations. If
                you have a project in mind or need some advice, feel free to
                reach out. You can contact me via email or Line. I look forward
                to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
