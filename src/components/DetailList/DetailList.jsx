import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProjects } from '../../../src/utils/api';
import { useTranslation } from 'react-i18next';
import NumberDetail from '../NumberDetail/NumberDetail';
import MarsSectionText from '../../components/MarsSectionText/MarsSectionText';

const DetailList =()=>{
    const { t } = useTranslation();
    const{slug}= useParams();
    const[project, setProject]= useState(null);
    const [error, setError] = useState(null);
    const { i18n } = useTranslation();

    // const getTranslated = (project, field) => {
    //     // const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
    //     const Lang = i18n.language.startsWith('ru') 
    //     ? 'ru'
    //     : i18n.language.startsWith('uk')
    //     ? 'uk'
    //     : ('en');
    //     return project[`${field}_${lang}`];
    // };

    const getTranslated = (project, field) => {
        const lang = i18n.language.startsWith('ru')
            ? 'ru'
            : i18n.language.startsWith('uk')
            ? 'uk'
            : 'en';
        return project[`${field}_${lang}`];
    };
    

   useEffect(()=>{
    fetchProjects()
    .then(data=>{
        const found = data.find(proj => proj.slug === slug);
        if (found) {
            setProject(found);
        } else {
            setError('Проект не найден');
        }
    })
    .catch(err => {
        console.error(err);
        setError('Ошибка загрузки проекта');
    });
   },[slug]);
    // useEffect(() => {
    //     fetch(`http://127.0.0.1:8001/api/projects/${slug}/`)
    //     .then(res => res.json())
    //     .then(data => setProject(data));
    // }, [slug]);
   if (error) return <div>{error}</div>
   if (!project) return <div>Загрузка</div>
    return(
        // <div>
        //     <div className="detail text-white mt-[100px]">
        //         <div>Detail page</div>
        //         <strong>{getTranslated(project, 'name')} {getTranslated(project, 'description')}</strong> 
        //     </div>
           
        // </div>
        <>
          {/*block 1*/}
            <div className="flex flex-col items-center text-white max-w-screen-lg mx-auto px-4">
                <img src="/image/detail-main.png" alt="Image" className="w-full md:w-1/2 object-contain z-1" />
                <div className="flex flex-col mt-5 px-4 text-left">
               
                    <h1 className="font-jost font-extrabold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{getTranslated(project, 'name')}</h1>
                </div>
                {/* текст для студии */}
                {/* <div className="flex justify-start px-4 sm:px-10 mt-20 relative max-w-lg">
                    <h3 className="font-jost text-cyan-50  text-sm sm:text-base md:text-lg">Mars Design студия создаёт сайты, которые выделяются своей уникальностью, индивидуальным функционалом и сильным дизайном. Мы используем передовые технологии в программировании такие как— Django и React, разрабатывая каждый проект с нуля. Наши сайты имеют собственную уникальную структуру и дизайн, превращаясь в эффективные инструменты для развития бизнеса.</h3>
                    <img src="/image/receta-style.svg" alt="logo-decor" className="animate-spin-slow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 sm:w-32 md:w-40 z-[-1]" />
                </div> */}
                {/* текст для студии */}
            </div>
            {/*block 1*/}
            {/*block 2*/}
            <div className="w-full bg-[url('/image/moon.svg')] bg-contain bg-center bg-no-repeat flex items-center justify-center flex-col mt-20 gap-10">
                
                <div className="flex-1 flex items-center justify-center flex-col lg:flex-row mt-[200px]">
                    <div className="flex-1 flex flex-col items-center justify-center gap-5 lg:gap-10 px-4 relative">
                        <h4 className="font-jost text-sm  font-sm text-cyan-100 max-w-[400px] text-left z-[10]">{getTranslated(project, 'description')}</h4>
                        <img src={project.image_description} alt="mars" className="w-[500px] h-[300px] px-1 object-cover"  />
                        <img src="/image/M.svg" alt="mars" className="w-[200px] mt-[-450px] sm:ml-[200px] absolute z-[1] ml-[100px]" />
                    </div> 
                        
                    <div className="flex-1 flex flex-col gap-5 mt-5 lg:mt-[100px]">
                        <div className="w-full h-full flex lg:flex-col flex-col-reverse lg:items-start items-center justify-start gap-5 lg:gap-10">
                            <img src={project.image_job} alt="mars" className="w-[600px] h-[300px] px-1 object-cover" />
                            <h4 className="font-jost text-sm font-normal text-cyan-100  max-w-[900px] px-10">{getTranslated(project, 'text_job')}</h4>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-end w-full lg:mt-[300px] mt-[100px] relative">
                    <img src="/image/A.svg" alt="mars" className="w-[200px] mt-[-120px] absolute z-[1] mr-[100px] lg:mr-[500px]" />
                    <h4 className="font-jost text-lg sm:text-xl text-white max-w-[900px] text-left sm:px-10 px-5 z-[10]">{t('DetailList.Text')}<span class="text-cyan-200 text-xl font-light">{t('DetailList.TextOne')}</span>{t('DetailList.TextTwo')}<span class="text-cyan-200 text-xl font-light">{t('DetailList.TextThree')}</span>{t('DetailList.TextFour')}<span class="text-cyan-200 text-xl font-light">{t('DetailList.TextFive')}</span>{t('DetailList.TextSix')}</h4>
                    {/* <h4 className="font-jost text-lg sm:text-xl text-white max-w-[900px] text-left sm:px-10 px-5 z-[10]">Каждый сайт, созданный студией Mars — это <span class="text-cyan-200 text-xl font-light">индивидуальное решение, не похожее на другие. </span>Перед разработкой мы внимательно<span class="text-cyan-200 text-xl font-light"> анализируем рынок и изучаем конкурентов,</span> чтобы понять их сильные стороны. Это позволяет нам создавать проекты, которые <span class="text-cyan-200 text-xl font-light">становятся лучше, удобнее и привлекательнее — </span>как с точки зрения функционала, так и с визуальной стороны.</h4> */}
                </div>
                {/* <div className="flex-1 flex justify-start w-full ">
                    <h4 className="font-jost text-lg sm:text-xl font-normal text-white  max-w-[900px] text-left sm:px-10 px-5">Наши сайты работают на Django Python— это позволяет делать не просто страницы, а полноценные инструменты для бизнеса: удобное управление, онлайн-оплаты, чаты, личные кабинеты и многое другое. Mars studio создает не просто страницы, а удобные инструменты для бизнеса.А благодаря использованию защищённых серверов с доступом по всему миру, ваш сайт всегда будет стабильно работать и оставаться в безопасности.</h4>
                </div> */}
            </div>
            {/*block 2*/}
            <div>
                <MarsSectionText text1="MarsSectionText.HomeText" text2="MarsSectionText.HomeDescription"/>
                <NumberDetail />
            </div>
            {/*block 3*/}
            <div className="w-full sm:h-[1200px] h-[800px] bg-[url('/image/bg-detail1.png')] bg-cover bg-center flex flex-col items-center mt-20">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center">
                    <h6 className="font-jost text-cyan-200 text-3xl sm:text-5xl">{t('DetailList.PrototipText')}<br />{t('DetailList.PrototipTextItem')}</h6>
                        {/* <h6 className="font-jost text-cyan-200 text-3xl sm:text-5xl">Прототип<br />будущего сайта</h6> */}
                    </div>
                    <div className="flex flex-col lg:items-start lg:justify-start items-center justify-center w-full mt-20">
                        <h6 className="font-jost text-cyan-100  text-sm max-w-[700px] px-10">{getTranslated(project, 'text_prototip')}</h6>
                    </div>

                    <div className="flex flex-col lg:items-end lg:justify-end items-center justify-center w-full mt-20">
                        <img src={project.image_prototip} alt="logo-decor" className="w-[600px] h-[300px] z-[1] mt-5 object-cover px-5"/>
                    </div>
                </div>
            </div>
            {/*block 3*/}
            {/*block 4*/}
            <div className="w-full h-[1300px] bg-[url('/image/bg-detail2.svg')] bg-cover bg-center flex flex-col items-center gap-20">
                <div className="flex flex-col items-center justify-center gap-10">
                    <div className="flex items-center justify-center">
                    <h6 className="font-jost text-cyan-200 text-3xl sm:text-5xl">{t('DetailList.PrototipTextOne')}<br />{t('DetailList.PrototipTextTwo')}</h6>
                        {/* <h6 className="font-jost text-cyan-200 text-3xl sm:text-5xl">Сайт<br />который получился</h6> */}
                    </div>
                    <div classN="flex flex-col lg:items-end lg:justify-end items-center justify-center w-full mt-20">
                        <img src={project. image_prototip_end} alt="logo-decor" className="w-[600px] h-[300px] object-cover z-[1] px-5"/>
                    </div>
                    <div className="flex flex-col lg:items-start lg:justify-start items-center justify-center w-full mt-5">
                        <h6 className="font-jost text-cyan-100   text-sm max-w-[700px] px-10">{getTranslated(project, 'text_prototip_end')}</h6>
                    </div>
                    <div className="flex flex-col lg:items-end lg:justify-end items-center justify-center w-full mt-10">
                    <h6 className="font-jost text-white text-sm max-w-[500px] px-10">{t('DetailList.SectionDescription')}</h6>
                        {/* <h6 className="font-jost text-white text-sm max-w-[500px] px-10">Вся магия начинается с дизайна в Figma — мы создаём прототип будущего сайта, его «скелет». После утверждения макета проект переходит в этап фронтенд-разработки: интерфейс реализуется на React — современном фреймворке для создания адаптивных и быстрых решений с любым уровнем функционала.Затем к работе подключается бэкенд на Django. Здесь мы объединяем дизайн и функционал: тестируем систему, настраиваем API через DRF, обеспечиваем стабильную работу сайта.Финальный этап — это серверная часть: подключение домена, установка SSL-сертификата и размещение сайта на надёжном хостинге. В результате вы получаете готовый ресурс, который открывается в любой точке мира — быстро, безопасно и без ограничений</h6> */}
                        
                    </div>
                    <div>
                        <a href="" className='block hidden sm:block'><div className="flex items-center justify-center px-4 py-2 text-white rounded-full mt-[30px] font-jost font-light hover:border-red-500 border border-white" style={{width: "180px", height: "40px"}}>
                            {/* <span className="font-normal">смотреть проект</span> */}
                            <span className="font-normal">{t('DetailList.ButtoText')}</span>
                        </div></a>
                    </div>
            
                </div>
            </div>
            {/*block 4*/}
        </>
    );
}
export default DetailList;