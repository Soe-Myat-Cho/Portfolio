import React from "react";

const texts = [
  "Creative minds think alike ✨ ",
  "Innovate. Inspire. Repeat. 🚀 ",
  "Build, Break, Learn, Grow! 🔥 ",
];

const ScrollingRow = ({ text, reverse = false }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className={`flex min-w-[200%] ${
          reverse ? "animate-scroll-reverse" : "animate-scroll"
        }`}
      >
        {[...Array(20)].map((_, i) => (
          <span key={i} className="mx-8 text-xl font-semibold text-indigo-600">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function ScrollingRows() {
  return (
    <div className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <ScrollingRow text={texts[0]} />
      <ScrollingRow text={texts[1]} reverse />
      <ScrollingRow text={texts[2]} />
    </div>
  );
}
