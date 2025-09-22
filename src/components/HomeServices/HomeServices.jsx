import { useTranslation } from 'react-i18next';
import ButtonRed from '../Buttons/BunnonRed/ButtonRed';
import { motion } from "framer-motion";
import servicesHomeRu from '../../assets/image/servicesHome-ru.svg';
import servicesHomeEn from '../../assets/image/servicesHome-en.svg';
import servicesHomeUa from '../../assets/image/servicesHome-ua.svg';



function HomeServices(){

    const { t } = useTranslation();
    const { i18n }  = useTranslation();

    const logos = {
        en:servicesHomeEn,
        uk:servicesHomeUa,
        ru:servicesHomeRu,
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
                
                </div>
                <img src={logos[i18n.language] || logos.en} alt="logo-decor" className="w-[800px] px-2"/>
            </div>
        </>
    );
}

export default HomeServices;