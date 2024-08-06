import Section from "@/components/Section";
import useContent from "@/hooks/useContentHook";
import { contentStore } from "@/store/contentStore";
import { observer } from "mobx-react-lite";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

type AboutSectionProps = {
  data: any;
};

const AboutSection = ({ data }: AboutSectionProps) => {
  const { contentRef, sectionRef, scrollToContent, scrollToSection } =
    useContent(data);
  const t = useTranslations("about");

  const contentItems = Object.keys(t.raw("content"));

  return (
    <>
      <Section
        sectionRef={sectionRef}
        onClick={scrollToContent}
        id={t(`type`)}
        backgroundImage={t(`backgroundImage`)}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-1">
                <h2 className="text-2xl font-semibold mb-4">{t(`title`)}</h2>
                <p className="text-gray-300 mb-4">{t(`content.intro`)}</p>
                <h3 className="text-xl font-semibold mb-4">Target Audience</h3>
                {/* <h3 className="text-xl font-semibold mb-4">Target Audience</h3> */}
                <ul className="text-gray-300 mb-4">
                  <li>Age Range: {t(`content.targetAudience.ageRange`)}</li>
                  <li>Gender: {t(`content.targetAudience.gender`)}</li>
                  <li>Location: {t(`content.targetAudience.location`)}</li>
                  <li>
                    Marital Status: {t(`content.targetAudience.maritalStatus`)}
                  </li>
                  <li>Occupation: {t(`content.targetAudience.occupation`)}</li>
                </ul>
                <h3 className="text-xl font-semibold mb-4">Customer Profile</h3>
                <div className="text-gray-300 mb-4">
                  <h4 className="text-lg font-semibold">Personality Traits:</h4>
                  <ul>
                    {data.content.customerProfile.personalityTraits.map(
                      (_: string, index: number) => (
                        <li key={index}>
                          {t(
                            `content.customerProfile.personalityTraits.${[
                              index,
                            ]}`
                          )}
                        </li>
                      )
                    )}
                  </ul>
                  <h4 className="text-lg font-semibold mt-4">Challenges:</h4>
                  <ul>
                    {data.content.customerProfile.challenges.map(
                      (_: string, index: number) => (
                        <li key={index}>
                          {t(`content.customerProfile.challenges.${[index]}`)}
                        </li>
                      )
                    )}
                  </ul>
                  <h4 className="text-lg font-semibold mt-4">Goals:</h4>
                  <ul>
                    {data.content.customerProfile.goals.map(
                      (_: string, index: number) => (
                        <li key={index}>
                          {t(`content.customerProfile.goals.${[index]}`)}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              <div className="col-span-1">
                <h3 className="text-xl font-semibold mb-4">
                  Values and Beliefs
                </h3>
                <ul className="text-gray-300 mb-4">
                  {data.content.valuesAndBeliefs.beliefs.map(
                    (_: string, index: number) => (
                      <li key={index}>
                        {t(`content.valuesAndBeliefs.beliefs.${[index]}`)}
                      </li>
                    )
                  )}
                </ul>
                <h3 className="text-xl font-semibold mb-4">
                  Mission Statement
                </h3>
                <p className="text-gray-300 mb-4">
                  {t(`content.missionStatement`)}
                </p>
                <Image
                  src={t(`content.myImage.url`)}
                  width={300}
                  height={300}
                  alt={t(`content.myImage.altText`)}
                  className="object-cover p-4 w-full 
                        "
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default observer(AboutSection);
