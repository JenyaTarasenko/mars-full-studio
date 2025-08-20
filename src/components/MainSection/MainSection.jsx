// import './style.css';
import { useTranslation } from 'react-i18next';
import ButtonLights from '../Buttons/ButtonLights/ButtonLights';
import ButtonSecondary from '../Buttons/ButtonSecondary/ButtonSecondary';

function MainSection(){
    const { t } = useTranslation();
    return(
    <div className="flex flex-col items-center text-white relative mt-[100px]">
        <img src="/image/main-section.png" alt="Image" className="w-full md:w-1/2  object-contain z-1" />

            <div className="flex items-center absolute top-4 rounded-full border border-gray-600 px-3 py-2 hover:border-red-500 font-jost gap-2 font-light" style={{fontSize: "14px"}}>
                <img src="/image/bast-main.svg" alt="flash-image-mars"/>
                <span className="font-medium">{t('main.solution')}</span>
            </div>

        <img src="/image/Mars-big.svg" alt="Image" className="absolute w-full md:w-1/2 object-contain z-0 mt-[100px] main-logo-big" />
        <h1 className="mt-[150px] md:w-[570px] font-extrabold px-2 text-3xl sm:text-5xl text-center font-jost">{t('main.title')}{' '}<span class="font-normal text-orange-700 text-5xl sm:text-6xl">{' '}{t('main.titlePart1')}</span>{' '}{t('main.titlePart2')}</h1> 
        <h2 className="mt-[40px] text-center font-jost text-zinc-500  md:w-[570px] transition duration-300 hover:text-shadow-[0_0_6px_rgba(255,165,0,0.7)] cursor-pointer">{t('main.description')}</h2>
        <img src="/image/krestic.svg"
        alt="mars-image-decor"
        className="absolute mt-[120px] mr-[200px]" />

        <img src="/image/krestic.svg"
        alt="mars-image-decor"
        className="absolute mt-[120px] ml-[200px]" />

        <img src="/image/krestic.svg"
        alt="mars-image-decor"
        className="absolute mt-[300px] mr-[200px]" />

        <img src="/image/krestic.svg"
        alt="mars-image-decor"
        class="absolute mt-[300px] ml-[200px]" />
        <img src="/image/krestic.svg"
        alt="mars-image-decor"
        className="absolute mt-[500px] mr-[200px]" />
        
        <img src="/image/krestic.svg"
        alt="mars-image-decor"
        className="absolute mt-[500px] ml-[200px]"/>

        <img src="/image/grai.svg"
        alt="mars-image-decor"
        className="absolute mt-[300px]"/>
 

        <img src="/image/kosmonavt.svg"
        alt="mars-image-decor"
        className="absolute mt-[150px] mr-[20px] animate-float"/>

        <div className="flex items-center justify-center  gap-3 mt-5">
            <ButtonLights />
            <ButtonSecondary />
        </div>
    </div>
    );
}
export default MainSection;