"use client";

import AboutSection from "@/features/AboutSection";
import Header from "@/components/Header";
import Section from "@/components/Section";

import React, { useRef } from "react";

import data from "@/data/info.json";
import GallerySection from "@/features/GallerySection";

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
        <AboutSection
          data={data.about}
          contentRef={contentAboutRef}
          sectionRef={sectionAboutRef}
        />
        <GallerySection
          data={data.gallery}
          contentRef={contentAboutRef}
          sectionRef={sectionAboutRef}
        />
      </main>
    </div>
  );
}
