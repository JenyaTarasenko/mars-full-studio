import { useTranslation } from 'react-i18next';
import Raduga from "../../assets/image/raduga-card.svg";
import Gradient from "../../assets/image/gradient-orange.svg";
import BgCardAbout from "../../assets/image/bg-cardabout.svg";
import CardAbout3 from "../../assets/image/card-about3.svg";
import CardAbout4 from "../../assets//image/card-about4.svg"


function AboutCardAdvantages(){
    const { t } = useTranslation();
    return(
        <>
            <div className="flex items-center justify-center flex-col gap-3 lg:flex-row mt-[100px]">
                <div className="h-[400px] lg:w-[400px] w-[300px]  sm:w-[500px] bg-[#D9D9D9]/[0.04] rounded-[40px] relative flex transition-transform duration-300 ease-in-out hover:scale-105 active:scale-100">
                    {/* <h6 className="font-jost text-blue-200 font-normal text-3xl px-10 mt-20 absolute w-400px uppercase">каждый проект мы доводим до идеала</h6> */}
                    <h6 className="font-jost text-blue-200 font-normal text-3xl px-10 mt-20 absolute w-400px uppercase">{t('AboutCardAdvantages.textOne')}</h6>
                    <img src={Raduga} alt="rainbow" className="absolute h-[400px] z-[-1] lg:translate-x-[240px] translate-x-[140px] sm:translate-x-[340px] "/>
                    <img src={Gradient} alt="gradient" className="absolute translate-x-[-20px] translate-y-[160px] h-[300px] z-[-1]"/>
                    {/* <p className="font-jost text-gray-400 font-normal text-xs uppercase tracking-widest px-10 translate-y-[360px]">качество</p> */}
                    <p className="font-jost text-red-800 font-normal text-xs uppercase tracking-widest px-10 translate-y-[360px]">{t('AboutCardAdvantages.textTwo')}</p>
                </div>  
                <div className="h-[400px] w-[300px] sm:w-[500px] rounded-[40px] relative flex transition-transform duration-300 ease-in-out hover:scale-105 active:scale-100" style={{ backgroundImage: `url(${BgCardAbout})`  }}>
                    {/* <h6 className="font-jost text-rose-300 font-normal text-3xl px-10 mt-20 absolute w-300px uppercase translate-y-[50px] sm:translate-y-[150px]-">Cоздаём решения под задачи конкретного клиента, а не по шаблону</h6> */}
                    <h6 className="font-jost text-rose-300 font-normal text-3xl px-10 mt-20 absolute w-300px uppercase translate-y-[50px] sm:translate-y-[150px]-">{t('AboutCardAdvantages.item')}</h6>
                    {/* <p className="font-jost text-gray-400 font-normal text-xs uppercase tracking-widest px-10 translate-y-[30px]">решение</p> */}
                    <p className="font-jost text-red-800 font-normal text-xs uppercase tracking-widest px-10 translate-y-[30px]">{t('AboutCardAdvantages.itemTwo')}</p>
                </div>
            </div>

            <div className="flex items-center justify-center flex-col gap-3 lg:flex-row mt-2">

                <div className="h-[400px] w-[300px] sm:w-[500px] bg-[#D9D9D9]/[0.04] rounded-[40px] relative flex transition-transform duration-300 ease-in-out hover:scale-105 active:scale-100 ">
                    <img src={ CardAbout3 } alt="logo-decor" className="h-[400px] translate-x-[-5px] translate-y-[-25px] sm:translate-y-[0px] z-[-1] "/>
                    {/* <h6 className="font-jost text-gray-200 font-normal text-3xl px-10 mt-20 absolute w-300px uppercase translate-y-[50px] sm:translate-y-[150px]">используем передовые технологии, чтобы ваши проекты были на шаг впереди.</h6> */}
                    <h6 className="font-jost text-gray-200 font-normal text-3xl px-10 mt-20 absolute w-300px uppercase translate-y-[50px] sm:translate-y-[150px]">{t('AboutCardAdvantages.description')}</h6>
                    <p className="font-jost text-red-800 font-normal text-xs uppercase tracking-widest px-10 translate-y-[30px] translate-x-[-190px] sm:translate-x-[-30px]">{t('AboutCardAdvantages.descriptionTwo')}</p>
                    {/* <p className="font-jost text-gray-400 font-normal text-xs uppercase tracking-widest px-10 translate-y-[30px] translate-x-[-190px] sm:translate-x-[-30px]">Инновации</p> */}
                </div>

                <div className="h-[400px] lg:w-[400px] w-[300px]  sm:w-[500px] bg-[#D9D9D9]/[0.04] rounded-[40px] relative flex transition-transform duration-300 ease-in-out hover:scale-105 active:scale-100">
                    {/* <h6 className="font-jost text-blue-200 font-normal text-3xl px-10 mt-20 absolute w-400px uppercase">СИЛЬНЫЙ ДИЗАЙН КОТОРЫЙ ВЫДЕЛЯЕТ ВАС СРЕДИ КОНКУРЕНТОВ</h6> */}
                    <h6 className="font-jost text-orange-500 font-normal text-3xl px-10 mt-20 absolute w-400px uppercase">{t('AboutCardAdvantages.title')}</h6>
                    <img src={CardAbout4 } alt="logo-decor" className="absolute h-[400px] z-[-1] translate-x-[-1px] lg:translate-x-[5px] translate-y-[50px] sm:translate-y-[0px]"/>
                    {/* <p className="font-jost text-gray-400 font-normal text-xs uppercase tracking-widest px-10 translate-y-[360px]">качество</p> */}
                    <p className="font-jost text-red-800 font-normal text-xs uppercase tracking-widest px-10 translate-y-[360px]">{t('AboutCardAdvantages.titleTwo')}</p>
                </div>
            </div>  
        </>
    );
}

export default AboutCardAdvantages;