"use client";

import AboutSection from "@/features/AboutSection";
import Header from "@/components/Header";

import React, { useRef } from "react";

import data from "@/data/info.json";
import GallerySection from "@/features/GallerySection";
import PressSection from "@/features/PressSection";
import InstagramSection from "@/features/InstagramSection";
import SpeakingSection from "@/features/SpeakingSection";
import ContactSection from "@/features/ContactSection";
import { observer } from "mobx-react-lite";

const HomePage = () => {
  return (
    <div className="h-screen relative">
      <Header />
      <main className="">
        {/* <AboutSection /> */}
        <AboutSection data={data.about} />
        <GallerySection data={data.gallery} />
        {/* <PressSection data={data.press} />
        <InstagramSection data={data.instagram} />
        <SpeakingSection data={data.speaking} />
        <ContactSection data={data.contact} /> */}
      </main>
    </div>
  );
};

export default observer(HomePage);
