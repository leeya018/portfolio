import React, { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const LangSwitcher: React.FC = () => {
  interface Option {
    country: string;
    code: string;
  }

  const router = useRouter();
  const pathname = usePathname();

  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);
  const locale = useLocale();

  const options: Option[] = [
    { country: "English", code: "en" },
    { country: "Hebrew", code: "he" },
    { country: "Spanish", code: "es" },
  ];

  const setOption = (option: Option) => {
    setIsOptionsExpanded(false);
    router.push(`/${option.code}`);
  };

  const getLang = () => {
    if (locale === "en") return options[0].country;
    if (locale === "he") return options[1].country;
    if (locale === "es") return options[2].country;
    return options[0].country;
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="relative text-lg w-28">
        <button
          className=" justify-between w-full  
           text-white bg-black 
            focus:ring-4 
             focus:ring-blue-300 
           font-medium 
            text-sm  py-2.5 text-center
             inline-flex items-center "
          onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
          onBlur={() => setIsOptionsExpanded(false)}
        >
          <div className="w-full mx-auto">{getLang()}</div>

          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`h-4 w-4 transform transition-transform duration-200 ease-in-out ${
              isOptionsExpanded ? "rotate-180" : "rotate-0"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          className={`transition-transform duration-500 ease-custom ${
            !isOptionsExpanded
              ? "-translate-y-1/2 scale-y-0 opacity-0"
              : "translate-y-0 scale-y-100 opacity-100"
          }`}
        >
          <ul
            className="absolute left-0 right-0 mb-4 bg-white text-black divide-y 
          rounded-lg shadow-lg overflow-hidden"
          >
            {options.map((option, index) => (
              <li
                key={index}
                className="px-3 py-2 transition-colors duration-300 hover:bg-gray-200 flex items-center cursor-pointer"
                onMouseDown={(e) => {
                  e.preventDefault();
                  setOption(option);
                }}
                onClick={() => {
                  console.log("option");
                  console.log(option);
                  setIsOptionsExpanded(false);
                }}
              >
                &nbsp;&nbsp;{option.country}
                {pathname === `/${option.code}` && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-7 h-7 text-green-500 ml-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LangSwitcher;
