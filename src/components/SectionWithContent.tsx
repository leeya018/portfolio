// components/AboutSection1.tsx
import React, { useState, useRef, useEffect } from "react";
import Section from "./Section";

type SectionWithContentProps = {
  text: string;
  contentRef: React.RefObject<HTMLDivElement>;
  sectionRef: React.RefObject<HTMLDivElement>;
};
const SectionWithContent = ({
  text,
  contentRef,
  sectionRef,
}: SectionWithContentProps) => {
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
      <Section sectionRef={sectionRef} onClick={scrollToContent} text={text} />

      {!isHidden && (
        <section
          ref={contentRef}
          className="bg-black text-white py-20 px-8  h-screen"
        >
          <div className="flex w-full justify-center pt-20">
            <button
              onClick={scrollToSection}
              className="p-5 flex rounded-full justify-center items-center border-2"
            >
              -
            </button>
          </div>
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

export default SectionWithContent;
