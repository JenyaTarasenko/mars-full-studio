import "./style.css";
import { useTranslation } from 'react-i18next';
import WorkAbout from "../../assets/image/work-about1.svg";
import WorkAbout2 from "../../assets/image/work-about2.svg";
import WorkAbout3 from "../../assets/image/work-about3.svg";
import WorkAbout4 from "../../assets/image/work-about4.svg";
import WorkAbout5 from "../../assets/image/work-about6.svg";
import WorkAbout6 from "../../assets/image/work-about5.svg";

function CardStep(){
    const { t } = useTranslation();
    return(
        <>
        <div className="flex items-center justify-center flex-col gap-3 lg:flex-row mt-[100px]">

            <div className="h-[400px] lg:w-[400px] w-[300px]  sm:w-[500px] rounded-[40px] relative flex transition-transform duration-300 ease-in-out hover:scale-105 active:scale-100 work-card">
                    {/* <h6 className="font-jost text-blue-100 font-light sm:text-2xl text-xl px-10 mt-20 absolute w-400px uppercase">Обсуждаем цели, задачи и ожидания от проекта, собираем всю необходимую информацию.</h6> */}
                    <h6 className="font-jost text-blue-100 font-light sm:text-2xl text-xl px-10 mt-20 absolute w-400px uppercase">{t('CardStep.CardOne')}</h6>
                    {/* <h6 className="font-jost text-zinc-300 font-normal text-lg px-10 mt-20 absolute w-400px mb-5 translate-y-[190px]">Встреча с клиентом</h6> */}
                    <h6 className="font-jost text-zinc-300 font-normal text-lg px-10 mt-20 absolute w-400px mb-5 translate-y-[190px]">{t('CardStep.CardOneText')}</h6>
                    <img src={WorkAbout} alt="logo-decor" className="absolute h-[300px] z-[-1] translate-x-[0] translate-y-[110px] "/>
                    <div className="flex justify-between items-center w-full mt-[300px] releteve">
                        {/* <p className="font-jost text-red-600 font-bold text-xs uppercase tracking-widest px-10">цели</p> */}
                        <p className="font-jost text-red-600 font-bold text-xs uppercase tracking-widest px-10">{t('CardStep.CardOneItem')}</p>
                        <p className="font-jost text-red-600 font-bold text-xs uppercase tracking-widest px-10">01</p>
                    </div>
            </div>

            <div className="h-[400px] w-[300px] sm:w-[500px] work-card rounded-[40px] relative flex transition-transform duration-300 ease-in-out hover:scale-105 active:scale-100 ">
                {/* <h6 className="font-jost text-blue-100 font-light sm:text-2xl text-xl px-10 mt-5 absolute w-300px uppercase translate-y-[50px] sm:translate-y-[150px]-">Создаём прототипы и определяем стиль будущего проекта.</h6> */}
                <h6 className="font-jost text-blue-100 font-light sm:text-2xl text-xl px-10 mt-5 absolute w-300px uppercase translate-y-[50px] sm:translate-y-[150px]-">{t('CardStep.CardTwo')}</h6>
                {/* <h6 className="font-jost text-zinc-300 font-normal text-lg px-10 mt-20 absolute w-200px mb-5 translate-y-[190px]">Визуальная концепция</h6> */}
                <h6 className="font-jost text-zinc-300 font-normal text-lg px-10 mt-20 absolute w-200px mb-5 translate-y-[190px]">{t('CardStep.CardTwoText')}</h6>
                <div className="flex justify-between items-center w-full mt-[300px] releteve">
                    {/* <p className="font-jost  text-red-600 font-bold text-xs uppercase tracking-widest px-10">концепция</p> */}
                    <p className="font-jost  text-red-600 font-bold text-xs uppercase tracking-widest px-10">{t('CardStep.CardTwoItem')}</p>
                    <p className="font-jost text-red-600 font-bold text-xs uppercase tracking-widest px-10">02</p>
                </div>
                <img src={WorkAbout2} alt="logo-decor" className="absolute sm:h-[300px] h-[200px] z-[-1] translate-x-[34px] sm:translate-x-[160px] translate-y-[200px] sm:translate-y-[100px]"/>
            </div>
    
        </div>

        <div className="flex items-center justify-center flex-col gap-3 lg:flex-row mt-2">
            <div className="h-[400px] w-[300px] sm:w-[500px] rounded-[40px] work-card relative flex transition-transform duration-300 ease-in-out hover:scale-105 active:scale-100 ">
            {/* <h6 className="font-jost text-blue-100 font-light sm:text-2xl text-xl px-10 mt-20 absolute w-400px uppercase">Обсуждаем цели, задачи и ожидания от проекта, собираем всю необходимую информацию.</h6> */}
            <h6 className="font-jost text-blue-100 font-light sm:text-2xl text-xl px-10 mt-20 absolute w-400px uppercase">{t('CardStep.CardThree')}</h6>
            {/* <h6 className="font-jost text-zinc-300 font-normal text-lg px-10 mt-20 absolute w-400px mb-5 translate-y-[190px]">Диалог</h6> */}
            <h6 className="font-jost text-zinc-300 font-normal text-lg px-10 mt-20 absolute w-400px mb-5 translate-y-[190px]">{t('CardStep.CardThreeText')}</h6>
            <img src={WorkAbout3 } alt="logo-decor" className="absolute sm:h-[300px] h-[200px] z-[-1] translate-x-[0] translate-y-[200px] sm:translate-y-[100px]"/>
            <div className="flex justify-between items-center w-full mt-[300px] releteve">
                {/* <p className="font-jost text-red-600 font-bold text-xs uppercase tracking-widest px-10">стратегия</p> */}
                <p className="font-jost text-red-600 font-bold text-xs uppercase tracking-widest px-10">{t('CardStep.CardThreeItem')}</p>
                <p className="font-jost text-red-600 font-bold text-xs uppercase tracking-widest px-10">03</p>
            </div>
            </div>
            <div className="h-[400px] lg:w-[400px] w-[300px] sm:w-[500px] rounded-[40px] work-card relative flex transition-transform duration-300 ease-in-out hover:scale-105 active:scale-100">
            {/* <h6 className="font-jost text-blue-100 font-light sm:text-2xl text-xl px-10 mt-20 absolute w-400px uppercase">Верстаем и реализуем фронтенд React и другие технологии</h6> */}
            <h6 className="font-jost text-blue-100 font-light sm:text-2xl text-xl px-10 mt-20 absolute w-400px uppercase">{t('CardStep.CardFour')}</h6>
            {/* <h6 className="font-jost text-zinc-300 font-normal text-lg px-10 mt-20 absolute w-400px mb-5 translate-y-[190px]">Программирование<br/>визуальной части</h6> */}
            <h6 className="font-jost text-zinc-300 font-normal text-lg px-10 mt-20 absolute w-400px mb-5 translate-y-[190px]">{t('CardStep.CardFourTextOne')}<br/>{t('CardStep.CardFourTextTwo')}</h6>
            <img src={WorkAbout4} alt="logo-decor" className="absolute sm:h-[400px] h-[200px] z-[-1] translate-x-[90px] lg:translate-x-[-1px]  translate-y-[-2px] sm:translate-y-[0px]"/>

            <div className="flex justify-between items-center w-full mt-[300px] releteve">
                {/* <p className="font-jost text-red-600 font-bold text-xs uppercase tracking-widest px-10">логика</p> */}
                <p className="font-jost text-red-600 font-bold text-xs uppercase tracking-widest px-10">{t('CardStep.CardFourItem')}</p>
                <p className="font-jost text-red-600 font-bold text-xs uppercase tracking-widest px-10">04</p>
            </div>
            </div>
        </div>

        <div class="flex items-center justify-center flex-col gap-3 lg:flex-row mt-2">
   
        <div className="h-[400px] lg:w-[400px] w-[300px]  sm:w-[500px] rounded-[40px] work-card relative flex transition-transform duration-300 ease-in-out hover:scale-105 active:scale-100 work-card">
            {/* <h6 className="font-jost text-blue-100 font-light sm:text-2xl text-xl px-10 mt-20 absolute w-400px uppercase">Настраиваем базы данных, авторизацию и логику работы Django DRF</h6> */}
            <h6 className="font-jost text-blue-100 font-light sm:text-2xl text-xl px-10 mt-20 absolute w-400px uppercase">{t('CardStep.CardFive')}</h6>
            <h6 className="font-jost text-zinc-300 font-normal text-lg px-10 mt-20 absolute w-400px mb-5 translate-y-[190px]">{t('CardStep.CardFiveTextOne')}<br />{t('CardStep.CardFiveTextTwo')}</h6>
            {/* <h6 className="font-jost text-zinc-300 font-normal text-lg px-10 mt-20 absolute w-400px mb-5 translate-y-[190px]">Программирование<br />внутренней части</h6> */}
            <img src={WorkAbout5 } alt="logo-decor" className="absolute h-[300px] z-[-1] translate-x-[0] translate-y-[100px] "/>
        
            <div className="flex justify-between items-center w-full mt-[300px] releteve">
                {/* <p className="font-jost text-red-600 font-bold text-xs uppercase tracking-widest px-10">функционал</p> */}
                <p className="font-jost text-red-600 font-bold text-xs uppercase tracking-widest px-10">{t('CardStep.CardFiveItem')}</p>
                <p className="font-jost text-red-600 font-bold text-xs uppercase tracking-widest px-10">05</p>
            </div>
        
        </div>

        <div className="h-[400px] w-[300px] sm:w-[500px] work-card rounded-[40px] relative flex transition-transform duration-300 ease-in-out hover:scale-105 active:scale-100 ">
            {/* <h6 className="font-jost text-blue-100 font-light sm:text-2xl text-xl px-10 mt-5 absolute w-300px uppercase translate-y-[50px] sm:translate-y-[150px]-">Бесплатно поддерживаем серверную часть и обеспечиваем стабильную работу сайта.</h6> */}
            <h6 className="font-jost text-blue-100 font-light sm:text-2xl text-xl px-10 mt-5 absolute w-300px uppercase translate-y-[50px] sm:translate-y-[150px]-">{t('CardStep.CardSix')}</h6>
            {/* <h6 className="font-jost text-zinc-300 font-normal text-lg px-10 mt-20 absolute w-200px mb-5 translate-y-[190px]">Бесплатная роддержка</h6> */}
            <h6 className="font-jost text-zinc-300 font-normal text-lg px-10 mt-20 absolute w-200px mb-5 translate-y-[190px]">{t('CardStep.CardSixText')}</h6>
            
            <div className="flex justify-between items-center w-full mt-[300px] releteve">
                {/* <p className="font-jost text-red-600 font-bold text-xs uppercase tracking-widest px-10">поддержка</p> */}
                <p className="font-jost text-red-600 font-bold text-xs uppercase tracking-widest px-10">{t('CardStep.CardSixItem')}</p>
                <p className="font-jost text-red-600 font-bold text-xs uppercase tracking-widest px-10">06</p>
            </div>
                <img src={WorkAbout6} alt="logo-decor" className="absolute sm:h-[170px] h-[100px]  z-[-1] translate-x-[60px] translate-y-[200px] sm:translate-y-[100px] "/>
            </div>
        </div>
        </>
    );
}

export default CardStep;