import { useTranslation } from 'react-i18next';
import AbotRu from "../../assets/image/about-ru.svg";
import AboutEn from "../../assets/image/about-en.svg";
import AboutUk from "../../assets/image/about-uk.svg";


function ImageStep(){
    const { i18n }  = useTranslation();


    const logos = {
        en:AboutEn,
        ru:AbotRu,
        uk:AboutUk
        // en:"/image/about-en.svg",
        // ru:"/image/about-ru.svg",
        // uk:"/image/about-uk.svg"
    };

    return(
        <div className="flex items-center justify-center flex-col relative mt-20">
            <img src={logos[i18n.language] || logos.en}/>
        </div>
    );
}    
export default ImageStep;