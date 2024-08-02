"use client";

import AboutSection from "@/features/AboutSection";
import Header from "@/components/Header";

import React, { useRef } from "react";

import data from "@/data/info.json";
import GallerySection from "@/features/GallerySection";
import PressSection from "@/features/ContentSection";
import InstagramSection from "@/features/InstagramSection";
import SpeakingSection from "@/features/ProductsSection";
import ContactSection from "@/features/ContactSection";
import { observer } from "mobx-react-lite";
import ContentSection from "@/features/ContentSection";
import ProductsSection from "@/features/ProductsSection";

const HomePage = () => {
  return (
    <div className="h-screen relative">
      <Header />
      <main className="">
        {/* <AboutSection /> */}
        <AboutSection data={data.about} />
        <GallerySection data={data.gallery} />
        <ContentSection data={data.content} />
        <ProductsSection data={data.products} />
        {/* <InstagramSection data={data.instagram} />
        <ContactSection data={data.contact} /> */}
      </main>
    </div>
  );
};

export default observer(HomePage);
