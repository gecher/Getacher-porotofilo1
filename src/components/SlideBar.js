import "../App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";

export default function Slidebar() {
  const [select, setSelect] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="sm:hidden fixed top-4 left-4 z-50 text-white bg-black p-2 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
  className={`fixed top-0 left-0 h-screen bg-[#111328] w-[75%] sm:w-[25%] p-5 z-50 transition-transform duration-300 ${
    isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
  }`}
>
        <div className="nav flex text-white text-lg mt-10 flex-col text-center gap-5">
          <div>
            <img
              src={require("../assets/images/tt.jpg").default || require("../assets/images/tt.jpg")}
              alt="Getacher Ashebir"
              className="rounded-full border-8 border-stone-600 mx-auto w-[150px]"
            />
            <h3 className="text-white py-4 font-medium">Getacher Ashebir</h3>
          </div>

          {["Home", "About", "Resume", "Projects", "Contact"].map(
            (text, index) => (
              <p
                key={index}
                onClick={() => {
                  setSelect(index);
                  setIsOpen(false); // Close on mobile tap
                }}
                className={`cursor-pointer hover:text-blue-600 transition ${
                  select === index ? "text-blue-600" : ""
                }`}
              >
                <a href={`#${text.toLowerCase().replace(" ", "")}`}>{text}</a>
              </p>
            )
          )}
        </div>

        {/* Social Icons */}
        <div className="text-white flex gap-5 justify-center pt-7">
          <GitHubIcon onClick={() => window.open("https://github.com/gecher", "_blank")} className="cursor-pointer hover:scale-105" />
          <InstagramIcon onClick={() => window.open("https://www.instagram.com", "_blank")} className="cursor-pointer hover:scale-105" />
          <LinkedInIcon onClick={() => window.open("https://www.linkedin.com/in/getacher-ashebir-452434204", "_blank")} className="cursor-pointer hover:scale-105" />
          <FacebookIcon onClick={() => window.open("https://www.facebook.com/daniel.jebarson.9", "_blank")} className="cursor-pointer hover:scale-105" />
        </div>
      </div>
    </>
  );
}
