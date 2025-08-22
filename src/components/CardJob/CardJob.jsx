import './style.css';
import { useTranslation } from 'react-i18next';

function CardJob(){
    const { t } = useTranslation();

    return(
        <>
            <div className="section-card-job mt-20">
                <div className="flex items-center justify-center flex-col lg:flex-row gap-2">
                    <div className="card-job-one w-[300px] sm:w-[470px] h-[500px] sm:h-[280px] relative transform transition-transform duration-300 hover:scale-105">
                        <h5 className="font-jost text-zinc-50 text-3xl mt-10 pl-10 font-bold">{t('cardJobOne.textOne')}<br/>{t('cardJobOne.textTwo')}</h5>
                        {/* <h5 className="font-jost text-zinc-50 text-3xl mt-10 pl-10 font-bold">Уникальный<br/>дизайн</h5> */}
                        {/* <h6 className="font-jost text-zinc-300 mt-5 mx-10">Дизайн с нуля — без шаблонов. Мы создаём уникальный визуальный стиль, отражающий характер вашего бренда. Упор на креатив, UX и современные тренды позволяет нам делать интерфейсы не только красивыми, но и удобными для пользователей.</h6> */}
                        <h6 className="font-jost text-blue-200 mt-5 mx-10">{t('cardJobOne.description')}</h6>
                        <div className="absolute translate-y-[-20px] translate-x-[44px]  bottom-0 sm:translate-x-[220px] z-[-1]">
                            <img src="/image/card-job-one.svg" alt="image-card" />
                        </div>
                        <div className="absolute bottom-0 translate-y-[20px] translate-x-[-20px] sm:translate-y-[-20px] sm:translate-x-[220px]">
                            <img src="/image/card-decor.svg" alt="card-mars"/>
                        </div>
                        <div className="absolute bottom-0 translate-y-[-354px] translate-x-[35px] sm:translate-y-[-135px] z-[-1]">
                            <img src="/image/card-one.svg" alt="image-card-mars" />
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3 rotate-90 origin-left absolute bottom-0 translate-y-[-115px] translate-x-[20px]">
                            <div className="w-[50px] h-[1px] bg-[#FF3100]"></div>
                            <h5 className="font-jost text-[#FF3100]">01</h5>
                        </div>
                    </div>

                    <div className="card-job-two sm:w-[470px] w-[300px] lg:w-[410px] h-[500px] sm:h-[280px] relative transform transition-transform duration-300 hover:scale-105">
                        {/* <h6 className="font-jost text-zinc-300 mt-5 mx-7">Сайт с полноценной структурой и отдельными разделами: главная, о компании, услуги, портфолио, блог, контакты.Подходит для бизнеса, корпоративных проектов и онлайн-сервисов с большим объёмом информации.</h6> */}
                        <h6 className="font-jost text-blue-200 mt-5 mx-7">{t('cardJobTwo.description')}</h6>
                        {/* <h5 className="font-jost text-zinc-50 text-2xl mt-4 pl-10 sm:text-3xl font-bold">Адаптивная<br/>вёрстка</h5> */}
                        <h5 className="font-jost text-zinc-50 text-2xl mt-4 pl-10 sm:text-3xl font-bold">{t('cardJobTwo.textOne')}<br/>{t('cardJobTwo.textTwo')}</h5>
                        <div className="absolute w-[280px] bottom-0 translate-y-[-40px] translate-x-[10px] sm:translate-y-[-30px] sm:translate-x-[20px] z-[-1]">
                            <img src="/image/card-job-two.svg" alt="image-mars-brand" />
                        </div>
                        <div className="absolute translate-y-[-335px] sm:translate-y-[-120px] bottom-0 z-[-1]">
                            <img src="/image/card-two.png" alt="image-mars" />
                        </div>
            
                        <div className="flex flex-row items-center justify-center gap-3  absolute bottom-0 translate-y-[-20px] translate-x-[200px] sm:translate-x-[300px]">
                            <div className="w-[50px] h-[1px] bg-[#FF3100]"></div>
                            <h5 className="font-jost text-[#FF3100]">02</h5>
                        </div>
                    </div>    
                </div>

            </div> 
            <div className="flex items-center justify-center flex-col lg:flex-row gap-2 mt-2">
                <div className="card-job-two sm:w-[470px] w-[300px] lg:w-[410px] h-[500px] sm:h-[280px] relative transform transition-transform duration-300 hover:scale-105">
                    {/* <h5 className="font-jost text-zinc-50 text-2xl mt-4 pl-10 sm:text-3xl font-bold">Frontend<br /> на React </h5> */}
                    <h5 className="font-jost text-zinc-50 text-2xl mt-4 pl-10 sm:text-3xl font-bold">{t('cardJobThree.textOne')}<br />{t('cardJobThree.textTwo')}</h5>
                    {/* <h6 className="font-jost text-zinc-300  mt-5 mx-7">Разрабатываем современный, быстрый и отзывчивый интерфейс с использованием React. Благодаря компонентной архитектуре сайт легко масштабируется и быстро работает даже при высокой нагрузке. Дизайн адаптивен и отлично смотрится на всех устройствах — от мобильного до десктопа.</h6> */}
                    <h6 className="font-jost text-blue-200 mt-5 mx-7">{t('cardJobThree.description')}</h6>
                    <div className="absolute w-[280px] bottom-0 translate-y-[2px] translate-x-[2px] z-[-1]">
                        <img src="/image/cosmonavt-card.svg" alt="cosmonavt-image" />
                    </div>
                    <div className="absolute translate-y-[0px] translate-x-[185px] sm:translate-x-[300px] bottom-0 z-[-2]">
                        <img src="/image/warning-card.svg" alt="mars-warning-image" />
                    </div>
                    <div className="flex flex-row items-center justify-center gap-3  absolute bottom-0 translate-y-[-460px] translate-x-[200px] sm:translate-y-[-240px] sm:translate-x-[300px]">
                        <div className="w-[50px] h-[1px] bg-[#FF3100]"></div>
                        <h5 className="font-jost text-[#FF3100]">03</h5>
                    </div>
                </div>
                <div className="card-job-one w-[300px] sm:w-[470px] h-[500px] sm:h-[280px] relative transform transition-transform duration-300 hover:scale-105">
                    {/* <h6 className="font-jost text-zinc-300 mt-5 mx-10">С Django и React можно реализовать множество фишек: личные кабинеты, онлайн-оплаты, чаты, фильтры, умный поиск, уведомления, адаптивные формы, панели администратора  — выбор функциональности ограничен воображением</h6> */}
                    <h6 className="font-jost text-blue-200 mt-5 mx-10">{t('cardJobFour.description')}</h6>
                    {/* <h5 className="font-jost text-zinc-50 text-3xl mt-10 pl-10 font-bold">Backend<br />на Django</h5> */}
                    <h5 className="font-jost text-zinc-50 text-3xl mt-10 pl-10 font-bold">{t('cardJobFour.textOne')}<br />{t('cardJobFour.textTwo')}</h5>
                    <div className="absolute translate-y-[1px] translate-x-[0px]  bottom-0 z-[-1]">
                        <img src="/image/face.svg" alt="face-image-mars" />
                    </div>
                    <div className="absolute bottom-0 translate-y-[20px] translate-x-[-20px] sm:translate-y-[-20px] sm:translate-x-[220px]">
                        <img src="/image/card-decor.svg" alt="mars-image"/>
                    </div>
                    <div className="absolute bottom-0 translate-y-[-210px] translate-x-[177px] sm:translate-y-[4px] sm:translate-x-[350px] z-[1]">
                        <img src="/image/denger-card.svg" alt="denger" />
                    </div> 
                    <div className="flex flex-row items-center justify-center gap-3 rotate-90 origin-left absolute bottom-0 translate-y-[-115px] translate-x-[280px] sm:translate-x-[440px]">
                        <div className="w-[50px] h-[1px] bg-[#FF3100]"></div>
                        <h5 className="font-jost text-[#FF3100]">04</h5>
                    </div>
                </div>

            
            </div>   
            <div className="flex items-center justify-center mt-2">
                    <div className="card-job-three w-[300px] lg:w-[900px] lg:h-[280px] h-[540px] sm:w-[470px] sm:h-[400px] relative transform transition-transform duration-300 hover:scale-105">
                        {/* <h5 className="font-jost text-zinc-50 text-2xl mt-4 pl-10 sm:text-3xl font-bold">Хостинг<br />и поддержка </h5> */}
                        <h5 className="font-jost text-zinc-50 text-2xl mt-4 pl-10 sm:text-3xl font-bold">{t('cardJobFive.textOne')}<br />{t('cardJobFive.textTwo')}</h5>
                        {/* <h6 className="font-jost text-blue-200  mt-10 mx-7 lg:w-[700px] w-[270px]">Разрабатываем современный, быстрый и отзывчивый интерфейс с использованием React. Благодаря компонентной архитектуре сайт легко масштабируется и быстро работает даже при высокой нагрузке. Дизайн адаптивен и отлично смотрится на всех устройствах — от мобильного до десктопа.</h6> */}
                        <h6 className="font-jost text-blue-200  mt-10 mx-7 lg:w-[700px] w-[270px]">{t('cardJobFive.description')}</h6>
                        

                        <div className="absolute w-[280px] bottom-0 sm:translate-y-[-2px] sm:translate-x-[10px] z-[-1]">
                            <img src="/image/planat-card.svg"
                            alt="Лого" />
                        </div>

                        <div className="absolute w-[270px] translate-y-[-480px] translate-x-[-5px] lg:translate-y-[-220px] lg:translate-x-[600px] sm:translate-y-[-340px] sm:translate-x-[95px] bottom-0 z-[-2]">
                            <img src="/image/text-card.svg" alt="Лого" />
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3 absolute bottom-0 translate-y-[-20px] translate-x-[30px]">
                            <div className="w-[50px] h-[1px] bg-[#FF3100]"></div>
                            <h5 className="font-jost text-[#FF3100]">03</h5>
                        </div>
                    </div>
                </div>
        </>
    );
}
export default CardJob;