import './style.css';
import { useTranslation } from 'react-i18next';
// import { motion } from "framer-motion";
import { motion, useMotionValue, useTransform, useInView } from "framer-motion";
// import { useRef } from 'react';
import { useRef, useEffect, useState } from 'react';
import Shedule1 from "../../assets/image/Shedule.svg";
import Shedule2 from "../../assets/image/Shedule1.svg";
import Shedule3 from "../../assets/image/Shedule2.svg";
import RockStyle from "../../assets/image/rock-style.svg";

function Shedule(){
    const { t } = useTranslation();
    const  ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });

    const value = useMotionValue(0);
    const rounded = useTransform(value, latest => Math.round(latest));
    const [display, setDisplay] = useState(0);



    useEffect(() => {
        rounded.on("change", v => setDisplay(v));
        if (inView) {
          value.set(60); // конечное значение при попадании в экран
        }
      }, [inView]);


    return(
        
        <div className="flex items-center justify-center section-schedule flex-col mt-[200px]">
            <div className="flex items-center justify-center">
            {/* <h5 className="font-jost text-white  text-3xl sm:text-4xl text-center"><span style={{color:"#D34725"}}>Эффективное</span> <span className="text-3xl sm:text-4xl italic">решение</span><br /><span className="font-light">для вашего бизнеса</span></h5> */}
            {/* <h5 className="font-jost text-white  text-3xl sm:text-4xl text-center"><span style={{color:"#D34725"}}>{t('Shedule.text')}</span> <span className="text-3xl sm:text-4xl italic">{t('Shedule.textOne')}</span><br /><span className="font-light text-zinc-400">{t('Shedule.textTwo')}</span></h5> */}
            <motion.h5 className="font-jost text-white  text-3xl sm:text-4xl text-center"
               initial={{ opacity: 0 }}           // изначально невидимый
               whileInView={{ opacity: 1 }}       // плавно появляется
               viewport={{ once: true, amount: 0.3 }} // срабатывает один раз
               transition={{ duration: 2, ease: "easeOut" }} // длительность 2 сек
            >
                <span style={{color:"#D34725"}}>{t('Shedule.text')}</span> <span className="text-3xl sm:text-4xl font-extralight">{t('Shedule.textOne')}</span><br /><span className="font-light text-blue-200">{t('Shedule.textTwo')}</span>
            </motion.h5>
            </div>
            <div className="schedule-card flex flex-col lg:flex-row gap-5 column-section-schedule mt-20">
            <div className="schedule-card-one sm:w-[600px] w-[300px] h-[620px] sm:h-[380px] relative">
                {/* <p className="px-5 font-jost mt-10 font-light text-sm text-blue-200 ">Мы предлагаем полный цикл разработки веб-ресурсов — от дизайна до запуска. Помогаем компаниям эффективно перенести бизнес в онлайн и увеличить конверсии за счёт продуманной структуры, адаптивного дизайна и современных технологий.</p> */}
                <p className="px-5 font-jost mt-10 font-light text-sm text-blue-200 ">{t('Shedule.item')}</p>
                {/* <h6 className="px-5 font-jost mt-10 text-3xl text-zinc-50"><span style={{color:"#D34725"}} className="italic">Разработка веб-ресурсов </span>- это не просто создание сайта, это  инструмент для роста  вашего бизнесса</h6> */}
                {/* <h6 className="px-5 font-jost mt-10 text-3xl text-zinc-50"><span style={{color:"#D34725"}} className="font-extralight">{t('Shedule.itemOne')}{" "}{" "}</span>{t('Shedule.itemTwo')}</h6> */}
                <motion.h6 className="px-5 font-jost mt-10 text-3xl text-zinc-50"
                initial={{ opacity: 0 }}           // изначально невидимый
                whileInView={{ opacity: 1 }}       // плавно появляется
                viewport={{ once: true, amount: 0.3 }} // срабатывает один раз
                transition={{ duration: 2, ease: "easeOut"}}
                >
                    <span style={{color:"#D34725"}} className="font-extralight">{t('Shedule.itemOne')}{" "}{" "}</span>{t('Shedule.itemTwo')}
                </motion.h6>
                <div className="flex flex-row px-5 gap-5 mt-5 items-center">
                    <img src={Shedule1} loading="lazy" alt="logo-image" className='w-[25px]'/>
                    {/* <span className="font-jost text-blue-200 text-sm">Привлечении клиентов</span> */}
                    <span className="font-jost text-zinc-500 text-sm">{t('Shedule.itemCard')}</span>
                </div>
                <div className="flex flex-row px-5 gap-5 mt-2 items-center">
                    <img src={Shedule2} loading="lazy"  alt="logo-image" className='w-[25px]'/>
                    <span className="font-jost text-zinc-500 text-sm">{t('Shedule.itemCardOne')}</span>
                    {/* <span className="font-jost text-blue-200 text-sm">Удобстве взаимодействия</span> */}
                </div>
                <div className="flex flex-row px-5 gap-5 mt-2 items-center">
                    <img src={Shedule3} loading="lazy" alt="logo-image" className='w-[25px]'/>
                    {/* <span className="font-jost text-blue-200  text-sm">Оптимизации бизнес-процессов</span> */}
                    <span className="font-jost text-zinc-500  text-sm">{t('Shedule.itemCardTwo')}</span> 
                    
                </div>
                <img src={RockStyle} loading="lazy" alt="Лого" className="absolute ml-0 mt-[-90px] sm:ml-[255px] "/>
            </div> 
            
            <div className="schedule-card-two w-[300px] sm:w-[600px] lg:w-[300px] h-[380px] flex flex-row items-end  justify-center gap-4">
                <div className="flex flex-col gap-5 items-center justify-center">
                    <div  ref={ref} className="mt-20">
                        <motion.span className="font-jost text-zinc-50 text-sm inline-block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: inView ? 1 : 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        >{display}%</motion.span>
                    </div>
                   

                    <motion.div className="rounded-tl-[20px] rounded-tr-[20px]" style={{width:"49px", height:"180px", backgroundColor:"#00ff99"}}
                      initial={{ height: 0 }}                 // стартовая высота
                      whileInView={{ height: 180 }}           // конечная высота при попадании в видимую область
                      viewport={{ once: true, amount: 0.3 }}  // один раз, когда 30% блока видно
                      transition={{ duration: 2, ease: "easeOut"}} // плавность
                    ></motion.div>
                    {/* <div className="rounded-tl-[20px] rounded-tr-[20px]" style={{width:"49px", height:"180px", backgroundColor:"#00ff99"}}></div> */}
                </div>
                <div className="flex flex-col gap-3 items-center justify-center">
                    <span className="font-jost text-xl text-orange-500">90%</span>
                    <motion.div className="rounded-tl-[20px] rounded-tr-[20px]" style={{width:"49px", height:"220px", backgroundColor:"#FF3100"}}
                        initial={{ height: 0 }}        
                        whileInView={{ height: 220 }} 
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 2, ease: "easeOut"}}
                    >
                    </motion.div>
                    {/* <div className="rounded-tl-[20px] rounded-tr-[20px]" style={{width:"49px", height:"220px", backgroundColor:"#FF3100"}}></div> */}
                </div>
                <div className="flex flex-col gap-3 items-center justify-center">
                    <span className="font-jost text-sm text-zinc-600">30%</span>
                    <motion.div  className="rounded-tl-[20px] rounded-tr-[20px]" style={{width:"49px", height:"130px", backgroundColor:"#FFFFFF"}}
                     initial={{ height: 0 }}        
                     whileInView={{ height: 130 }} 
                     viewport={{ once: true, amount: 0.3 }}
                     transition={{ duration: 2, ease: "easeOut"}}
                    >
                    </motion.div>
                    {/* <div  className="rounded-tl-[20px] rounded-tr-[20px]" style={{width:"49px", height:"130px", backgroundColor:"#FFFFFF"}}></div> */}
                </div>
        
            </div>
        
            </div>
        </div>
    );
}
export default Shedule;