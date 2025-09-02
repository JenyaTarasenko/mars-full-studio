import { useTranslation } from 'react-i18next';

function AboutTeam({ link }){
    const { t } = useTranslation();

    return(
        <>
            <div className="flex items-center justify-center flex-col gap-3 lg:flex-row mt-20">
                <img src="/image/Team1.png" alt="logo-decor" className="w-[300px]"/>
                <div className="flex flex-col items-center justify-center releteve">
                <h6 className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px]">{t('AboutTeam.DesignerText')}</h6>
                    {/* <h6 className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px]">Веб-дизайнер нашей студии разрабатывает интерфейсы, которые сочетают в себе эстетику, функциональность и современные технологические подходы. Каждый проект получает индивидуальный стиль, благодаря которому ваш сайт или приложение станет удобным, ярким и узнаваемым среди конкурентов.</h6> */}
                    {/* <h6 className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px] mt-10">Создание современные интерфейсы, которые соответствуют актуальным трендам и используют новейшие технологии в дизайне. Его работа делает ваши сайты и приложения уникальными, удобными и запоминающимися, выделяя их среди множества однотипных решений.</h6> */}
                    <h6 className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px] mt-10">{t('AboutTeam.DesignerTextTwo')}</h6>
                    <img src="/image/telefon-team.png" alt="logo-decor" className="h-[400px] absolute z-[-1] opacity-70 translate-y-[100px] sm:translate-y-[0]"/>
                </div>
            </div>

            <div class="flex items-center justify-center flex-col gap-3 lg:flex-col-reverse mt-[150px]">
                <div className="flex flex-col items-center justify-center releteve">
                <h6 className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px]">{t('AboutTeam.FrontendText')}</h6>
                    {/* <h6 className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px]">Наш фронт-энд разработчик создает пользовательские интерфейсы, учитывая все новейшие технологии и актуальные тенденции в фронт-энд разработке. Его решения делают каждый интерфейс уникальным, удобным в использовании и легко масштабируемым. В креативной веб-студии он превращает идеи в интерактивные, неповторимые цифровые продукты, которые выделяются среди конкурентов и дарят пользователям незабываемый опыт.</h6> */}
                    {/* <h6 className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px] mt-10">Mars студия - разрабатывает веб интерфейсы, где удобство использования сочетается с современным дизайном, а каждый проект становится инструментом роста и успеха вашего бизнеса.</h6> */}
                    <h6 className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px] mt-10">{t('AboutTeam.FrontendTextTwo')}</h6>
                    <img src="/image/team-front2.png" alt="logo-decor" className="h-[300px] absolute z-[-1] opacity-70 translate-y-[0]  sm:translate-x-[-150px] translate-x-[-20px]"/>
                </div>
                <img src="/image/front-team.png" alt="logo-decor" className="w-[300px]"/>
            </div>
            
            <div className="flex items-center justify-center flex-col gap-3 lg:flex-row mt-20">
                <img src="/image/team-backend.png" alt="logo-decor" className="w-[300px]"/>
                <div className="flex flex-col items-center justify-center releteve">
                <h6 className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px]">{t('AboutTeam.BackendText')}</h6>
                    {/* <h6 className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px]">Бэкэнд-разработка — это одна из самых важных частей сайта. Она невидима для глаз пользователя, но именно на ней держится весь ресурс. Бэкэнд обеспечивает защиту, функционал, масштабируемость, взаимодействие и скорость работы сайта. Это та самая «магия», которая делает цифровой продукт надежным, эффективным и готовым к росту вместе с вашим бизнесом.</h6> */}
                    {/* <h6 className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px] mt-10">Команда Mars использует передовые технологии для обеспечения безопасности, быстрой загрузки, высокой скорости работы и расширенного функционала веб-ресурсов. Мы создаём сайты и приложения, которые надежны, эффективны и готовы к масштабированию, обеспечивая пользователям удобство и комфорт на любом устройстве</h6> */}
                    <h6 className="font-jost text-zinc-300 font-normal text-sm px-10 max-w-full sm:max-w-[500px] mt-10">{t('AboutTeam.BackendTextTwo')}</h6>
                    <img src="/image/team-backend2.png" alt="logo-decor" className="h-[400px] absolute z-[-1] opacity-70 translate-y-[-20px] sm:translate-x-[150px] translate-x-[0] "/>
                </div>
            </div>
        </>
    );
}
export default AboutTeam;