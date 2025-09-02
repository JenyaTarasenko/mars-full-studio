import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

function ButtonRed({ link, text}){
    const { t } = useTranslation();
    return(
        <Link to={ link } className='block hidden sm:block'>
            <div className="flex items-center justify-center px-5 py-2 text-white rounded-full mt-[30px]  hover:border-red-500 border border-red-700" style={{width: "180px", height: "40px"}}>
                <span className="font-normal">{text ? text:t('ButtonRed.text')}</span>
            </div>
        </Link>
    );
}
export default ButtonRed;