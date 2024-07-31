// components/Section.tsx
import React from "react";

type SectionProps = {
  text: string;
};
const Section = ({ text }: SectionProps) => {
  return (
    <section
      id={text.toLowerCase()}
      className="relative h-screen bg-cover bg-center flex justify-center items-center text-white"
      style={{ backgroundImage: `url(/images/${text}.jpg)` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="relative z-10 text-8xl font-bold">{text.toUpperCase()}</h1>
      <div className="absolute bottom-8 z-10">
        <button className="text-4xl border border-white p-4 rounded-full">
          &#43;
        </button>
      </div>
    </section>
  );
};

export default Section;
