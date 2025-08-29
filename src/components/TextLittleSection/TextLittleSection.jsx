import { useTranslation } from 'react-i18next';
// npm install framer-motion  библиотека анимации
import { motion } from "framer-motion";

function TextLittleSection({text1, text2}){
    const { t } = useTranslation();

    return(
        <>
            <div className="flex items-center mt-[50px] flex-col">
                <motion.h6
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="font-jost text-zinc-300 font-bold text-left max-w-full w-[300px] sm:w-[500px] text-8xl mt-3 tracking-widest sm:translate-x-[200px]"
                    >{t(text1)}</motion.h6>
                <motion.p
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="font-jost text-cyan-600 font-medium text-right tracking-widest w-[200px] text-5xl  sm:translate-x-[-30px] mb-5"
                    >{t(text2)}</motion.p>
            </div>        
        </>
    );
}    

export default TextLittleSection;