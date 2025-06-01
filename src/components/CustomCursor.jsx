// src/components/CustomCursor.jsx
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-5 h-5 border-2 bg-cyan-600 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75"
      style={{
        transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
      }}
    ></div>
  );
};

export default CustomCursor;
