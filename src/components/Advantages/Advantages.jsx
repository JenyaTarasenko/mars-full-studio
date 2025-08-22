import './style.css';
import { useTranslation } from 'react-i18next';


function Advantages(){
    const { t } = useTranslation();
    return(
    <>
    <div className="flex items-center justify-center mt-20 advantages-destop relative">
        <img src="/image/crug-destop.svg" alt="Логотип" className="object-contain z-[1]" />
    
        <div className="absolute font-jost w-[200px] text-white translate-x-[-400px] translate-y-[-200px] text-sm">
            <h4>{t('advantage.solution')}</h4> 
        </div>

        <h5 className="absolute font-jost w-[100px] text-white mt-[150px] mr-[670px] text-3xl text-center pulse-glow flex justify-center items-center">
            {t('advantage.description')}
        </h5>

        <div className="absolute font-jost w-[200px] text-white mt-[-400px] ml-[700px]">
            <h4 className="text-[14px]">{t('advantage.develop')}</h4>
        </div>

        <h5 className="absolute font-jost w-[100px] text-white mt-[150px] ml-[690px] text-3xl pulse-glow flex justify-center items-center">
            {t('advantage.individual')}
        </h5>

        <div className="absolute font-jost w-[200px] text-white mt-[-520px]">
            <h4 className="text-[14px]">{t('advantage.functional')}</h4>
        </div>

        <h5 className="absolute font-jost w-[300px] text-white mt-[150px] ml-[140px] text-3xl pulse-glow flex justify-center items-center">
            {t('advantage.full')}
        </h5>
    </div>

{/*  
        <div className="flex items-center justify-center mt-20 advantages-destop">

            <img src="/image/crug-destop.svg" alt="Логотип" className="object-contain z-[1] relative" />
       
            <div className="absolute font-jost w-[200px] text-white translate-x-[-400px] translate-y-[-200px]  text-sm">
                <h4>{t('advantage.solution')}</h4> 
            </div>
            <h5 className="absolute font-jost w-[100px] text-white mt-[150px] mr-[670px] text-3xl text-center pulse-glow flex justify-center items-center" style={{textAlign: "center"}}>{t('advantage.description')}</h5>
            <div className="absolute font-jost w-[200px] text-white mt-[-400px] ml-[700px]">
                <h4 style={{fontSize:"14px"}}>{t('advantage.develop')}</h4>
            </div>
            <h5 className="absolute font-jost w-[100px] text-white mt-[150px] ml-[690px] text-3xl pulse-glow flex justify-center items-center" style={{textAlign: "center"}}>{t('advantage.individual')}</h5>
            <div className="absolute font-jost w-[200px] text-white mt-[-520px]">
                <h4 style={{fontSize:"14px"}}>{t('advantage.functional')}</h4>
            </div>
            <h5 className="absolute font-jost w-[300px]  text-white mt-[150px] ml-[30px] text-3xl pulse-glow flex justify-center items-center" style={{textAlign: "center"}}>{t('advantage.full')}</h5>
        </div> */}
      
        <div className="flex items-center justify-center mt-20 advantages-mobile flex-col">    
            <div>
                <img src="/image/crug-left.svg" alt="Логотип" className="object-contain z-1 relative" />
                    <div className="absolute font-jost w-[200px] text-white mt-[-450px] ml-[50px]">
                    <h4 style={{fontSize:"14px"}}>{t('advantage.solution')}</h4>
                </div>
                <h5 className="absolute font-jost w-[100px] text-white mt-[-180px]  ml-[100px] text-3xl text-center pulse-glow" style={{textAlign:"center"}}>{t('advantage.description')}</h5>
            </div>

            <div className="mt-[100px]">
                <img src="/image/crug-center.svg" alt="Логотип" class="object-contain z-1 relative" />
                <div className="absolute font-jost w-[200px] text-white mt-[-430px] ml-[80px]">
                    <h4 style={{fontSize:"14px"}}>{t('advantage.develop')}</h4>
                </div>
                <h5 className="absolute font-jost w-[100px] text-white mt-[-200px] ml-[100px] text-3xl text-center pulse-glow flex justify-center items-center" style={{textAlign:"center"}}>{t('advantage.full')}</h5>
            </div>

            <div className="mt-[100px]">
                <img src="/image/crug-right.svg" alt="Логотип" className="object-contain z-1 relative" />
                <div className="absolute font-jost w-[200px] text-white mt-[-480px] ml-[80px]">
                    <h4 style={{fontSize:"14px"}}>{t('advantage.functional')}</h4>
                </div>
                <h5 className="absolute font-jost w-[100px] text-white mt-[-200px]  ml-[100px] text-3xl text-center pulse-glow flex justify-center items-center" style={{textAlign:"center"}}>{t('advantage.individual')}</h5>
            </div>
        </div>
  
    </>
    );
}
export default Advantages;