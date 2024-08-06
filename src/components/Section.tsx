// components/Section.tsx
import { observer } from "mobx-react-lite";
import React from "react";

type SectionProps = {
  id: string;
  title: string;
  onClick: any;
  sectionRef: any;
  backgroundImage: string;
};
const Section = ({
  id,
  title,
  onClick,
  sectionRef,
  backgroundImage,
}: SectionProps) => {
  return (
    <section
      ref={sectionRef}
      id={id}
      className="relative h-[60vh] md:h-[80vh] w-screen
      overflow-x-hidden  bg-cover bg-center flex justify-center items-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="relative z-10 text-5xl md:text-6xl  font-bold">{title}</h1>
      <div className="absolute bottom-8 z-10">
        <button onClick={onClick} className="circle-button">
          &#43;
        </button>
      </div>
    </section>
  );
};

export default observer(Section);
