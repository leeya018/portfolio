import React from "react";
import Section from "../components/Section";
import Image from "next/image";
import { contentStore } from "@/store/contentStore";
import { observer } from "mobx-react-lite";
import useContent from "@/hooks/useContentHook";

type GallerySectionProps = {
  data: any;
};

const GallerySection = ({ data }: GallerySectionProps) => {
  const { contentRef, sectionRef, scrollToContent, scrollToSection } =
    useContent(data);

  return (
    <>
      <Section
        sectionRef={sectionRef}
        onClick={scrollToContent}
        id={data.type}
        backgroundImage={data.backgroundImage}
      />

      {contentStore.name === data.type && (
        <section
          id={data.type}
          ref={contentRef}
          className="bg-black text-white py-20 px-8 min-h-screen"
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
            <h2 className="text-2xl font-semibold mb-8 text-center">
              {data.title}
            </h2>
            <p className="text-gray-300 mb-12 text-center">
              {data.description}
            </p>

            {data.sections.map((section: any, sectionIndex: number) => (
              <div key={sectionIndex} className="mb-16">
                <h3 className="text-xl font-semibold mb-6">
                  {section.sectionTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {section.images.map((image: any, imageIndex: number) => (
                    <div
                      key={imageIndex}
                      className="rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image.url}
                        width={300}
                        height={300}
                        alt={image.altText}
                        className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
                      />
                      <div className="text-center mt-2">
                        <p className="text-lg font-medium">{image.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default observer(GallerySection);
