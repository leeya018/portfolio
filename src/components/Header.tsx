import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div className=" w-full flex  justify-center items-center bg-black">
          <nav className="flex gap-4 items-center my-10 relative flex-col md:flex-row">
            <button
              onClick={() => {
                scrollToSection("about");
                setIsMenuOpen(false);
              }}
              className="hover:text-gray-400 text-center "
            >
              ABOUT
            </button>
            <button
              onClick={() => {
                scrollToSection("gallery");
                setIsMenuOpen(false);
              }}
              className="hover:text-gray-400 text-center"
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
            className="invisible md:visible text-4xl absolute top-10 
            right-10 justify-self-end"
          >
            &#10005;
          </button>
        </div>
      ) : (
        <div className=" absolute top-3 right-3 md:top-8 md:right-8  ">
          <button onClick={toggleMenu} className="text-4xl ">
            &#9776;
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
