import { useTranslation } from 'react-i18next';
import button from "../../../assets/image/button.svg";
import strelka from "../../../assets/image/strelka.svg"

    function ButtonMain({ link }){
        const { t } = useTranslation();
        const telegramLink = "https://t.me/jenyatarsenko";

        return(
            // <a href={ link }><button className="flex items-center justify-center px-4 py-2 text-white rounded-full mt-[30px] font-jost font-light hover:hover:border-red-500 border border-zinc-600" style={{width: "180px", height: "40px"}}>
            //     <span className="font-thin">{t('buttonSecondary.projectsAll')}</span>
            // </button></a>
            <a href={telegramLink}
            target="_blank"      // открытие в новой вкладке
            rel="noopener noreferrer" 
            ><div className="flex items-center justify-center relative mt-[400px] transition-transform duration-300 transform hover:scale-105 active:scale-102 ">
                <div className="button-section flex items-center justify-center ">
                    <img src={button} alt="logo-style" className="animate-spin-slow absolute mt-[-300px]" />
                    <div className="flex flex-col gap-2 mt-[-300px] justify-center items-center">
                        {/* <span className="font-jost text-xl text-blue-200">Заказать</span> */}
                        <span className="font-jost text-xl text-blue-200">{t('buttonMain.order')}</span>
                        <img src={strelka} alt="logo-style" className="w-[78px] h-[29px]" />
                    </div>
                </div>
            </div> </a>
          
        );
    }
    export default ButtonMain;