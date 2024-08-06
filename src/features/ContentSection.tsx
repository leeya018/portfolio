import React, { useState } from "react";

import Section from "../components/Section";
import { contentStore } from "@/store/contentStore";
import { observer } from "mobx-react-lite";
import useContent from "@/hooks/useContentHook";
import Modal from "@/components/Modal";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";
import { Article } from "@/interfaces/Article";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import { useTranslations } from "next-intl";

type ContentCenterProps = {
  data: any;
};

const ContentCenter = ({ data }: ContentCenterProps) => {
  const { contentRef, sectionRef, scrollToContent, scrollToSection } =
    useContent(data);
  const t = useTranslations("content");

  const [chosenArticle, setChosenArticle] = useState<Article | null>(null);

  return (
    <>
      <Modal
        bgColor="bg-white"
        isOpen={
          ModalStore.modalName === modals.article && chosenArticle !== null
        }
        // isOpen={true}
        closeModal={ModalStore.closeModal}
      >
        <ArticleCard article={chosenArticle} />
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

                      {item.type === "article" && (
                        <button
                          // href={item.url}
                          className="text-blue-400 hover:underline"
                          onClick={() => {
                            setChosenArticle(item.article);
                            ModalStore.openModal(modals.article);
                          }}
                        >
                          Read Article
                        </button>
                      )}

                      {item.type === "video" && (
                        <Link
                          target="_blank"
                          href={item.url}
                          className="text-blue-400 hover:underline"
                        >
                          Watch Video
                        </Link>
                      )}
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
