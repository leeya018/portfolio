import React, { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const LangSwitcher: React.FC = () => {
  interface Option {
    country: string;
    code: string;
  }

  const router = useRouter();
  const pathname = usePathname();

  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);

  const options: Option[] = [
    { country: "English", code: "en" },
    { country: "Hebrew", code: "he" },
    { country: "Spanish", code: "es" },
  ];

  const setOption = (option: Option) => {
    setIsOptionsExpanded(false);
    router.push(`/${option.code}`);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="relative text-lg w-48">
        <button
          className=" justify-between w-full border border-gray-500 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
          onBlur={() => setIsOptionsExpanded(false)}
        >
          Select Language
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
          <ul className="absolute left-0 right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-hidden">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-3 py-2 transition-colors duration-300 hover:bg-gray-200 flex items-center cursor-pointer"
                onMouseDown={(e) => {
                  e.preventDefault();
                  setOption(option);
                }}
                onClick={() => setIsOptionsExpanded(false)}
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

// import React, { useEffect, useState } from "react";
// import Select from "react-select";
// import { observer } from "mobx-react-lite";
// import { languageStore } from "@/mobx/languageStore";
// import ReactCountryFlag from "react-country-flag";
// // import { logDev } from "@/util";

// const LanguageSwitcher = observer(() => {
//   const [chosenOption, setChosenOption] = useState<number>(0);

//   useEffect(() => {
//     const storedLocale =
//       typeof window !== "undefined"
//         ? localStorage.getItem("selectedLocale")
//         : null;
//     if (storedLocale === "en") setChosenOption(0);
//     else if (storedLocale === "he") setChosenOption(1);
//     else if (storedLocale === "es") setChosenOption(2);

//     if (storedLocale) {
//       languageStore.setLocale(storedLocale);
//     } else {
//       languageStore.setLocale("en");
//     }
//   }, []);

//   const changeLanguage = (newLocale: string, optionIndex: number) => {
//     console.log({ newLocale });
//     if (typeof window !== "undefined") {
//       localStorage.setItem("selectedLocale", newLocale);
//     }
//     languageStore.setLocale(newLocale);
//     setChosenOption(optionIndex);
//   };

//   const options = [
//     {
//       value: "USD",
//       label: (
//         <div
//           className="flex items-center text-black"
//           onClick={() => changeLanguage("en", 0)}
//         >
//           <ReactCountryFlag
//             countryCode="US"
//             svg
//             style={{
//               width: "2em",
//               height: "2em",
//             }}
//             title="US"
//           />
//           <span className="mx-2.5">USA</span>
//         </div>
//       ),
//     },
//     {
//       value: "ILS",
//       label: (
//         <div
//           className="flex items-center text-black"
//           onClick={() => changeLanguage("he", 1)}
//         >
//           <ReactCountryFlag
//             countryCode="IL"
//             svg
//             style={{
//               width: "2em",
//               height: "2em",
//             }}
//             title="IL"
//           />
//           <span className="mx-2.5">Israel</span>
//         </div>
//       ),
//     },
//     {
//       value: "EUR",
//       label: (
//         <div
//           className="flex items-center text-black"
//           onClick={() => changeLanguage("es", 2)}
//         >
//           <ReactCountryFlag
//             countryCode="ES"
//             svg
//             style={{
//               width: "2em",
//               height: "2em",
//             }}
//             title="SPAIN"
//           />
//           <span className="mx-2.5">Spain</span>
//         </div>
//       ),
//     },
//   ];

//   return <Select options={options} value={options[chosenOption]} />;
// });

// export default LanguageSwitcher;
