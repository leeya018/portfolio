import React, { useState } from "react";
import Section from "../components/Section";
import { contentStore } from "@/store/contentStore";
import { observer } from "mobx-react-lite";
import useContent from "@/hooks/useContentHook";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Project } from "@/interfaces/Project";
import Modal from "@/components/Modal";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";
import ProjectCard from "@/components/ProjectCard";

type ProjectsSectionProps = {
  data: any;
};

const ProjectsSection = ({ data }: ProjectsSectionProps) => {
  const { contentRef, sectionRef, scrollToContent, scrollToSection } =
    useContent(data);
  const t = useTranslations("projects");

  const [chosenProject, setChosenProject] = useState<Project | null>(null);

  return (
    <>
      <Modal
        bgColor="bg-white"
        isOpen={
          ModalStore.modalName === modals.project && chosenProject !== null
        }
        // isOpen={true}
        closeModal={ModalStore.closeModal}
      >
        <ProjectCard project={chosenProject} />
      </Modal>

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
          className="bg-black text-white py-10 px-8 min-h-screen"
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.items.map((item: any, productIndex: number) => (
                <div
                  key={productIndex}
                  onClick={() => {
                    setChosenProject(item);
                    ModalStore.openModal(modals.project);
                  }}
                  className="rounded-t-lg cursor-pointer pb-6  border  border-gray-700  overflow-hidden flex flex-col justify-between"
                >
                  <div className="border-2 flex justify-center items-center ">
                    <Image
                      width={300}
                      height={500}
                      src={item.images[0]}
                      alt={item.images[0].split("/")[-1]}
                      className="object-cover  w-full h-full"
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="text-lg font-semibold mt-4">{item.name}</h4>
                    <p className="text-gray-300 mt-4 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default observer(ProjectsSection);
