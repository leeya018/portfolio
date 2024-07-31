"use client";

import Header from "@/components/Header";
import Section from "@/components/Section";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Section text="about" />
        <Section text="gallery" />
        <Section text="press" />
        <Section text="instagram" />
        <Section text="speaking" />
        <Section text="contact" />
      </main>
    </>
  );
}
