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

export default function HomePage() {
  const contentAboutRef = useRef<HTMLDivElement>(null);
  const sectionAboutRef = useRef<HTMLDivElement>(null);

  const contentGalleryRef = useRef<HTMLDivElement>(null);
  const sectionGalleryRef = useRef<HTMLDivElement>(null);

  const contentPressRef = useRef<HTMLDivElement>(null);
  const sectionPressRef = useRef<HTMLDivElement>(null);

  const contentInstagramRef = useRef<HTMLDivElement>(null);
  const sectionInstagramRef = useRef<HTMLDivElement>(null);

  const contentSpeakingRef = useRef<HTMLDivElement>(null);
  const sectionSpeakingRef = useRef<HTMLDivElement>(null);

  const contentContactRef = useRef<HTMLDivElement>(null);
  const sectionContactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-screen relative">
      <Header />
      <main className="">
        {/* <AboutSection /> */}
        <AboutSection
          data={data.about}
          contentRef={contentAboutRef}
          sectionRef={sectionAboutRef}
        />
        <GallerySection
          data={data.gallery}
          contentRef={contentGalleryRef}
          sectionRef={sectionGalleryRef}
        />
        <PressSection
          data={data.press}
          contentRef={contentPressRef}
          sectionRef={sectionPressRef}
        />
        <InstagramSection
          data={data.instagram}
          contentRef={contentInstagramRef}
          sectionRef={sectionInstagramRef}
        />
        <SpeakingSection
          data={data.speaking}
          contentRef={contentSpeakingRef}
          sectionRef={sectionSpeakingRef}
        />
        <ContactSection
          data={data.contact}
          contentRef={contentContactRef}
          sectionRef={sectionContactRef}
        />
      </main>
    </div>
  );
}
