// components/Header.tsx
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header
      className="fixed top-0 z-50 left-0 w-full   text-white 
     flex justify-center"
    >
      {isMenuOpen ? (
        <div className=" w-full flex justify-center items-center bg-black">
          <nav className="flex space-x-8 items-center my-16 relative">
            <button
              onClick={() => {
                scrollToSection("about");
                setIsMenuOpen(false);
              }}
              className="hover:text-gray-400"
            >
              ABOUT
            </button>
            <button
              onClick={() => {
                scrollToSection("gallery");
                setIsMenuOpen(false);
              }}
              className="hover:text-gray-400"
            >
              GALLERY
            </button>
            <button
              onClick={() => {
                scrollToSection("press");
                setIsMenuOpen(false);
              }}
              className="hover:text-gray-400"
            >
              PRESS
            </button>
            <button
              onClick={() => {
                scrollToSection("instagram");
                setIsMenuOpen(false);
              }}
              className="hover:text-gray-400"
            >
              INSTAGRAM
            </button>
            <button
              onClick={() => {
                scrollToSection("speaking");
                setIsMenuOpen(false);
              }}
              className="hover:text-gray-400"
            >
              SPEAKING
            </button>
            <button
              onClick={() => {
                scrollToSection("contact");
                setIsMenuOpen(false);
              }}
              className="hover:text-gray-400"
            >
              CONTACT
            </button>
          </nav>
          <button
            onClick={toggleMenu}
            className="text-4xl absolute top-10 
            right-10 justify-self-end"
          >
            &#10005;
          </button>
        </div>
      ) : (
        <div className="w-full flex justify-end mx-10 mt-12">
          <button onClick={toggleMenu} className="text-4xl re">
            &#9776;
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
