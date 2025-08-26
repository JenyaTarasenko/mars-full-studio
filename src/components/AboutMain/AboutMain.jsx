import { useTranslation } from 'react-i18next';

function AboutMain({ link }){
    const { t } = useTranslation();

    return(
        <div className="w-full h-[600px] sm:h-[1000px] md:h-[700] bg-[url('/image/about-fon.png')] bg-cover bg-center mt-[200px]">
            <div className="flex flex-col ">
                <div className="flex justify-start px-5 mt-[-100px] flex-col">
                    {/* <h2 className="font-jost  text-5xl font-extrabold text-white">О Нас</h2> */}
                    <h2 className="font-jost  text-5xl font-extrabold text-white">{t('AboutMain.mainText')}</h2>
                    <h1 className="font-jost  text-sm font-normal text-zinc-500 mt-2">mars studio</h1>
                </div>

                <div className="flex justify-start  px-5 sm:px-10 w-[300px] lg:w-[800px] mt-[250px] relative">
                    {/* <h3 className="font-jost text-rose-300">Мы — студия полного цикла Mars, студия - где идеи оживают.Наша команда и жаждет нестандартных проектов, которые бросают вызов привычным решениям. Мы работаем «под ключ»: от наброска на бумаге до готового веб-приложения. Дизайнеры в нашей команде мыслят образами и чувствами пользователя, а разработчики видят красоту даже в алгоритмах. Вместе мы превращаем креатив и технологию в цельные digital-продукты — стильные, удобные и эффективные.Наши проекты не просто радуют глаз, они работают на вас: привлекают клиентов, решают задачи и приносят результат.</h3> */}
                    <h3 className="font-jost text-rose-300">{t('AboutMain.mainDescription')}</h3>
                    <img src="/image/text-mars.svg" alt="logo-decor" className="animate-spin-slow absolute sm:ml-[500px] sm:mt-[300px] ml-[140px] mt-[550px] z-[1]"/>
                </div>

                <div className="flex justify-end mt-[250px] relative ">
                    <div className="w-[300px] lg:w-[500px] px-5 relative z-[10]">
                        {/* <h4 className="font-jost text-rose-300 ">Мы выделяемся на фоне конкурентов благодаря индивидуальному подходу, смелым интерфейсам и вниманию к деталям. В своей работе мы используем передовые технологии — React и Django, которые позволяют создавать быстрые, надёжные и масштабируемые решения как для стартапов, так и для крупных компаний.</h4> */}
                        <h4 className="font-jost text-rose-300 ">{t('AboutMain.mainDescriptionItem')}</h4>
                    </div>
                    <img src="/image/shlem.svg" alt="logo-decor" className="absolute mr-[5px] sm:mr-[250px]  mt-[-50px] z-[1]"/>

                </div>
            </div>
        </div>
    );
}
export default AboutMain;