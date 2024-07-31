// components/Section.tsx
import { observer } from "mobx-react-lite";
import React from "react";

type SectionProps = {
  text: string;
  onClick: any;
  sectionRef: any;
};
const Section = ({ text, onClick, sectionRef }: SectionProps) => {
  return (
    <section
      ref={sectionRef}
      id={text.toLowerCase()}
      className="relative h-screen bg-cover bg-center flex justify-center items-center text-white"
      style={{ backgroundImage: `url(/images/${text}.jpg)` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="relative z-10 text-8xl font-bold">{text.toUpperCase()}</h1>
      <div className="absolute bottom-8 z-10">
        <button
          onClick={onClick}
          className="text-4xl border border-white p-4 rounded-full"
        >
          &#43;
        </button>
      </div>
    </section>
  );
};

export default observer(Section);
