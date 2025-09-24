import './style.css';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import Des from "../../assets//image/des.svg";
import DesignMob from "../../assets/image/design-mob.svg";
import Card1 from "../../assets/image/card1.svg";
import DesignCard from "../../assets/image/design-card-2.svg";
import DesignCard2 from "../../assets/image/design-card1.svg";
import FrontendDestop from "../../assets/image/frontend-destop.svg";
import MobileFront from "../../assets/image/mobile-front.svg";
import CardFront from "../../assets/image/card-front.svg";
import FrontCard2 from "../../assets/image/front-card2.svg";
import Tehnology1 from "../../assets/image/tehnology1.svg";
import Backend from "../../assets/image/backend.svg";
import BackendMobile from "../../assets/image/backend-mobile.svg";
import BackendCardDestop from "../../assets/image/backend-card-destop.svg";
import BackendCard2 from "../../assets/image/backend-card2.svg";
import Design from "../../assets/image/design-card.svg";

function DesignSection(){
    const { t } = useTranslation();
    return(
        <>
        <div className="flex flex-col items-center justify-center mt-[120px]">
            {/* card-disign  1*/}
            <div className="card-tehnology flex flex-col justify-start w-[300px] lg:w-[700px] md:w-[500px] relative">
                {/* <h5 className="font-extrabold text-2xl sm:text-3xl text-left font-jost mt-10 text-stone-100">Мы разрабатываем<span className="italic font-light text-orange-700 text-4xl"> по-настоящему уникальные дизайны,</span> которые невозможно спутать с другими.</h5> */}
                <h5 className="font-extrabold text-2xl sm:text-3xl text-left font-jost mt-10 text-stone-100">{t('DesignSectionOne.item')}<span className="font-light text-orange-700 text-4xl"> {t('DesignSectionOne.itemOne')}</span> {t('DesignSectionOne.itemTwo')}</h5>
                <img src={Design} loading="lazy" alt="logo" className="mt-3 w-[100px]"/>
                {/* <h6 className="font-jost text-stone-400 mt-5">Наши дизайнеры создают визуальный стиль, который выделяет ваш бизнес среди конкурентов — современный, выразительный и запоминающийся.Каждый элемент продуман: от цветовой палитры до композиции.Наш фирменный стиль узнаваем и помогает сформировать сильный образ бренда в глазах клиента</h6> */}
                <motion.h6 
                    className="font-jost text-stone-400 mt-5"
                    initial={{ opacity: 0, x: -100 }} // невидим и сдвинут влево
                    whileInView={{ opacity: 1, x: 0 }} // плавно появляется и возвращается на место
                    viewport={{ once: true, amount: 0.3 }} // анимация запускается один раз
                    transition={{ duration: 1.2, ease: "easeOut" }} // плавность
                >
                    {t('DesignSectionOne.itemThree')}
                </motion.h6>
                {/* <img src={Des} alt="logo" className="absolute left-1/2 -translate-x-1/2 design-destop z-[-1]"/>
                <img src={DesignMob} alt="logo" className="absolute left-1/2 -translate-x-1/2 design-mob z-[-1] translate-y-[50px] "/> */}
                <div className="card-box flex flex-col lg:flex-row mt-10 gap-3 items-center justify-center lg:justify-start ">
                    <img src={Card1} loading="lazy"  alt="logo" className="transition-transform duration-300 transform hover:scale-105 active:scale-95 w-[310px] h-[200px]"/>
                    <img src={DesignCard} loading="lazy" alt="logo" className="transition-transform duration-300 transform hover:scale-105 active:scale-95 w-[290px] h-[200px]"/>
                </div>
            </div> 
            {/* card-disign  1*/}

            {/* card-disign  2*/}
            <div className="card-tehnology flex flex-col justify-start w-[300px] lg:w-[700px] md:w-[500px] mt-[120px] relative">
            {/* <h5 className="font-extrabold text-2xl sm:text-3xl text-left font-jost mt-10 text-stone-100">Мы создаём — <span className="italic font-light text-orange-700 text-4xl"> frontend на базе React</span> одного из самых мощных инструментов для построения<span className="italic font-light text-orange-700 text-4xl"> динамичных и адаптивных пользовательских интерфейсов,</span>  которые невозможно спутать с другими.</h5> */}
                <h5 className="font-extrabold text-2xl sm:text-3xl text-left font-jost mt-10 text-stone-100">{t('DesignSectionTwo.item')}<span className="font-light text-orange-700 text-4xl">{" "}{t('DesignSectionTwo.itemOne')}{" "}</span>{t('DesignSectionTwo.itemTwo')}{" "}<span className="font-light text-orange-700 text-4xl">{t('DesignSectionTwo.itemThree')}{" "}</span>{t('DesignSectionTwo.itemFour')}</h5>
                <img src={DesignCard2} loading="lazy" alt="logo" className="mt-3 w-[100px]"/>
                {/* <h6 className="font-jost text-stone-400 mt-5">React позволяет реализовывать гибкие и быстрые сайты с интерактивными элементами, плавной навигацией и моментальной загрузкой страниц без перезагрузки.адаптивную верстку для всех устройств, формы и валидацию данных, динамические фильтры, поиск и сортировку ,личные кабинеты, корзины, избранное, подключение к backend API (Django),интерактивные элементы и анимации,темную/светлую тему, уведомления, лоадеры и многое другое.</h6> */}
                <motion.h6 className="font-jost text-stone-400 mt-5"
                 
                 initial={{ opacity: 0, x: -100 }} // невидим и сдвинут влево
                 whileInView={{ opacity: 1, x: 0 }} // плавно появляется и возвращается на место
                 viewport={{ once: true, amount: 0.3 }} // анимация запускается один раз
                 transition={{ duration: 1.2, ease: "easeOut" }} // плавность
                >
                    {t('DesignSectionTwo.ItemFive')}
                </motion.h6>
                {/* <img src={FrontendDestop} alt="logo" className="absolute left-1/2 -translate-x-1/2 design-destop z-[-1] mt-[100px]"/>
                <img src={MobileFront} alt="logo" className="absolute left-1/2 -translate-x-1/2 design-mob z-[-1] translate-y-[-200px] "/> */}
                <div className="card-box flex flex-col lg:flex-row mt-10 gap-3 items-center justify-center lg:justify-start ">
                    <img src={CardFront} loading="lazy"  alt="logo" className="transition-transform duration-300 transform hover:scale-105 active:scale-95 w-[310px] h-[200px]"/>
                    <img src={FrontCard2} loading="lazy" alt="logo" className="transition-transform duration-300 transform hover:scale-105 active:scale-95 w-[290px] h-[200px]"/>
                </div>
            </div> 
        
            {/* card-disign  2*/}

        
            {/* card-disign  3 */}
            <div className="card-tehnology flex flex-col justify-start w-[300px] lg:w-[700px] md:w-[500px] mt-[120px] relative">
                {/* <h5 className="font-extrabold text-2xl sm:text-3xl text-left font-jost mt-10 text-stone-100">Внутренняя часть наших проектов разработана <span className="italic font-light text-orange-700 text-4xl">на Python  Django одном из самых мощных, масштабируемых и надёжных фреймворков.</span></h5> */}
                <h5 className="font-extrabold text-2xl sm:text-3xl text-left font-jost mt-10 text-stone-100">{t('DesignSectionThree.item')} <span className="font-light text-orange-700 text-4xl">{t('DesignSectionThree.itemOne')}</span></h5>
                <img src={Tehnology1} loading="lazy" alt="logo" className="mt-3 w-[100px]"/>
                {/* <h6 className="font-jost text-stone-400 mt-5">Django позволяет быстро создавать сложные веб-приложения с чистой архитектурой и понятной структурой кода.Благодаря своей гибкости и масштабируемости Django подходит как для небольших проектов, так и для крупных корпоративных систем.Он включает готовые инструменты для работы с базами данных, админ-панелью, авторизацией и безопасностью.</h6> */}
                <motion.h6 
                    className="font-jost text-stone-400 mt-5"
                    initial={{ opacity: 0, x: -100 }} // невидим и сдвинут влево
                    whileInView={{ opacity: 1, x: 0 }} // плавно появляется и возвращается на место
                    viewport={{ once: true, amount: 0.3 }} // анимация запускается один раз
                    transition={{ duration: 1.2, ease: "easeOut" }} // плавность
                >
                    {t('DesignSectionThree.itemThree')}
                </motion.h6>
                {/* <img src={Backend} alt="logo" className="absolute w-full design-destop z-[-1] mt-[100px]"/>
                <img src={BackendMobile} alt="logo" className="absolute left-1/2 -translate-x-1/2 design-mob z-[-1] translate-y-[20px] "/> */}
                <div className="card-box flex flex-col lg:flex-row mt-10 gap-3 items-center justify-center lg:justify-start ">
                    <img src={BackendCardDestop } loading="lazy" alt="logo" className="transition-transform duration-300 transform hover:scale-105 active:scale-95 w-[310px] h-[200px]"/>
                    <img src={BackendCard2} loading="lazy" alt="logo" className="transition-transform duration-300 transform hover:scale-105 active:scale-95 w-[290px] h-[200px]"/>
                </div>
            </div> 
            {/* card-disign  3 */}

        </div>
    </>
    );
}
export default DesignSection;