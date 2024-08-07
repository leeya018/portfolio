import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import enContent from "../../content/en.json";
import heContent from "../../content/he.json";
import esContent from "../../content/es.json";
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
