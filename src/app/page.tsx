"use client";

import Header from "@/components/Header";
import Section from "@/components/Section";
import SectionWithContent from "@/components/SectionWithContent";

import React, { useRef } from "react";

export default function HomePage() {
  const contentAboutRef = useRef<HTMLDivElement>(null);
  const sectionAboutRef = useRef<HTMLDivElement>(null);

  const contentGalleryRef = useRef<HTMLDivElement>(null);
  const sectionGalleryRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-screen relative">
      <Header />
      <main className="">
        {/* <AboutSection /> */}
        <SectionWithContent
          text={"about"}
          contentRef={contentAboutRef}
          sectionRef={sectionAboutRef}
        />
        <SectionWithContent
          text={"gallery"}
          contentRef={contentGalleryRef}
          sectionRef={sectionGalleryRef}
        />
      </main>
    </div>
  );
}
