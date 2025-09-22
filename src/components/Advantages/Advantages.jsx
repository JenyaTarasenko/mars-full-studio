import './style.css';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

import AdvantagesUk from "../../assets/image/advantages-Uk.svg";
import AdvantagesEn from "../../assets/image/advantages-En.svg";
import AdvantagesRu from "../../assets/image/advantages-Ru.svg";

import i18n from "i18next";

import Card1Uk from "../../assets/image/advantagesCard1-Uk.svg";
import Card1En from "../../assets/image/Card1En.svg";
import Card1Ru from "../../assets/image/Card1Ru.svg";

import Card2En from "../../assets/image/Card2En.svg";
import Card2Ru from "../../assets/image/Card2Ru.svg";
import Card2Uk from "../../assets/image/advantagesCard2-Uk.svg";

import Card3Uk from "../../assets/image/advantagesCard3-Uk.svg";
import Card3Ru from "../../assets/image/Card3Ru.svg";
import Card3En from "../../assets/image/Card3En.svg";




function Advantages(){
    const { t } = useTranslation();

    const logosDes = {
        en: AdvantagesEn,
        uk:AdvantagesUk,
        ru:AdvantagesRu,
    };
    const lang = i18n.resolvedLanguage || "en"; // текущий язык
    const card1 = {ru:Card1Ru, en:Card1En, uk:Card1Uk}
    const card2 = {ru:Card2Ru, en:Card2En, uk:Card2Uk}
    const card3 = {ru:Card3Ru, en:Card3En, uk:Card3Uk}
    return(
    <>
        <div className="flex items-center justify-center mt-20 advantages-desktop">
            <motion.img
                src={logosDes[i18n.language] || logosDes.en} 
                alt="The best proposal for the development of Mars"
                initial={{ opacity: 0, y: 100 }}          // старт: невидимая и ниже
                whileInView={{ opacity: 1, y: 0 }}        // при появлении: видимая и на месте
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full max-w-[1000px] mx-auto will-change-transform"
                style={{ willChange: "transform, opacity" }} // подсказка браузеру
            />
    </div>
        {/* блок дестоп  */}

      
        <div className="flex items-center justify-center mt-20 advantages-mobile flex-col gap-20">
            <img src={card1[lang]} alt="he best proposal for the development of Mars" />
            <img src={card2[lang]} alt="he best proposal for the development of Mars" />
            <img src={card3[lang]} alt="he best proposal for the development of Mars" />
           
        </div>
    </>
    );
}
export default Advantages;