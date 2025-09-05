import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

function AboutTeam({ link }){
    const { t } = useTranslation();

    return(
        <>
            <div className="flex items-center justify-center flex-col gap-3 lg:flex-row mt-20">
                <img src="/image/Team1.png" alt="designer" className="w-[300px]"/>
                <div className="flex flex-col items-center justify-center relative">
                    <motion.h6 
                        className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px]"
                        initial={{ opacity: 0, x: 50 }}       // изначально смещён вправо и невидимый
                        whileInView={{ opacity: 1, x: 0 }}    // появляется и возвращается на место
                        viewport={{ once: true, amount: 0.5 }} // срабатывает один раз при попадании в экран
                        transition={{ duration: 1.5, ease: "easeOut" }} // плавность
                    >
                    {t('AboutTeam.DesignerText')}
                    </motion.h6>
                    {/* <h6 className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px]">Веб-дизайнер нашей студии разрабатывает интерфейсы, которые сочетают в себе эстетику, функциональность и современные технологические подходы. Каждый проект получает индивидуальный стиль, благодаря которому ваш сайт или приложение станет удобным, ярким и узнаваемым среди конкурентов.</h6> */}
                    {/* <h6 className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px] mt-10">Создание современные интерфейсы, которые соответствуют актуальным трендам и используют новейшие технологии в дизайне. Его работа делает ваши сайты и приложения уникальными, удобными и запоминающимися, выделяя их среди множества однотипных решений.</h6> */}
                    <motion.h6 
                        className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px] mt-10"
                        initial={{ opacity: 0, x: 50 }}       // изначально смещён вправо и невидимый
                        whileInView={{ opacity: 1, x: 0 }}    // появляется и возвращается на место
                        viewport={{ once: true, amount: 0.5 }} // срабатывает один раз при попадании в экран
                        transition={{ duration: 1.5, ease: "easeOut" }} // плавность
                    >
                    {t('AboutTeam.DesignerTextTwo')}
                    </motion.h6>
                    <img src="/image/telefon-team.png" alt="logo-decor" className="h-[400px] absolute z-[-1] opacity-70 translate-y-[100px] sm:translate-y-[0]"/>
                </div>
            </div>

            <div class="flex items-center justify-center flex-col gap-3 lg:flex-col-reverse mt-[150px]">
                <div className="flex flex-col items-center justify-center relative">
                    <motion.h6 
                    className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px]"
                    initial={{ opacity: 0, y: 20 }}        // изначально ниже и невидимый
                    whileInView={{ opacity: 1, y: 0 }}     // поднимается и проявляется
                    viewport={{ once: true, amount: 0.5 }} // срабатывает один раз при попадании в экран
                    transition={{ duration: 1.5, ease: "easeOut" }} // плавность
                    >
                    {t('AboutTeam.FrontendText')}
                    </motion.h6>
                    {/* <h6 className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px]">Наш фронт-энд разработчик создает пользовательские интерфейсы, учитывая все новейшие технологии и актуальные тенденции в фронт-энд разработке. Его решения делают каждый интерфейс уникальным, удобным в использовании и легко масштабируемым. В креативной веб-студии он превращает идеи в интерактивные, неповторимые цифровые продукты, которые выделяются среди конкурентов и дарят пользователям незабываемый опыт.</h6> */}
                    {/* <h6 className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px] mt-10">Mars студия - разрабатывает веб интерфейсы, где удобство использования сочетается с современным дизайном, а каждый проект становится инструментом роста и успеха вашего бизнеса.</h6> */}
                    <motion.h6 
                        className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px] mt-10"
                        initial={{ opacity: 0, y: 20 }}        // изначально ниже и невидимый
                        whileInView={{ opacity: 1, y: 0 }}     // поднимается и проявляется
                        viewport={{ once: true, amount: 0.5 }} // срабатывает один раз при попадании в экран
                        transition={{ duration: 1.5, ease: "easeOut" }} // плавность
                    >
                        {t('AboutTeam.FrontendTextTwo')}
                    </motion.h6>
                    <img src="/image/team-front2.png" alt="logo-decor" className="h-[300px] absolute z-[-1] opacity-70 translate-y-[0]  sm:translate-x-[-150px] translate-x-[-20px]"/>
                </div>
                <img src="/image/front-team.png" alt="logo-decor" className="w-[300px]"/>
            </div>
            
            <div className="flex items-center justify-center flex-col gap-3 lg:flex-row mt-20">
                <img src="/image/team-backend.png" alt="logo-decor" className="w-[300px]"/>
                <div className="flex flex-col items-center justify-center relative">
                    <motion.h6 
                        className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px]"
                        initial={{ opacity: 0, x: 50 }}       // изначально смещён вправо и невидимый
                        whileInView={{ opacity: 1, x: 0 }}    // появляется и возвращается на место
                        viewport={{ once: true, amount: 0.5 }} // срабатывает один раз при попадании в экран
                        transition={{ duration: 1.5, ease: "easeOut" }} // плавность
                    >
                    {t('AboutTeam.BackendText')}
                    </motion.h6>
                    {/* <h6 className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px]">Бэкэнд-разработка — это одна из самых важных частей сайта. Она невидима для глаз пользователя, но именно на ней держится весь ресурс. Бэкэнд обеспечивает защиту, функционал, масштабируемость, взаимодействие и скорость работы сайта. Это та самая «магия», которая делает цифровой продукт надежным, эффективным и готовым к росту вместе с вашим бизнесом.</h6> */}
                    {/* <h6 className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px] mt-10">Команда Mars использует передовые технологии для обеспечения безопасности, быстрой загрузки, высокой скорости работы и расширенного функционала веб-ресурсов. Мы создаём сайты и приложения, которые надежны, эффективны и готовы к масштабированию, обеспечивая пользователям удобство и комфорт на любом устройстве</h6> */}
                    <motion.h6 
                        className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px] mt-10"
                        initial={{ opacity: 0, x: 50 }}       // изначально смещён вправо и невидимый
                        whileInView={{ opacity: 1, x: 0 }}    // появляется и возвращается на место
                        viewport={{ once: true, amount: 0.5 }} // срабатывает один раз при попадании в экран
                        transition={{ duration: 1.5, ease: "easeOut" }} // плавность
                    >
                    {t('AboutTeam.BackendTextTwo')}
                    </motion.h6>
                    <img src="/image/team-backend2.png" alt="logo-decor" className="h-[400px] absolute z-[-1] opacity-70 translate-y-[-20px] sm:translate-x-[150px] translate-x-[0] "/>
                </div>
            </div>
        </>
    );
}
export default AboutTeam;