// components/PressSection1.tsx
import React, { useState, useRef, useEffect } from "react";
import Section from "../components/Section";

type ContactSectionProps = {
  data: any;
  contentRef: React.RefObject<HTMLDivElement>;
  sectionRef: React.RefObject<HTMLDivElement>;
};
const ContactSection = ({
  contentRef,
  sectionRef,
  data,
}: ContactSectionProps) => {
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
      <Section
        sectionRef={sectionRef}
        onClick={scrollToContent}
        text={data.text}
      />

      {!isHidden && (
        <section
          id={data.text}
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
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h2 className="text-xl font-semibold mb-4">{data.title}</h2>
                <p className="text-gray-300 mb-4">
                  {data.description}
                  {/* More text here */}
                </p>
                <p className="text-gray-300 mb-4">
                  {data.email}
                  {/* More text here */}
                </p>
                <p className="text-gray-300 mb-4">
                  {data.phone}
                  {/* More text here */}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ContactSection;
