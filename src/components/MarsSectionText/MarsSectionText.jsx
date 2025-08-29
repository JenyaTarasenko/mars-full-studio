
import { useTranslation } from 'react-i18next';
// npm install framer-motion  библиотека анимации
import { motion } from "framer-motion";

function MarsSectionText({text1, text2}){
    const { t } = useTranslation();

    return(
        <>
        <div className="flex items-center mt-[200px] flex-col">
            <img src="/image/mars-text.svg" alt="mars-image" className='w-[300px]'/>
            <motion.h6
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="font-jost text-zinc-300 font-bold text-left max-w-full w-[300px] sm:w-[500px] text-4xl mt-3 tracking-widest sm:translate-x-[200px]"
                >{t(text1)}</motion.h6>
            {/* <div>
                <h6 className='font-jost text-zinc-300 font-bold text-left max-w-full w-[300px] sm:w-[500px] translate-x-[70px] text-4xl mt-3 tracking-widest sm:translate-x-[200px]'>{t(text1)}</h6>
            </div> */}
            <motion.p
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                className="font-jost text-cyan-600 font-medium text-right tracking-widest w-[200px] text-lg mt-5 sm:translate-x-[-30px]"
                >{t(text2)}</motion.p>
           
            {/* <p className='font-jost text-cyan-600 font-medium text-right tracking-widest w-[200px] translate-x-[-30px] text-lg mt-5'>{t(text2)}</p> */}
           
        </div>
        </>
    );
}

export default MarsSectionText;