// components/InstagramSection1.tsx
import React, { useState, useRef, useEffect } from "react";
import Section from "../components/Section";
import Image from "next/image";
import useContent from "@/hooks/useContentHook";
import { contentStore } from "@/store/contentStore";
import { observer } from "mobx-react-lite";

type InstagramSectionProps = {
  data: any;
};
const InstagramSection = ({ data }: InstagramSectionProps) => {
  const { contentRef, sectionRef, scrollToContent, scrollToSection } =
    useContent(data);
  return (
    <>
      <Section
        sectionRef={sectionRef}
        onClick={scrollToContent}
        text={data.text}
      />

      {contentStore.name === data.type && (
        <section
          id={data.type}
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

export default observer(InstagramSection);
