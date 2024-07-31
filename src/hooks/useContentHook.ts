import { contentStore } from "@/store/contentStore";
import { useEffect, useRef } from "react";

const useContent = (data: any) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentStore.name === data.type && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [contentStore.name]);

  const scrollToContent = () => {
    contentStore.setName(data.type);
  };

  const scrollToSection = () => {
    if (sectionRef.current) {
      contentStore.clearName();

      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { contentRef, sectionRef, scrollToContent, scrollToSection };
};

export default useContent;
