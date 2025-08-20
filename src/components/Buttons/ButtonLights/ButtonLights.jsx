import { useTranslation } from 'react-i18next';

function ButtonLights({ link }){
    const { t } = useTranslation();
    return(
        <a href={ link } className='block hidden sm:block'><div className="flex items-center justify-center px-4 py-2 text-white rounded-full mt-[30px] font-jost font-light hover:border-red-500 border border-zinc-600" style={{width: "180px", height: "40px"}}>
            <span className="font-thin">{t('buttonLights.connection')}</span>
        </div></a>
    );
}
export default ButtonLights;