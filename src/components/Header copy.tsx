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
    <>
      <header
        className="fixed top-0 z-50 left-0 w-full   text-white 
     flex justify-center"
      >
        {isMenuOpen && (
          <div className="invisible md:visible w-full flex justify-center items-center bg-black">
            <nav className="flex space-x-8 items-center my-10 relative">
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
                  scrollToSection("content");
                  setIsMenuOpen(false);
                }}
                className="hover:text-gray-400"
              >
                CONTENT
              </button>
              <button
                onClick={() => {
                  scrollToSection("products");
                  setIsMenuOpen(false);
                }}
                className="hover:text-gray-400"
              >
                PRODUCTS
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

          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute w-full bg-black text-center p-4`}
          >
            <button
              onClick={() => {
                scrollToSection("about");
                setIsMenuOpen(false);
              }}
              className="flex justify-center items-center w-full py-2 hover:text-gray-400"
            >
              ABOUT
            </button>
            <button
              onClick={() => {
                scrollToSection("gallery");
                setIsMenuOpen(false);
              }}
              className="block w-full py-2 hover:text-gray-400"
            >
              GALLERY
            </button>
            <button
              onClick={() => {
                scrollToSection("content");
                setIsMenuOpen(false);
              }}
              className="block w-full py-2 hover:text-gray-400"
            >
              CONTENT
            </button>
            <button
              onClick={() => {
                scrollToSection("products");
                setIsMenuOpen(false);
              }}
              className="block w-full py-2 hover:text-gray-400"
            >
              PRODUCTS
            </button>
            <button
              onClick={() => {
                scrollToSection("contact");
                setIsMenuOpen(false);
              }}
              className="block w-full py-2 hover:text-gray-400"
            >
              CONTACT
            </button>
          </nav>
        )}
        {!isMenuOpen && (
          <div className="w-full  relative top-3 left-3 text-white">
            <button onClick={toggleMenu} className="text-4xl re">
              &#9776;
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
