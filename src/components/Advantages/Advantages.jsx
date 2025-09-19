import './style.css';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import crugDestop from "../../assets/image/crug-destop.svg";
import crugLeft from "../../assets/image/crug-left.svg";
import crugCenter from "../../assets/image/crug-center.svg";
import crugRight from "../../assets/image/crug-right.svg";

function Advantages(){
    const { t } = useTranslation();
    return(
    <>
        {/* блок дестоп  */}
        <div className="flex items-center justify-center mt-20 advantages-destop relative">
            {/* <img src="/image/crug-destop.svg" alt="Логотип" className="object-contain z-[1]" /> */}
            <img src={crugDestop} alt="Логотип" className="object-contain z-[1]" />
        
            {/* <div className="absolute font-jost w-[200px] text-white translate-x-[-400px] translate-y-[-200px] text-sm">
                <h4>{t('advantage.solution')}</h4> 
            </div> */}
            <motion.div
                className="absolute font-jost w-[200px] text-white translate-x-[-400px] translate-y-[-200px] text-sm"
                initial={{ opacity: 0 }}              // изначально прозрачный
                whileInView={{ opacity: 4 }}          // плавно проявляется
                viewport={{ once: true, amount: 0.3 }}// once: true — 1 раз при первом показе
                transition={{ duration: 3, ease: "easeOut" }} // плавность (2 сек)
                >
                <h4>{t("advantage.solution")}</h4>
            </motion.div>
        

            <h5 className="absolute font-jost w-[100px] text-white mt-[150px] mr-[670px] text-3xl text-center pulse-glow flex justify-center items-center">
                {t('advantage.description')}
            </h5>

            <motion.div
                className="absolute font-jost w-[200px] text-white mt-[-400px] ml-[700px]"
                initial={{ opacity: 0 }}              // изначально прозрачный
                whileInView={{ opacity: 4 }}          // плавно проявляется
                viewport={{ once: true, amount: 0.3 }}// once: true — 1 раз при первом показе
                transition={{ duration: 3, ease: "easeOut" }} // плавность (2 сек)
                >
                <h4>{t('advantage.develop')}</h4>
            </motion.div>
            {/* <div className="absolute font-jost w-[200px] text-white mt-[-400px] ml-[700px]">
                <h4 className="text-[14px]">{t('advantage.develop')}</h4>
            </div> */}

            <h5 className="absolute font-jost w-[100px] text-white mt-[150px] ml-[690px] text-3xl pulse-glow flex justify-center items-center">
                {t('advantage.individual')}
            </h5>
            <motion.div
                className="absolute font-jost w-[200px] text-white mt-[-520px]"
                initial={{ opacity: 0 }}              // изначально прозрачный
                whileInView={{ opacity: 4 }}          // плавно проявляется
                viewport={{ once: true, amount: 0.3 }}// once: true — 1 раз при первом показе
                transition={{ duration: 3, ease: "easeOut" }} // плавность (2 сек)
                >
                <h4>{t('advantage.functional')}</h4>
            </motion.div>
            {/* <div className="absolute font-jost w-[200px] text-white mt-[-520px]">
                <h4 className="text-[14px]">{t('advantage.functional')}</h4>
            </div> */}

            <h5 className="absolute font-jost w-[300px] text-white mt-[150px] text-3xl pulse-glow flex justify-center items-center">
                {t('advantage.full')}
            </h5>
        </div>
        {/* блок дестоп  */}

        {/* блок мобил  */}
        <div className="flex items-center justify-center mt-20 advantages-mobile flex-col">    
            <div class="flex relative">
            <img src={crugLeft} alt="Логотип" className="object-contain z-1 " />
                {/* <img src="/image/crug-left.svg" alt="Логотип" className="object-contain z-1 " /> */}
                
                    <motion.div className="absolute font-jost w-[200px] text-white translate-y-[-50px] text-left translate-x-[30px] "
                        whileInView={{ opacity: 1 }} 
                        initial={{ opacity: 0 }}          
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 3, ease: "easeOut" }}
                    >
                        <h4 style={{fontSize:"14px"}}>{t('advantage.solution')}</h4>
                    </motion.div>
                <motion.h5 
                    className="absolute font-jost w-[100px] text-white translate-y-[250px] translate-x-[90px]  text-3xl text-center pulse-glow" 
                    style={{ textAlign: "center" }}
                    initial={{ opacity: 0 }}           // изначально невидимый
                    whileInView={{ opacity: 1 }}       // проявляется при попадании в экран
                    viewport={{ once: true, amount: 0.5 }} // срабатывает один раз, когда 50% блока видно
                    transition={{ duration: 2, ease: "easeOut" }} // плавность
                >
                    {t('advantage.description')}
                </motion.h5>
            </div>

            <div className="mt-[100px] flex relative">
                <img src={crugCenter } alt="Логотип" className="object-contain z-1" />
                {/* <img src="/image/crug-center.svg" alt="Логотип" className="object-contain z-1" /> */}
               
                <motion.div className="absolute font-jost w-[200px] text-white translate-y-[-50px] text-center translate-x-[50px]"
                    whileInView={{ opacity: 1 }} 
                    initial={{ opacity: 0 }}          
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                >
                    <h4 style={{fontSize:"14px"}}>{t('advantage.develop')}</h4>
                </motion.div> 
                <motion.h5 className="absolute font-jost w-[100px] text-white text-3xl text-center pulse-glow flex justify-center items-center  translate-y-[220px] translate-x-[100px]"
                    style={{textAlign:"center"}}
                    whileInView={{ opacity: 1 }} 
                    initial={{ opacity: 0 }}          
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                >
                    {t('advantage.full')}
                </motion.h5>
            </div>

            <div className="mt-[100px] relative">
                <img src={crugRight} alt="Логотип" className="object-contain z-1" />
                {/* <img src="/image/crug-right.svg" alt="Логотип" className="object-contain z-1" /> */}
               
                <motion.div className="absolute font-jost w-[200px] text-white text-right translate-y-[-500px] translate-x-[50px]"
                    whileInView={{ opacity: 1 }} 
                    initial={{ opacity: 0 }}          
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                >
                    <h4 style={{fontSize:"14px"}}>{t('advantage.functional')}</h4>
                </motion.div>
                <motion.h5 
                className="absolute font-jost w-[100px] text-white mt-[-200px]  ml-[100px] text-3xl text-center pulse-glow flex justify-center items-center"
                    style={{textAlign:"center"}}
                    whileInView={{ opacity: 1 }} 
                    initial={{ opacity: 0 }}          
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                >
                {t('advantage.individual')}
                </motion.h5>
            </div>
        </div>
        {/* блок мобил  */}
    </>
    );
}
export default Advantages;