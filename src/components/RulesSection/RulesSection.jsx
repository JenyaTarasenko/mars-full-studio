import { useTranslation } from 'react-i18next';
import StrelaYellow from "../../assets/image/strelayellow.svg";
// import Cosmic from "../../assets/image/cosmonavt3.png";
import StrellaGreen from "../../assets/image/strelagreen.svg";
import StrelaRed from "../../assets/image/strelared.svg";


function RulesSection(){
    const { t } = useTranslation();
    return(
        <div className="flex flex-col lg:flex-row lg:items-start items-center">
            <div className="flex-[1] items-start justify-start w-full h-full">
                <div className="w-full h-full flex lg:items-start lg:justify-start items-center sm:px-20 px-5 flex-col mb-20">
                <h6 className="font-jost font-extrabold text-white sm:text-5xl text-3xl ">{t('RulesSection.Text')}</h6>
                    {/* <h6 className="font-jost font-extrabold text-white sm:text-5xl text-3xl ">Правила которые мы придерживаемся</h6> */}
                    {/* <p className="font-jost text-zinc-200  text-sm sm:text-base md:text-lg mt-5">Наша студия разрабатывает уникальные веб-интерфейсы — от простых решений до сложных и высоконагруженных проектов. Мы создаём сильный дизайн, удобные интерфейсы и надёжные интернет-магазины,корпоративные и многостраничные сайты которые помогают бизнесу выделяться и расти.</p> */}
                    <p className="font-jost text-zinc-200  text-sm sm:text-base md:text-lg mt-10">{t('RulesSection.TextOne')}</p>
                    <p className="font-jost text-zinc-200  text-sm sm:text-base md:text-lg mt-5">{t('RulesSection.TextTwo')}</p>
                    {/* <p className="font-jost text-zinc-200  text-sm sm:text-base md:text-lg mt-5">Мы делаем дизайн, который невозможно перепутать,только индивидуальный подход и разработка с нуля под ваш бизнес, чтобы сайт стал уникальным инструментом, а не просто страницей в интернете.Наши сайты сиановятся уникальными неповторимыми решениями</p> */}
                </div>
            </div>
            <div className="flex-[2] flex justify-center mt-0 lg:mt-10">
                <div className="w-full h-full flex items-start justify-start flex-col gap-3 relative">
                    {/* <img src={Cosmic} alt="astronaut-mars"  className="absolute w-[150px] animate-float mt-[300px]"/> */}
                    <div className="detail-card w-[290px] h-[400px]  sm:w-[590px] sm:h-[320px]  border border-solid border-orange-600 rounded-[200px] flex items-center justify-center flex-col transform transition-transform duration-300 hover:scale-105">
                        <img src={StrelaYellow} loading="lazy" alt="arrow" className="sm:mt-5 mt-0"/>
                        <div className="flex justify-center items-center  flex-row gap-5">
                        <h6 className="font-jost text-zinc-50 sm:text-5xl text-2xl text-lg text-right mt-10">{t('RulesSection.CardItem')}<br/>{t('RulesSection.CardItemText')}</h6>
                            {/* <h6 className="font-jost text-zinc-50 sm:text-5xl text-2xl text-lg text-right mt-10">Идея<br/>заказчика</h6> */}
                            <p className="font-jost text-zinc-400  text-left sm:text-lg text-font-light">{t('RulesSection.CardItemTwo')}<br />{t('RulesSection.CardItemTwoText')}</p>
                            {/* <p className="font-jost text-zinc-400  text-left sm:text-lg text-font-light">Принимаем<br />безумные идеи</p> */}
                        </div>
                    </div>
                    <div className="detail-card w-[290px] h-[400px]  sm:w-[590px] sm:h-[320px]  border border-solid border-orange-600 rounded-[200px] flex items-center justify-center flex-col transform transition-transform duration-300 hover:scale-105">
                        <img src={StrelaRed} loading="lazy" alt="arrow"  className="sm:mt-5 mt-0"/>
                        <div className="flex justify-center items-center  flex-row gap-5">
                        <h6 className="font-jost text-zinc-50 sm:text-5xl text-2xl text-lg text-right mt-10">{t('RulesSection.CardItemThree')}<br />{t('RulesSection.CardItemThreeText')}</h6>
                            {/* <h6 className="font-jost text-zinc-50 sm:text-5xl text-2xl text-lg text-right mt-10">Наша<br />реализация</h6> */}
                            <p className="font-jost text-zinc-400  text-left sm:text-lg text-font-light">{t('RulesSection.CardItemFour')}<br />{t('RulesSection.CardItemFourText')}</p>
                            {/* <p className="font-jost text-zinc-400  text-left sm:text-lg text-font-light">Уникальный<br />дизайн адаптивность</p> */}
                        </div>
                    </div>
                    <div className="detail-card w-[290px] h-[400px]  sm:w-[590px] sm:h-[320px]  border border-solid border-orange-600 rounded-[200px] flex items-center justify-center flex-col transform transition-transform duration-300 hover:scale-105">
                        <img src={StrellaGreen} loading="lazy"  alt="arrow"  className="sm:mt-5 mt-0"/>
                        <div className="flex justify-center items-center  flex-row gap-5">
                        <h6 className="font-jost text-zinc-50 sm:text-5xl text-2xl text-lg text-right mt-10">{t('RulesSection.CardItemFive')}<br/>{t('RulesSection.CardItemFiveText')}</h6>
                            {/* <h6 className="font-jost text-zinc-50 sm:text-5xl text-2xl text-lg text-right mt-10">Современные<br/> технологии</h6> */}
                            <p className="font-jost text-zinc-400  text-left sm:text-lg text-font-light">{t('RulesSection.CardItemSix')}<br/>{t('RulesSection.CardItemSixOne')}<br />{t('RulesSection.CardItemSixTwo')}</p>
                            {/* <p className="font-jost text-zinc-400  text-left sm:text-lg text-font-light">Реализуем<br/>с помощью новейших<br />технологий</p> */}
                        </div>
                    </div>
                
                </div>
            </div>
    </div>
    );
}
export default RulesSection;