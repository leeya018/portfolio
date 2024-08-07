"use client";

import AboutSection from "@/features/AboutSection";
import Header from "@/components/Header";

import React, { useRef } from "react";

// import data from "@/data/info.json";
import data from "../../../content/en.json";
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
import ProjectsSection from "@/features/ProjectsSection";

const HomePage = () => {
  // const t = useTranslations("about");
  // Extract the navigation object keys from the translations
  // const navigationKeys = Object.keys(t.raw("navigation"));
  return (
    <>
      <div className="h-screen relative">
        <Header />
        <main className="">
          {/* <Modal
            bgColor="bg-white"
            isOpen={ModalStore.modalName === modals.scedule}
            closeModal={ModalStore.closeModal}
          >
            <Calender />
          </Modal> */}

          <AboutSection data={data.about} />
          <GallerySection data={data.gallery} />
          <ContentSection data={data.content} />
          <ProductsSection data={data.products} />
          <ProjectsSection data={data.projects} />
          <ContactSection data={data.contact} />
        </main>
      </div>
    </>
  );
};

export default observer(HomePage);
