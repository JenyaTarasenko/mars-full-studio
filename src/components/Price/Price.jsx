import './style.css';
import { useTranslation } from 'react-i18next';
import Astric from "../../assets/image/astric.svg";
import ElipsCenter from "../../assets/image/elips-center.svg";
import ElipsLeft from "../../assets/image/elips-left.svg";
import ElipsRight from "../../assets/image/elips-right.svg";
import ElipsMobile from "../../assets/image/elips-mobile.svg";


function Price(){
    const { t } = useTranslation();
    return(
        <>
            <div id="price" className="flex items-center justify-center relative section-price-elips-destop flex-row">
            <img src={Astric}  className="absolute mt-[200px] w-[200px] animate-float" />
            {/* <img src="/image/astric.svg" className="absolute mt-[200px] w-[200px] animate-float" /> */}
            
                <div className="flex items-center justify-center">
                    
                    <img src={ElipsCenter} className="absolute" style={{marginTop:"820px"}} />
                    <div className="flex items-center  flex-col justify-center absolute translate-y-[400px] gap-3">

                        <h5 className="font-jost text-6xl italic" style={{color:"#FF3100", fontWeight:"900"}}><span style={{fontSize:"16px", fontWeight:"400"}}>{t('price.multiPageItem')}{" "}</span> 300 $</h5>
                        {/* <h5 className="font-jost text-6xl italic" style={{color:"#FF3100", fontWeight:"900"}}>от 300 $</h5> */}
                        {/* <h6 className="font-jost text-4xl text-white font-bold">Многостраничные</h6> */}
                        <h6 className="font-jost text-4xl text-blue-200 font-light ">{t('price.multiPage')}</h6>
                    </div>
                </div>
            
                <div className="flex items-center justify-center">
                    <img src={ElipsLeft} className="absolute mr-[600px]" style={{marginTop:"820px"}} />
                <div className="flex items-center  flex-col justify-center absolute translate-y-[400px] translate-x-[300px] gap-3">
                    {/* <h5 className="font-jost text-4xl italic" style={{color:"#FF3100", fontWeight:"900"}}>от 400 $</h5> */}
                        <h5 className="font-jost text-4xl italic" style={{color:"#FF3100", fontWeight:"900"}}><span style={{fontSize:"16px", fontWeight:"400"}}>{t('price.multiPageItem')}{" "}</span>400 $</h5>

                    {/* <h6 className="font-jost text-2xl text-white font-bold">Интернет магазины</h6> */}
                    <h6 className="font-jost text-2xl text-blue-200 font-light">{t('price.magazin')}</h6>
                </div>
            </div>
            
            <div className="flex items-center justify-center">
                <img src={ElipsRight} className="absolute ml-[600px]" style={{marginTop:"820px"}} />
            
                <div className="flex items-center  flex-col justify-center absolute translate-y-[400px] translate-x-[-300px] gap-3">
                    <h5 className="font-jost text-4xl italic" style={{color:"#FF3100", fontWeight:"900"}}><span style={{fontSize:"16px", fontWeight:"400"}}>{t('price.multiPageItem')}</span>100 $</h5>
                    {/* <h5 className="font-jost text-4xl italic" style={{color:"#FF3100", fontWeight:"900"}}>{t('price.landingPageItem')}</h5> */}
                    {/* <h6 className="font-jost text-2xl text-white font-bold">Landing Page</h6> */}
                    <h6 className="font-jost text-2xl text-blue-200 font-light">{t('price.landingPage')}</h6>
                </div>
                </div>

            </div>
            <div className="flex items-center justify-center section-price-elips-mobile flex-col relative mt-[200px]">

                <div className="flex items-center justify-center">
                    <img src={ElipsLeft} className=" w-[300px]" />

                    <div className="flex items-center  flex-col justify-center absolute translate-y-[10px] gap-3">
                    <h5 className="font-jost text-4xl sm:text-3xl italic" style={{color:"#FF3100", fontWeight:900}}>от 100 $</h5>
                    <h6 className="font-jost text-lg  sm:text-2xl  text-blue-200 font-light">{t('price.landingPage')}</h6>
                    </div>
                    <img src={Astric} className="absolute mt-[-200px] w-[200px] animate-float" />
                </div>
            
                <div className="flex items-center justify-center mt-[10px]">
                    <img src={ElipsRight}  className="w-[300px]" />

                    <div className="flex items-center  flex-col justify-center absolute translate-y-[10px] gap-3">
                        <h5 className="font-jost text-4xl sm:text-3xl italic" style={{color:"#FF3100", fontWeight:900}}>от 400 $</h5>
                        <h6 className="font-jost text-lg  sm:text-2xl  text-blue-200 font-light">{t('price.magazin')}</h6>
                    </div>
                </div>
            
                <div className="flex items-center justify-center mt-[50px]">
                    <img src={ ElipsMobile } className="w-[300px]" />
                    <div className="flex items-center  flex-col justify-center absolute translate-y-[10px] gap-3">
                        <h5 className="font-jost text-4xl sm:text-3xl italic" style={{color:"#FF3100", fontWeight:900}}>от 300 $</h5>
                        <h6 className="font-jost text-lg  sm:text-2xl  text-blue-200 font-light">{t('price.multiPage')}</h6>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Price;  