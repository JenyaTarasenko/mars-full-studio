import { useTranslation } from 'react-i18next';

function Footer(){
    const { t } = useTranslation();

    return(
        <>
            <footer className="flex items-center justify-center flex-col sm:mt-[100px]">
                <img src="/image/footer.svg" alt="logo-mars-studio" className="w-full  object-contain mt-[400px]"/>
            </footer>
        </>
    )
}
export default Footer;