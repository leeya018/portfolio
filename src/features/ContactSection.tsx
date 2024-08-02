import React from "react";
import Section from "../components/Section";
import { contentStore } from "@/store/contentStore";
import { observer } from "mobx-react-lite";
import useContent from "@/hooks/useContentHook";
import * as Icons from "react-icons/fa";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";

type ContactSectionProps = {
  data: any;
};

const ContactSection = ({ data }: ContactSectionProps) => {
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
          className="bg-black text-white py-10 px-8 min-h-screen"
        >
          <div className="flex w-full justify-center mb-10 mt-20">
            <button onClick={scrollToSection} className="circle-button">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-8">
                {data.contactMethods.map((method: any, index: number) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold">{method.method}</h3>
                    {Array.isArray(method.details) ? (
                      <ul className="text-gray-300 flex gap-5">
                        {method.details.map((detail: any, i: number) => {
                          return (
                            <li key={i} className="flex flex-col my-4">
                              {/* <FaInstagramSquare /> */}
                              <a href={detail.url}>
                                {React.createElement(
                                  Icons[detail.icon as keyof typeof Icons] ||
                                    Icons.FaQuestionCircle,
                                  {
                                    size: "2em",
                                    style: { color: detail.color }, // Use inline style for dynamic color
                                  }
                                )}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <p className="text-gray-300">{method.details}</p>
                    )}
                    <p className="text-gray-500">{method.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">
                  {data.location.title}
                </h3>
                <p className="text-gray-300">{data.location.address}</p>
                <button
                  onClick={() => ModalStore.openModal(modals.scedule)}
                  className="w-full p-3 bg-blue-600 text-white rounded-md mt-10 "
                >
                  {data.meet.title}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default observer(ContactSection);
