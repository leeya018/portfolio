import { useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";
import LangSwitcher from "./LanguageSwitcher";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("");
  // console.log();
  useEffect(() => {
    // Check if the screen width is greater than or equal to 768px (not mobile)
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    // Run on mount
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      className="fixed top-0 z-50 left-0 w-full text-white 
     flex justify-center"
    >
      {isMenuOpen ? (
        <div className=" w-full flex flex-col md:flex-row  justify-center items-center bg-black">
          <nav className="flex gap-4 items-center justify-between my-10 relative w-full flex-col md:flex-row mx-10">
            <div className=" text-4xl">
              <LangSwitcher />
            </div>
            <div
              className="flex items-center flex-col md:flex-row
            gap-4"
            >
              <button
                onClick={() => {
                  scrollToSection("about");
                  setIsMenuOpen(false);
                }}
                className="hover:text-gray-400 text-center "
              >
                {t(`about.headerText`)}
              </button>
              <button
                onClick={() => {
                  scrollToSection("gallery");
                  setIsMenuOpen(false);
                }}
                className="hover:text-gray-400 text-center"
              >
                {t(`gallery.headerText`)}{" "}
              </button>
              <button
                onClick={() => {
                  scrollToSection("content");
                  setIsMenuOpen(false);
                }}
                className="hover:text-gray-400"
              >
                {t(`content.headerText`)}
              </button>
              <button
                onClick={() => {
                  scrollToSection("products");
                  setIsMenuOpen(false);
                }}
                className="hover:text-gray-400"
              >
                {t(`products.headerText`)}
              </button>
              <button
                onClick={() => {
                  scrollToSection("contact");
                  setIsMenuOpen(false);
                }}
                className="hover:text-gray-400"
              >
                {t(`contact.headerText`)}
              </button>
            </div>
            <button
              onClick={toggleMenu}
              className="invisible md:visible  text-4xl"
            >
              &#10005;
            </button>
          </nav>
        </div>
      ) : (
        <>
          <button
            onClick={toggleMenu}
            className="text-4xl  absolute top-3 right-3 md:top-8 md:right-8  "
          >
            &#9776;
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
