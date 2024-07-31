// components/InstagramSection1.tsx
import React, { useState, useRef, useEffect } from "react";
import Section from "../components/Section";
import Image from "next/image";

type InstagramSectionProps = {
  data: any;
  contentRef: React.RefObject<HTMLDivElement>;
  sectionRef: React.RefObject<HTMLDivElement>;
};
const InstagramSection = ({
  contentRef,
  sectionRef,
  data,
}: InstagramSectionProps) => {
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
              </div>
            </div>

            <div className="flex justify-center w-full">
              <div className="flex flex-wrap   overflow-hidden">
                {data.images.map((src: string, index: number) => (
                  <div key={index} className=" rounded-lg p-10">
                    <Image
                      src={src}
                      width={200}
                      height={200}
                      alt={`Gallery image ${index + 1}`}
                      // className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default InstagramSection;
