import React from "react";
import Section from "../components/Section";
import Image from "next/image";
import { contentStore } from "@/store/contentStore";
import { observer } from "mobx-react-lite";
import useContent from "@/hooks/useContentHook";
import { useTranslations } from "next-intl";

type GallerySectionProps = {
  data: any;
};

const GallerySection = ({ data }: GallerySectionProps) => {
  const { contentRef, sectionRef, scrollToContent, scrollToSection } =
    useContent(data);
  const t = useTranslations("gallery");

  return (
    <>
      <Section
        title={t(`headerText`)}
        sectionRef={sectionRef}
        onClick={scrollToContent}
        id={t(`type`)}
        backgroundImage={t(`backgroundImage`)}
      />

      {contentStore.name === t(`type`) && (
        <section
          id={t(`type`)}
          ref={contentRef}
          className="bg-black text-white py-10 px-8 min-h-screen max-w-screen overflow-x-hidden"
        >
          <div className="flex w-full justify-center mb-10 mt-20">
            <button onClick={scrollToSection} className="circle-button">
              -
            </button>
          </div>
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              {t(`title`)}
            </h2>
            <p className="text-gray-300 mb-12 text-center">
              {t(`description`)}
            </p>

            {data.sections.map((section: any, sectionIndex: number) => (
              <div key={sectionIndex} className="mb-16">
                <h3 className="text-xl font-semibold mb-6">
                  {section.sectionTitle}
                  {/* {t(`sections.${section.sectionTitle}`)} */}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {section.images.map((image: any, imageIndex: number) => (
                    <div
                      key={imageIndex}
                      className="rounded-lg overflow-hidden text-white"
                    >
                      <Image
                        src={image.url}
                        // src={"/images/gallery/bg.jpg"}
                        width={300}
                        height={300}
                        alt={image.altText}
                        className="object-cover w-full 
                        h-full transform transition-transform 
                        duration-300 hover:scale-105"
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
