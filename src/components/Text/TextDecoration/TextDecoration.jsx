    import { useTranslation } from 'react-i18next';
    import TextMars from "../../../assets/image/text-mars.svg";


    function TextDecoration({mainKey}){
        const { t } = useTranslation();

        return(
            <div className="flex items-center flex-col gap-3 ml-5 mt-[150px] justify-start">
                <div className="flex flex-row gap-5">
                    <h6 className="font-jost text-zinc-50 sm:text-7xl text-5xl">{t('textDecoration.default')}</h6> 
                    {/* <img src="/image/text-mars.svg" alt="logo-decor" className="animate-spin-slow"/> */}
                    <img src={TextMars} alt="logo-decor" className="animate-spin-slow"/>
                </div>
                <span className="italic sm:text-6xl text-4xl translate-x-[-70px] translate-y-[-35px]" style={{color:'#CE664D'}}>{t(`textDecoration.${mainKey}`)}</span>
            </div>
        );
    }
    export default TextDecoration;