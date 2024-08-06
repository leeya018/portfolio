import { useRouter } from "next/router";
import enContent from "@/locales/en/content.json";
import heContent from "@/locales/he/content.json";
import esContent from "@/locales/es/content.json";

type Locale = "en" | "he" | "es";

const contentByLocale: Record<Locale, typeof enContent> = {
  en: enContent,
  he: heContent,
  es: esContent,
};

export const useContent = () => {
  const { locale } = useRouter();
  const currentLocale: Locale = (locale as Locale) || "en";
  return contentByLocale[currentLocale];
};
