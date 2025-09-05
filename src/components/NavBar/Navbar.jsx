import React, { useState } from "react";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { X, Menu } from "lucide-react"; // иконки
import { Link } from "react-router-dom";


const Navbar = () => {
  const { t } = useTranslation(); 
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 text-white py-5 backdrop-blur-xl bg-black/30 border-b border-white/10 shadow-2xl">
      <div className="flex items-center justify-between relative bg-transparent" >
        {/* Лого слева */}
        <div className="logo-menu px-5">
          <Link to="/">
            <img src="/image/logo-mars.svg" alt="Logo"/>
          </Link>
        </div>

        {/* Центр меню */}
        <ul className="hidden md:flex gap-10 text-xs  font-light tracking-widest absolute left-1/2 transform -translate-x-1/2 font-jost uppercase">
          <li><Link to="/"  className="hover:text-red-500">{t("menu.home")}</Link></li>
          <li><Link to="/about-mars-studio"  className="hover:text-red-500">{t("menu.about")}</Link></li>

          <li 
          className="hover:text-red-500"
          >
          {t("menu.projects")}</li>
          
          <li><Link to="" className="hover:text-red-500">{t("menu.prices")}</Link></li>
          <li><Link to=""  className="hover:text-red-500">{t("menu.blog")}</Link></li>
        </ul>

        {/* скрываем меню при уменьшении */}
        <div className="hidden md:block mr-10">
            <LanguageSwitcher />
        </div>

       

        {/* Бургер справа (mobile) */}
        <div className="md:hidden  flex items-center justify-center px-5">
          <button onClick={() => setIsOpen(!isOpen)}  className="p-2 rounded-md hover:bg-gray-700 hover:text-red-500 transition-colors duration-2">
           
            {isOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </div>

      {/* Меню на mobile */}
      {isOpen && (
        <ul className="md:hidden flex flex-col mt-10 gap-10 text-xs font-light items-center">
           <li><Link to="/"  className="hover:text-red-500">{t("menu.home")}</Link></li>
            <li><Link to="/about-mars-studio" className="hover:text-red-500">{t("menu.about")}</Link></li>
            <li className="hover:text-red-500">
              {t("menu.projects")}
            </li>
            <li><Link to=""  className="hover:text-red-500">{t("menu.prices")}</Link></li>
            <li><Link to=""  className="hover:text-red-500">{t("menu.blog")}</Link></li>
           {/* Языки в бургере */}
           <li className="mt-4">
            <LanguageSwitcher />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
