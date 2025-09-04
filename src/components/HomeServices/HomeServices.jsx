import { useTranslation } from 'react-i18next';
import ButtonRed from '../Buttons/BunnonRed/ButtonRed';
import { motion } from "framer-motion";

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
                    <motion.h5 
                        className="text-white font-medium text-2xl"
                        initial={{ x: -100, opacity: 0 }}  
                        whileInView={{ x: 0, opacity: 1 }}    
                        viewport={{ once: true, amount: 0.3 }} 
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3  }} 

                    >
                        {t('HomeServices.description')}{' '}<span className='text-orange-700 font-light text-3xl'>{t('HomeServices.descriptionTwo')}</span>{' '}{t('HomeServices.Items')}{' '}<span className="text-orange-700 font-light text-3xl">{t('HomeServices.ItemsTwo')}{" "}</span>{t('HomeServices.ItemsText')}
                    </motion.h5>
                    {/* <h5 className="text-white font-medium text-2xl">{t('HomeServices.description')}{' '}<span className='text-orange-700 font-light text-3xl'>{t('HomeServices.descriptionTwo')}</span>{' '}{t('HomeServices.Items')}{' '}<span className="text-orange-700 font-light text-3xl">{t('HomeServices.ItemsTwo')}</span>{t('HomeServices.ItemsText')}</h5> */}
                    {/* <h5 class="text-white font-medium text-2xl">Мы предоставляем услуги по разработке translate-x-[300px] <span className='text-zinc-400 font-light text-3xl'>интернет-сайтов под ваши задачи. </span>Наш приоритет — это уникальность каждого проекта,<span className="text-zinc-400 font-light text-3xl"> неограниченный функционал и сильный дизайн,</span> который выделяет ваш бизнес среди конкурентов</h5> */}
                   <ButtonRed link="/about-mars-studio" text={t("ButtonRed.aboutPrice")} />
                   <motion.img
                    src="/image/R.svg"
                    alt="logo-card-style"
                    className="absolute translate-x-[150px] sm:translate-x-[300px] lg:translate-y-[140px] translate-y-[-40px] sm:translate-y-[60px] w-[120px] z-[-1] opacity-75"
                    initial={{ rotate: 0 }}             // стартовое положение
                    whileInView={{ rotate: 180 }}       // переворачивается на 180° при попадании в видимую область
                    viewport={{ once: true, amount: 0.5 }} // срабатывает один раз, когда 50% блока видно
                    transition={{ duration: 1.5, ease: "easeOut" , delay: 1}} // плавность вращения
                    />
                   {/* <img src="/image/R.svg" alt="logo-card-style" className='absolute translate-x-[150px] sm:translate-x-[300px] lg:translate-y-[140px] translate-y-[-40px] sm:translate-y-[60px] w-[120px] z-[-1] opacity-75'/> */}
                </div>
                <img src={logos[i18n.language] || logos.en} alt="logo-decor" className="w-[800px] px-2"/>
            </div>
        </>
    );
}

export default HomeServices;