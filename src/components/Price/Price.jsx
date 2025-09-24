import './style.css';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

import PriceRu from "../../assets/image/priceRu.svg";
import PriceEn from "../../assets/image/priceEn.svg";
import PriceUk from "../../assets/image/priceUk.svg";

import PriceMobUk from "../../assets/image/priceMobUk.svg";
import PriceMobEn from "../../assets/image/priceMobEn.svg";
import PriceMobRu from "../../assets/image/priceMobRu.svg";


function Price(){
    const { t } = useTranslation();
    const { i18n }  = useTranslation();

    const logosDes = {
        en:PriceEn,
        uk:PriceUk ,
        ru:PriceRu,
    };
    const logosMob = {
        en:PriceMobEn,
        uk:PriceMobUk,
        ru:PriceMobRu,
    };

    return(
        <>
            <div id="price" className="flex items-center justify-center  section-price-elips-destop flex-row mt-[200px]">
              
                <motion.img src={logosDes[i18n.language] || logosDes.en} 
                 loading="lazy"
                 initial={{ opacity: 0, y: 100 }}          // старт: невидимая и ниже
                 whileInView={{ opacity: 1, y: 0 }}        // при появлении: видимая и на месте
                 transition={{ duration: 1, ease: "easeOut" }}
                 viewport={{ once: true, amount: 0.3 }}
                 className="w-full max-w-[1000px] mx-auto will-change-transform"
                 style={{ willChange: "transform, opacity" }} // подсказка браузеру
                />
            
               

            </div>
            <div className="flex items-center justify-center section-price-elips-mobile flex-col mt-[200px]">
                <motion.img src={logosMob[i18n.language] || logosMob.en}  
                loading="lazy"
                initial={{ opacity: 0, y: 100 }}          // старт: невидимая и ниже
                whileInView={{ opacity: 1, y: 0 }}        // при появлении: видимая и на месте
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full max-w-[1000px] mx-auto will-change-transform"
                style={{ willChange: "transform, opacity" }} // подсказка браузеру
                />
            </div>
        </>
    );
}
export default Price;  