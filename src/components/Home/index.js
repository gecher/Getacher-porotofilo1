import React, { memo, useCallback } from 'react';
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import "../../App.css";
import { AnimatedSection } from '../common/LayoutComponents';

/**
 * Home Component
 * Hero section with animated typewriter effect
 */
const Home = memo(function Home() {
  const stringSplitter = useCallback((string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  }, []);

  const typewriterStrings = [
    "✋ Hi, I'm Getacher Ashebir",
    "💻 Passionate Full-Stack 🌐 Developer",
    "✈️ Software Developer at Ethiopian Airlines",
    "📬 Let's connect! Reach me via email or LinkedIn 🤝",
  ];

  const scrollToContact = useCallback(() => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <AnimatedSection 
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-12"
      animation="fadeUp"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide pb-6 text-white">
          Welcome
        </h1>
        
        <div className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 pb-12 min-h-[120px] flex items-center justify-center">
          <Typewriter
            options={
              {
                strings: typewriterStrings,
                delay: 75,
                pauseFor: 1500,
                autoStart: true,
                loop: true,
                stringSplitter: stringSplitter,
              }
            }
            onInit={(typewriter) => {
              typewriter
                .typeString(typewriterStrings[0])
                .pauseFor(1500)
                .deleteAll()
                .typeString(typewriterStrings[1])
                .pauseFor(1500)
                .deleteAll()
                .typeString(typewriterStrings[2])
                .pauseFor(1500)
                .deleteAll()
                .typeString(typewriterStrings[3])
                .pauseFor(1500)
                .deleteAll()
                .start();
            }}
          />
        </div>
        
        <button 
          onClick={scrollToContact}
          className="py-3 px-8 text-lg font-semibold border-2 border-blue-500 rounded-md hover:-translate-y-1 hover:bg-blue-600 hover:border-blue-400 transition-all duration-300 transform hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          aria-label="Contact Getacher"
        >
          Contact Me
        </button>
      </div>
    </AnimatedSection>
  );
});

export default Home;
