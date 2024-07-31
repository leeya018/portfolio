// components/AboutSection1.tsx
import React, { useState, useRef, useEffect } from "react";

const AboutSection1: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    if (!isHidden && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isHidden]);

  const scrollToContent = () => {
    setIsHidden(false);
  };

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      setIsHidden(true);
    }
  };
  return (
    <>
      <section
        ref={sectionRef}
        className="relative h-screen bg-cover bg-center flex justify-center items-center text-white"
        style={{ backgroundImage: "url('/images/about.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative z-10 text-6xl font-bold">ABOUT</h1>
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 z-10 text-4xl border border-white p-4 rounded-full"
        >
          &#43;
        </button>
      </section>

      {!isHidden && (
        <section
          ref={contentRef}
          className="bg-black text-white py-20 px-8  h-screen"
        >
          <button
            onClick={scrollToSection}
            className="p-10 flex justify-center items-center border-2"
          >
            -
          </button>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h2 className="text-xl font-semibold mb-4">INTRODUCTION</h2>
                <p className="text-gray-300 mb-4">
                  Lior Raz is an Israeli actor and screenwriter best known for
                  creating the political thriller <em>Fauda</em> and portraying
                  the main character Doron Kavillio...
                  {/* More text here */}
                </p>
                {/* Add more text as needed */}
              </div>
              <div className="col-span-1 md:col-span-1">
                <h2 className="text-xl font-semibold mb-4">FILMOGRAPHY</h2>
                <ul className="list-none space-y-2">
                  <li>Six Underground (2019)</li>
                  <li>Mary Magdalene (2018)</li>
                  <li>Operation Finale (2018)</li>
                  {/* More list items here */}
                </ul>
              </div>
              <div className="col-span-1 md:col-span-1">
                <h2 className="text-xl font-semibold mb-4">TELEVISION</h2>
                <ul className="list-none space-y-2">
                  <li>Fauda (2015-2018)</li>
                  <li>Landing on Their Feet (2017)</li>
                  <li>Dumb (2016)</li>
                  {/* More list items here */}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AboutSection1;
