import { useTranslation } from 'react-i18next';

function Footer(){
    const { t } = useTranslation();

    return(
        <>
            <footer className="flex items-center justify-center flex-col mt-[300px] sm:mt-[200px]">
            <img src="/image/footer.svg" alt="logo-mars-studio" class="w-full  object-contain mt-[400px]"/>
            </footer>
        </>
    )
}
export default Footer;