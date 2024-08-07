import { useRouter } from "next/router";
import enContent from "../../content/en.json";
import heContent from "../../content/he.json";
import esContent from "../../content/es.json";

type Locale = "en" | "he" | "es";

export const useLocale = () => {
  const { locale } = useRouter();
  const currentLocale: Locale = (locale as Locale) || "en";
  return currentLocale;
};
