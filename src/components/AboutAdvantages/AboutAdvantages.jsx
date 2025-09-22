import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import Aboutastro from "../../assets/image/aboutastro.png";
import AboutText from "../../assets/image/about-text.svg";

import AboutText2 from "../../assets/image/about-text2svg.svg";

function AboutAdvantages(){
    const { t } = useTranslation();


    return(
        <>
            <div className="flex items-center justify-center flex-col lg:flex-row mt-[700px] lg:mt-[200px]">
                <img src={Aboutastro} alt="astronaut" className="h-[400px] lg:translate-x-[-150px] translate-x-[0px] z-[-1] sm:w-[300px] opacity-60"/>
                <div className="flex flex-col font-jost  font-normal text-left w-[300px] relative">
                  
                    {/* <h5 className="font-jost text-xl text-blue-200 px-5">Abot studio</h5> */}
                    {/* <h6 className="font-jost text-sm sm:w-[500px] w-[300px] px-5 text-zinc-100 mt-10">Наша команда имеет многолетний опыт в разработке интернет-сайтов различной сложности и функциональности — от простых одностраничников до полноценных веб-ресурсов с уникальным дизайном и продуманной структурой.Мы не используем шаблоны и типовые решения — каждый проект индивидуален и создаётся с нуля, под задачи конкретного клиента.Наши сайты не только визуально привлекательны, но и удобны в использовании, быстро загружаются, адаптированы под все устройства и соответствуют современным стандартам веб-разработки.Мы применяем лучшие практики UX/UI, чистый код и надёжные технологии, чтобы ваш сайт работал стабильно, был заметен в поиске и помогал развивать бизнес онлайн.</h6> */}
                    <motion.h6 
                        className="font-jost text-sm sm:w-[500px] w-[300px] px-5 text-zinc-100 mt-10"
                        initial={{ opacity: 0, x: 50 }}       // изначально смещён вправо и невидимый
                        whileInView={{ opacity: 1, x: 0 }}    // возвращается на место и проявляется
                        viewport={{ once: true, amount: 0.5 }} // срабатывает один раз при попадании в экран
                        transition={{ duration: 1.5, ease: "easeOut" }} // плавность
                    >
                    {t('AboutAdvantages.text')}
                    </motion.h6>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-[100px]">
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
                        <img src={AboutText} alt="logo-decor" className="w-[300px] transform transition-transform duration-300 hover:rotate-[-5deg]  active:rotate-0 sm:w-[500px]"/>
                        {/* <h6 className="font-jost text-sm sm:w-[500px] w-[300px] px-5 text-zinc-100 mt-10">Каждый наш проект уникален: мы не просто разрабатываем сайты, мы создаем эффективные бизнес-решения, продуманные стратегии и цифровые продукты, которые выделяют вас среди конкурентов.Наша цель — не просто присутствие в интернете, а реальный результат: рост узнаваемости, привлечение клиентов и закрепление вашей позиции на рынке. Мы анализируем ваш бизнес, понимаем аудиторию и строим индивидуальные решения, которые помогают завоевать нишу и усилить конкурентные преимущества.</h6> */}
                        <motion.h6 
                        className="font-jost text-sm sm:w-[500px] w-[300px] px-5 text-zinc-100 mt-10"
                            initial={{ opacity: 0, x: 50 }}       // изначально смещён вправо и невидимый
                            whileInView={{ opacity: 1, x: 0 }}    // возвращается на место и проявляется
                            viewport={{ once: true, amount: 0.5 }} // срабатывает один раз при попадании в экран
                            transition={{ duration: 1.5, ease: "easeOut" }} // плавность
                        >
                        {t('AboutAdvantages.description')}
                        </motion.h6>
                      
                    </div>
                    <div className="flex flex-row flex-col lg:flex-row  gap-10 items-center justify-center">
                        <div className="flex flex-col  gap-10 relative">
                        <motion.h6 
                            className="font-jost text-sm sm:w-[500px] w-[300px] px-5 text-zinc-100 mt-10"
                            initial={{ opacity: 0, x: -50 }}       // изначально смещён влево и невидимый
                            whileInView={{ opacity: 1, x: 0 }}     // появляется и возвращается на место
                            viewport={{ once: true, amount: 0.5 }} // срабатывает один раз, когда 50% блока видно
                            transition={{ duration: 1.5, ease: "easeOut" }} // плавность анимации
                        >
                        {t('AboutAdvantages.item')}
                        </motion.h6>
                       
                            {/* <h6 className="font-jost text-sm sm:w-[500px] w-[300px] px-5 text-zinc-100 mt-10">Наши сайты легко масштабируются и не ограничены в функционале — они растут вместе с вашим бизнесом. Мы ориентируемся на результат: рост клиентов, повышение узнаваемости и усиление конкурентных преимуществ.Наша студия идет в ногу с современными технологиями, постоянно изучает новинки в дизайне и программировании, используя инновационные инструменты, которые помогают создавать эффективные и современные решения.С нами ваш проект — это не просто веб-ресурс, а инструмент роста и развития бизнеса.</h6> */}
                        </div>
                        <img src={AboutText2} alt="logo-decor" className="h-[500px] transform transition-transform duration-300 hover:rotate-[-5deg]  active:rotate-0 "/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AboutAdvantages;