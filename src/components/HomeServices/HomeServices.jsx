import { useTranslation } from 'react-i18next';
import ButtonRed from '../Buttons/BunnonRed/ButtonRed';

function HomeServices(){

    const { t } = useTranslation();
    const { i18n }  = useTranslation();

    const logos = {
        en:"/image/servicesHome-en.svg",
        ru:"/image/servicesHome-ru.svg",
        uk:"/image/servicesHome-ua.svg"
    };


    return(
        <>
            <div className="flex lg:flex-row flex-col mt-[100px]">
                <div className="flex flex-col font-jost sm:px-10 px-5 relative">
                    <h5 class="text-white font-medium text-2xl">{t('HomeServices.description')}{' '}<span className='text-orange-700 font-light text-3xl'>{t('HomeServices.descriptionTwo')}</span>{' '}{t('HomeServices.Items')}{' '}<span className="text-orange-700 font-light text-3xl">{t('HomeServices.ItemsTwo')}</span>{t('HomeServices.ItemsText')}</h5>
                    {/* <h5 class="text-white font-medium text-2xl">Мы предоставляем услуги по разработке translate-x-[300px] <span className='text-zinc-400 font-light text-3xl'>интернет-сайтов под ваши задачи. </span>Наш приоритет — это уникальность каждого проекта,<span className="text-zinc-400 font-light text-3xl"> неограниченный функционал и сильный дизайн,</span> который выделяет ваш бизнес среди конкурентов</h5> */}
                   <ButtonRed link="/about-mars-studio" text={t("ButtonRed.aboutPrice")} />
                   <img src="/image/R.svg" alt="logo-card-style" className='absolute translate-x-[150px] sm:translate-x-[300px] lg:translate-y-[140px] translate-y-[-40px] sm:translate-y-[60px] w-[120px] z-[-1] opacity-75'/>
                </div>
                <img src={logos[i18n.language] || logos.en} alt="logo-decor" className="w-[800px] px-2"/>
            </div>
        </>
    );
}

export default HomeServices;