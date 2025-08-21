  // import React from "react";
  // import { useTranslation } from "react-i18next";

  // const LanguageSwitcher = () => {
  //   const { i18n } = useTranslation();

  //   const changeLanguage = (lng) => {
  //     i18n.changeLanguage(lng);
  //   };
  //   // const currentLang = i18n.language.slice(0, 2);
  //   return (
  //     <div className="flex gap-3 items-center cursor-pointer">
  //       <span
  //         onClick={() => changeLanguage("en")}
  //         className={`px-3 py-1 ${i18n.language === "en"  ? "text-xs font-light text-white" : "text-red-500"}`}
  //       >
  //         EN
  //       </span>
  //       <span className="text-gray-500">|</span> {/* вертикальная линия */}
  //       <span
  //         onClick={() => changeLanguage("ru")}
  //         className={`px-3 py-1 ${i18n.language === "en"  ? "text-xs font-light text-white" : "text-red-500"}`}
  //       >
  //         RU
  //       </span>
  //     </div>
  //   );
  // };

  // export default LanguageSwitcher;
    import React from "react";
    import { useTranslation } from "react-i18next";

    const LanguageSwitcher = () => {
      const { i18n } = useTranslation();

      const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

      const currentLang = i18n.resolvedLanguage;

      return (
        <div className="flex gap-3 items-center cursor-pointer">
          <span
            onClick={() => changeLanguage("en")}
            className={`px-3 py-1 transition-colors ${
              currentLang === "en"
              ? "text-red-500"  // Активный - красный и жирный
              : "text-gray-400 hover:text-white text-xs font-light" 
            }`}
          >
            en
          </span>
          <span className="text-gray-500">|</span>
          <span
            onClick={() => changeLanguage("ru")}
            className={`px-3 py-1 transition-colors ${
              currentLang === "ru"
                ? "text-red-500"  // Активный - красный и жирный
                : "text-gray-400 hover:text-white text-xs font-light" 
            }`}
          >
            ru
          </span>
          <span className="text-gray-500">|</span>
          <span
            onClick={() => changeLanguage("uk")}
            className={`px-3 py-1 transition-colors ${
              currentLang === "uk"
                ? "text-red-500"  // Активный - красный и жирный
                : "text-gray-400 hover:text-white text-xs font-light" 
            }`}
          >
            uk
          </span>
        </div>
      );
    };

    export default LanguageSwitcher;




