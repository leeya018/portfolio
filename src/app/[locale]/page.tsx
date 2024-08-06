"use client";

import AboutSection from "@/features/AboutSection";
import Header from "@/components/Header";

import React, { useRef } from "react";

import data from "@/data/info.json";
import GallerySection from "@/features/GallerySection";
import PressSection from "@/features/ContentSection";
import SpeakingSection from "@/features/ProductsSection";
import ContactSection from "@/features/ContactSection";
import { observer } from "mobx-react-lite";
import ContentSection from "@/features/ContentSection";
import ProductsSection from "@/features/ProductsSection";
import Modal from "@/components/Modal";
import Calender from "@/components/Calender";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LangSwitcher from "@/components/LanguageSwitcher";

const HomePage = () => {
  const t = useTranslations("about");
  // Extract the navigation object keys from the translations
  // const navigationKeys = Object.keys(t.raw("navigation"));
  return (
    <>
      <div className="h-screen relative">
        <LangSwitcher />
        {/* <Header /> */}
        <main className="mt-40">
          {/* <Modal
          bgColor="bg-white"
          isOpen={ModalStore.modalName === modals.scedule}
          closeModal={ModalStore.closeModal}
        >
          <Calender />
        </Modal> */}

          {/* <AboutSection data={data.about} /> */}
          <GallerySection data={data.gallery} />
          {/* <ContentSection data={data.content} />
        <ProductsSection data={data.products} />
        <ContactSection data={data.contact} /> */}
        </main>
      </div>
      {/* <div>{t(`title`)}</div> */}
      {/* <nav>
        <ul>
          {navigationKeys.map((key) => (
            <li key={key}>
              <a href={`#/${key}`}>{t(`navigation.${key}`)}</a>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <div>
          <aside>
            <h2>{t("title")}</h2>
            <p dangerouslySetInnerHTML={{ __html: t("description") }}></p>
          </aside>
        </div>
      </main> */}
    </>
  );
};

export default observer(HomePage);
