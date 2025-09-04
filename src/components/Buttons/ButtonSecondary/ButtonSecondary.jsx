import { useTranslation } from 'react-i18next';

function ButtonSecondary({ link }){
    const { t } = useTranslation();
    return(
        <a href={ link }><button className="flex items-center justify-center px-4 py-2 text-white rounded-full mt-[30px] font-jost font-light hover:hover:border-red-500 border border-zinc-600" style={{width: "180px", height: "40px"}}>
            <span className="font-normal">{t('buttonSecondary.projectsAll')}</span>
        </button></a>
    );
}
export default ButtonSecondary