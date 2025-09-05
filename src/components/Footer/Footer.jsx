import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

function Footer(){
    const { t } = useTranslation();


    return(
        <>
            <footer className="flex items-center justify-center flex-col relative mt-[200px]">
                <motion.img src="/image/mars2.svg" 
                    alt="logo-mars-studio" 
                    className="w-full  object-contain mt-[400px] absolute z-[-1]"
                    initial={{ y: 0, opacity: 0 }}        // стартует на своём месте
                    whileInView={{ y: -100, opacity: 1 }} // поднимается выше на 100px
                    viewport={{ once: true, amount: 0.3 }} 
                    transition={{ duration: 2, ease: "easeOut" }} 
                />
                <div className='flex flex-row items-center gap-5 absolute sm:mt-[500px] mt-[440px] z-[30] text-white '>
                    &copy;<span className='font-normal text-sm'>2025 Mars Studio.</span><span className='text-xs text-zinc-300'>All rights reserved.</span>
                </div>
                <img src="/image/mars1.svg" alt="logo-mars-studio" className="w-full  object-contain mt-[400px] absolute z-[20] hidden md:block"/>
                <img src="/image/mars1-mobile.svg" alt="logo-mars-studio" className="w-full  object-contain mt-[400px] absolute z-[20] block md:hidden"/>
                {/* <img src="/image/footer.svg" alt="logo-mars-studio" className="w-full  object-contain mt-[400px]"/> */}
            </footer>
        </>
    )
}
export default Footer;