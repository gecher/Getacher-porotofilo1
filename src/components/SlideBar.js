import React, { useState, useEffect } from "react";
import "../App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useIsMobile } from '../hooks/useMediaQuery';
import { LazyImage } from './common/Loaders';

/**
 * SlideBar Component
 * Responsive navigation sidebar with mobile support
 */
export default function Slidebar() {
  const [select, setSelect] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  // Close sidebar when clicking outside (mobile only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && isOpen && !event.target.closest('.sidebar, .menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobile, isOpen]);

  // Prevent body scrolling when sidebar is open on mobile
  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobile, isOpen]);

  const navItems = [
    { id: 0, text: "Home", href: "#home" },
    { id: 1, text: "About", href: "#about" },
    { id: 2, text: "Resume", href: "#resume" },
    { id: 3, text: "Projects", href: "#projects" },
    { id: 4, text: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      icon: GitHubIcon,
      url: "https://github.com/gecher",
      label: "GitHub"
    },
    {
      icon: InstagramIcon,
      url: "https://www.instagram.com",
      label: "Instagram"
    },
    {
      icon: LinkedInIcon,
      url: "https://www.linkedin.com/in/getacher-ashebir-452434204",
      label: "LinkedIn"
    },
    {
      icon: FacebookIcon,
      url: "https://www.facebook.com/daniel.jebarson.9",
      label: "Facebook"
    }
  ];

  const handleNavClick = (id) => {
    setSelect(id);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      {isMobile && (
        <button
          className="fixed top-4 left-4 z-50 text-white bg-black/80 backdrop-blur-sm p-3 rounded-full shadow-lg menu-button transition-all duration-300 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      )}

      {/* Overlay when sidebar is open */}
      {(isMobile && isOpen) && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`sidebar fixed top-0 left-0 h-screen bg-gradient-to-b from-[#111328] to-[#0f172a] w-[75%] sm:w-[25%] p-5 z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        } ${isMobile ? 'shadow-2xl' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav flex flex-col items-center text-white text-lg mt-16 sm:mt-10 gap-8">
          {/* Profile Section */}
          <div className="text-center mb-2">
            <div className="relative mb-4">
              <LazyImage
                src={require("../assets/images/tt.jpg").default || require("../assets/images/tt.jpg")}
                alt="Getacher Ashebir"
                className="rounded-full border-4 border-stone-600 w-24 h-24 object-cover shadow-lg"
                placeholder={
                  <div className="w-24 h-24 rounded-full bg-gray-700 animate-pulse" />
                }
              />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <h3 className="text-white text-xl font-semibold py-2">Getacher Ashebir</h3>
            <p className="text-gray-400 text-sm">Full Stack Developer</p>
          </div>

          {/* Navigation Items */}
          <nav className="w-full">
            <ul className="space-y-3">
              {navItems.map(({ id, text, href }) => (
                <li key={id}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(id);
                      const element = document.querySelector(href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`block py-3 px-4 rounded-lg transition-all duration-300 text-center ${
                      select === id 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                    aria-current={select === id ? 'page' : undefined}
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-8 left-0 right-0 px-5">
          <div className="flex justify-center gap-4">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                aria-label={`Visit my ${label}`}
              >
                <Icon fontSize="small" />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}