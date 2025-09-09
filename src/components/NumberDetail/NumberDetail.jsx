import { useTranslation } from 'react-i18next';
// import { motion } from "framer-motion";
// import AnimatedNumber from '../AnimatedNumber/AnimatedNumber';
import { motion, useMotionValue, useTransform, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function NumberDetail(){
    const { t } = useTranslation();
    
    // const ref = useRef(null);
    // const inView = useInView(ref, { once: true, amount: 0.5 });

    // const value = useMotionValue(0);
    // const rounded = useTransform(value, latest => Math.round(latest));
    // const [display, setDisplay] = useState(0);
  
    // useEffect(() => {
    //     const unsubscribe = rounded.on("change", v => setDisplay(v));
    //     return () => unsubscribe();
    // }, [rounded]);
    
    // useEffect(() => {
    //     if (inView) {
    //       animate(value, 85, { duration: 2, ease: "easeOut" });
    //     }
    // }, [inView, value]);

    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.1 });
  
    // Три MotionValue для трёх чисел
    const value1 = useMotionValue(0);
    const value2 = useMotionValue(0);
    const value3 = useMotionValue(0);
  
    const rounded1 = useTransform(value1, v => Math.round(v));
    const rounded2 = useTransform(value2, v => Math.round(v));
    const rounded3 = useTransform(value3, v => Math.round(v));
  
    const [display1, setDisplay1] = useState(0);
    const [display2, setDisplay2] = useState(0);
    const [display3, setDisplay3] = useState(0);
  
    useEffect(() => {
      const unsub1 = rounded1.on("change", v => setDisplay1(v));
      const unsub2 = rounded2.on("change", v => setDisplay2(v));
      const unsub3 = rounded3.on("change", v => setDisplay3(v));
      return () => {
        unsub1(); unsub2(); unsub3();
      };
    }, [rounded1, rounded2, rounded3]);
  
    useEffect(() => {
      if (inView) {
        animate(value1, 120, { duration: 2, ease: "easeOut" });
        animate(value2, 85, { duration: 2, ease: "easeOut" });
        animate(value3, 75, { duration: 2, ease: "easeOut" });
      }
    }, [inView, value1, value2, value3]);

    return(
        <>
        <div ref={ref} className="flex flex-col mt-20 lg:flex-row items-center justify-center gap-5">
            <div className="flex items-center justify-center relative flex-col">
                <img src="/image/cifra-text.svg" alt="number" className="w-[280px] z-[-1]" />
                {/* <AnimatedNumber target={120} suffix="%" duration={2.5}/> */}
                <motion.p className="font-jost text-red-600 text-7xl font-bold absolute mb-[40px]">+{display1}%</motion.p>
                {/* <p className="font-jost text-red-600 text-7xl font-bold absolute mb-[40px]">+120%</p> */}
                {/* <p className="font-jost text-zinc-200  text-sm font-light text-center mt-5 tracking-widest">Рост посещаемости<br />сайта за 3 месяца</p> */}
                <p className="font-jost text-zinc-200  text-sm font-light text-center mt-5 tracking-widest">{t('NumberDetail.description')}<br />{t('NumberDetail.descriptionText')}</p>
            </div>
            <div className="flex items-center justify-center relative flex-col">
                <img src="/image/cifra-text.svg" alt="number" className="w-[280px] z-[-1]" />
                <motion.p className="font-jost text-red-600 text-7xl font-bold absolute mb-[40px]">+{display2}%</motion.p>

                {/* <motion.p 
                    className="font-jost text-red-600 text-7xl font-bold absolute mb-[40px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    +{display}%
                </motion.p> */}
                {/* <p className="font-jost text-zinc-200  text-sm font-light text-center mt-5 tracking-widest">Увеличение конверсии<br/>заявок и продаж</p> */}
                <p className="font-jost text-zinc-200  text-sm font-light text-center mt-5 tracking-widest">{t('NumberDetail.Items')}<br/>{t('NumberDetail.ItemsText')}</p>
            </div>
            <div className="flex items-center justify-center relative flex-col">
                <motion.p className="font-jost text-red-600 text-7xl font-bold absolute mb-[40px]">+{display3}%</motion.p>
                <img src="/image/cifra-text.svg" alt="number" className="w-[280px] z-[-1]" />
                {/* <p className="font-jost text-red-600 text-7xl font-bold absolute mb-[40px]">+75%</p> */}
                <p className="font-jost text-zinc-200  text-sm font-light text-center mt-5 tracking-widest">{t('NumberDetail.Text')}<br/>{t('NumberDetail.TextOne')}</p>
                {/* <p className="font-jost text-zinc-200  text-sm font-light text-center mt-5 tracking-widest">Вовлечённость благодаря<br/>интерфейсу и функционалу</p> */}
            </div>
        </div>
        </>
    );
}
export default NumberDetail;