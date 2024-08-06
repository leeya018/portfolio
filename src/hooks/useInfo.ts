import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import heContent from "@/locales/he/content.json";
import enContent from "@/locales/en/content.json";
import esContent from "@/locales/es/content.json";
import { usePathname, useSearchParams } from "next/navigation";

const useInfo = () => {
  const [content, setContent] = useState<any>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const locale = searchParams.get("locale") || "en";

      switch (locale) {
        case "en":
          setContent(enContent);
          break;
        case "he":
          setContent(heContent);
          break;
        case "es":
          setContent(esContent);
          break;
        default:
          setContent(enContent);
      }
    }
  }, [pathname, searchParams]);

  return content;
};

export default useInfo;
