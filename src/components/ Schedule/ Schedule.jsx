import './style.css';
import { useTranslation } from 'react-i18next';

function Shedule(){
    const { t } = useTranslation();
    return(
        
        <div className="flex items-center justify-center section-schedule flex-col mt-[200px]">
            <div className="flex items-center justify-center">
            {/* <h5 className="font-jost text-white  text-3xl sm:text-4xl text-center"><span style={{color:"#D34725"}}>Эффективное</span> <span className="text-3xl sm:text-4xl italic">решение</span><br /><span className="font-light">для вашего бизнеса</span></h5> */}
            <h5 className="font-jost text-white  text-3xl sm:text-4xl text-center"><span style={{color:"#D34725"}}>{t('Shedule.text')}</span> <span className="text-3xl sm:text-4xl italic">{t('Shedule.textOne')}</span><br /><span className="font-light text-zinc-400">{t('Shedule.textTwo')}</span></h5>
            </div>
            <div className="schedule-card flex flex-col lg:flex-row gap-5 column-section-schedule mt-20">
            <div className="schedule-card-one sm:w-[600px] w-[300px] h-[620px] sm:h-[380px] relative">
                {/* <p className="px-5 font-jost mt-10 font-light text-sm text-blue-200 ">Мы предлагаем полный цикл разработки веб-ресурсов — от дизайна до запуска. Помогаем компаниям эффективно перенести бизнес в онлайн и увеличить конверсии за счёт продуманной структуры, адаптивного дизайна и современных технологий.</p> */}
                <p className="px-5 font-jost mt-10 font-light text-sm text-blue-200 ">{t('Shedule.item')}</p>
                {/* <h6 className="px-5 font-jost mt-10 text-3xl text-zinc-50"><span style={{color:"#D34725"}} className="italic">Разработка веб-ресурсов </span>- это не просто создание сайта, это  инструмент для роста  вашего бизнесса</h6> */}
                <h6 className="px-5 font-jost mt-10 text-3xl text-zinc-50"><span style={{color:"#D34725"}} className="italic">{t('Shedule.itemOne')}{" "}{" "}</span>{t('Shedule.itemTwo')}</h6>
                <div className="flex flex-row px-5 gap-5 mt-5 items-center">
                    <img src="/image/Shedule.svg" alt="logo-image" className='w-[25px]'/>
                    {/* <span className="font-jost text-blue-200 text-sm">Привлечении клиентов</span> */}
                    <span className="font-jost text-zinc-500 text-sm">{t('Shedule.itemCard')}</span>
                </div>
                <div className="flex flex-row px-5 gap-5 mt-2 items-center">
                    <img src="/image/Shedule1.svg" alt="logo-image" className='w-[25px]'/>
                    <span className="font-jost text-zinc-500 text-sm">{t('Shedule.itemCardOne')}</span>
                    {/* <span className="font-jost text-blue-200 text-sm">Удобстве взаимодействия</span> */}
                </div>
                <div className="flex flex-row px-5 gap-5 mt-2 items-center">
                    <img src="/image/Shedule2.svg" alt="logo-image" className='w-[25px]'/>
                    {/* <span className="font-jost text-blue-200  text-sm">Оптимизации бизнес-процессов</span> */}
                    <span className="font-jost text-zinc-500  text-sm">{t('Shedule.itemCardTwo')}</span> 
                    
                </div>
                <img src="/image/rock-style.svg" alt="Лого" className="absolute ml-0 mt-[-90px] sm:ml-[255px] "/>
            </div> 
            
            <div className="schedule-card-two w-[300px] sm:w-[600px] lg:w-[300px] h-[380px] flex flex-row items-end  justify-center gap-4">
                <div className="flex flex-col gap-5 items-center justify-center">
                    <span className="font-jost text-zinc-50 text-sm">60%</span>
                    <div className="rounded-tl-[20px] rounded-tr-[20px]" style={{width:"49px", height:"180px", backgroundColor:"#00ff99"}}></div>
                </div>
                <div className="flex flex-col gap-3 items-center justify-center">
                    <span className="font-jost text-xl text-orange-900">90%</span>
                    <div className="rounded-tl-[20px] rounded-tr-[20px]" style={{width:"49px", height:"220px", backgroundColor:"#FF3100"}}></div>
                </div>
                <div className="flex flex-col gap-3 items-center justify-center">
                    <span className="font-jost text-sm text-zinc-600">30%</span>
                    <div  className="rounded-tl-[20px] rounded-tr-[20px]" style={{width:"49px", height:"130px", backgroundColor:"#FFFFFF"}}></div>
                </div>
        
            </div>
        
            </div>
        </div>
    );
}
export default Shedule;