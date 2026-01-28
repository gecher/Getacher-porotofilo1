import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../App.css"; // Ensure this file has Tailwind included

const Layout = ({ children }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });

    const handleMouseMove = (e) => {
      const cursor = document.querySelector(".cursor");
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseDown = () => {
      const cursor = document.querySelector(".cursor");
      if (cursor) {
        cursor.style.height = "35px";
        cursor.style.width = "35px";
      }
    };

    const handleMouseUp = () => {
      const cursor = document.querySelector(".cursor");
      if (cursor) {
        cursor.style.height = "23px";
        cursor.style.width = "23px";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="flex-grow">{children}</div>
      <div className="cursor"></div>
    </div>
  );
};

export default Layout;
