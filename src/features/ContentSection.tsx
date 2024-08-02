import React from "react";
import Section from "../components/Section";
import { contentStore } from "@/store/contentStore";
import { observer } from "mobx-react-lite";
import useContent from "@/hooks/useContentHook";

type ContentCenterProps = {
  data: any;
};

const ContentCenter = ({ data }: ContentCenterProps) => {
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

            {data.categories.map((category: any, categoryIndex: number) => (
              <div key={categoryIndex} className="mb-16">
                <h3 className="text-xl font-semibold mb-6">
                  {category.categoryTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.contentItems.map((item: any, itemIndex: number) => (
                    <div
                      key={itemIndex}
                      className="rounded-lg p-4 border border-gray-700"
                    >
                      <h4 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 mb-4">{item.summary}</p>
                      <a
                        href={item.url}
                        className="text-blue-400 hover:underline"
                      >
                        {item.type === "article" && "Read Article"}
                        {item.type === "video" && "Watch Video"}
                        {item.type === "ebook" && "Download Ebook"}
                        {item.type === "testimonial" && "Read Testimonial"}
                        {item.type === "caseStudy" && "Read Case Study"}
                      </a>
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

export default observer(ContentCenter);
