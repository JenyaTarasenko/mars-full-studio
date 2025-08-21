    import { useTranslation } from 'react-i18next';


    function TextDecoration(){
        const { t } = useTranslation();

        return(
            <div className="section-text-decor flex items-center flex-row gap-3 ml-5 mt-[50px]">
                <h6 className="font-jost text-zinc-50 text-sm">НАШИ <span className="italic text-xl" style={{color:'#CE664D'}}>цены</span></h6>
                <img src="/image/text-mars.svg" alt="logo-decor" className="animate-spin-slow"/>
            </div>
        ):
    }
    export default TextDecoration;