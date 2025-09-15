import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

function Bast(){
    const { t } = useTranslation();

    return(
        <>
        <div className="flex items-center justify-center min-h-screen mt-40">
            <div className="bg-cover bg-center  h-[1200px] w-[750px] flex items-center justify-center flex-col z-[1]" style={{ backgroundImage: "url('/image/bast.svg')" }}>
                <div className="">
                    <motion.h5 
                        initial={{ opacity: 0, x: 100 }} // невидим и сдвинут влево
                        whileInView={{ opacity: 1, x: 0 }} // плавно появляется и возвращается на место
                        viewport={{ once: true, amount: 0.3 }} // анимация запускается один раз
                        transition={{ duration: 1.2, ease: "easeOut" }} // плавность
                        className="font-normal text-white text-sm text-left max-w-[400px] p-5"
                        >{t('Bast.TextOne')}
                        {/* >Наша студия работает с любым типом бизнеса — от небольших стартапов и смелых первопроходцев до крупных компаний и масштабных проектов. Мы предлагаем услуги по внедрению креативных веб-технологий: от простых лендингов для тестирования идей и продвижения продукта в сети до сложных и амбициозных решений, которые оказывают значительное влияние на развитие бизнеса и целых отраслей. */}
                    </motion.h5>
                    
                </div>

                <div className="relative">
                <motion.img
                        src="/image/R.svg"
                        alt="logo-card-style"
                        className="absolute translate-x-[150px] sm:translate-x-[300px] lg:translate-y-[140px] translate-y-[-40px] sm:translate-y-[60px] w-[120px] z-[-1] opacity-75"
                        initial={{ rotate: 0 }}             // стартовое положение
                        whileInView={{ rotate: 180 }}       // переворачивается на 180° при попадании в видимую область
                        viewport={{ once: true, amount: 0.5 }} // срабатывает один раз, когда 50% блока видно
                        transition={{ duration: 1.5, ease: "easeOut" , delay: 1}} // плавность вращения
                    />
                    <motion.h5 
                        initial={{ opacity: 0, x: -100 }} // невидим и сдвинут влево
                        whileInView={{ opacity: 1, x: 0 }} // плавно появляется и возвращается на место
                        viewport={{ once: true, amount: 0.3 }} // анимация запускается один раз
                        transition={{ duration: 1.2, ease: "easeOut" }} // плавность
                        className="font-normal text-white text-sm text-left max-w-[400px] p-5"
                    >{t('Bast.TextTwo')}
                     {/* >Наша цель — создавать современные веб-продукты, которые не просто выполняют задачу, а выделяются среди конкурентов своей креативностью и нестандартным подходом к решению проблем. Мы внедряем самые передовые технологии веб-разработки, чтобы идти в ногу со временем и формировать новые стандарты в цифровой среде.Сегодня граница между человеком и цифровым миром становится всё тоньше. Мы создаём решения, которые позволяют пользователю взаимодействовать с цифровой средой легко, интуитивно и с максимальным комфортом. */}
                    </motion.h5>
                </div>

                <div className="">
                <h5 className="text-base text-white  text-left max-w-[400px] p-5">{t('Bast.TextThree')}</h5>
                    {/* <h5 className="text-base text-white  text-left max-w-[400px] p-5">Наш приоритет — сделать цифровые технологии доступными для любого бизнеса и помочь компаниям эффективно конкурировать на рынке. Мы внедряем инновационные решения, которые открывают новые возможности для привлечения клиентов и укрепления позиций бренда.</h5> */}
                </div>
                
            </div>
        </div>

        </>
    )
}
export default Bast;