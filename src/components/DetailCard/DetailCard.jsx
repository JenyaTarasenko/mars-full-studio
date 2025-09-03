import { useTranslation } from 'react-i18next';

function DetailCard(){
    const { t } = useTranslation();

    return(
        <>
            <div className="w-full flex justify-center section-card-main mt-10">

                <div className="overflow-x-auto overflow-y-hidden py-6">
              
                    <div className="flex space-x-4">
                    
                        <div className="card-main w-[280px] h-[300px] flex  flex-col  text-white relative shrink-0 ">

                            <div className="flex items-center px-2 translate-x-[235px] translate-y-[10px]">
                                <img src="/image/elips-design.svg" alt="logo-card-style" className="w-[25px]"/>
                            </div>
                        
                            <div className="flex items-center flex-row gap-5 mt-[90px] px-5">
                                <img src="/image/card-design1.svg" />
                                <img src="/image/card-design2.svg" />
                                <img src="/image/card-design3.svg" />
                            </div>

                            <div  className="flex items-start pl-4 mt-[30px]">
                                {/* <h5 className="font-jost">Дизайн</h5> */}
                                <h5 className="font-jost">{t('DetailCard.Design')}</h5>
                            </div>
                            <div className="mt-5 px-4">
                            <h6 className="font-jost font-light text-xs text-zinc-400">{t('DetailCard.DesignText')}</h6>
                                {/* <h6 className="font-jost font-light text-xs text-zinc-400">Наша студия использует Figma для разработки современных веб-интерфейсов, а также Illustrator и Photoshop для создания и обработки графики..</h6> */}
                            </div>
                            <img src="/image/cifra-one.svg"
                            alt="Лого"
                            className="absolute translate-x-[-45px] translate-y-[-50px]"/>

                        </div>
                        
                        <div className="card-main w-[280px] h-[300px] flex  flex-col  text-white relative shrink-0">
                            <div className="flex items-center px-2 translate-x-[235px] translate-y-[10px]">
                                <img src="/image/elips-design.svg" alt="logo-card-style" className="w-[25px]"/>
                            </div>
                            <div className="flex items-center flex-row gap-5 mt-[90px] px-5">
                                <img src="/image/card-design4.svg" />
                                <img src="/image/card-design5.svg" />
                                <img src="/image/card-design6.svg" />


                            </div>
                            <div  className="flex items-start pl-4 mt-[30px]">
                                {/* <h5 className="font-jost">Верстка</h5> */}
                                <h5 className="font-jost">{t('DetailCard.Frontend')}</h5>
                            </div>
                            <div className="mt-5 px-4">
                            <h6 className="font-jost font-light text-xs text-zinc-400">{t('DetailCard.FrontendText')}</h6>
                                {/* <h6 className="font-jost font-light text-xs text-zinc-400">Мы разрабатываем интерфейсы с использованием React, HTML, CSS, Vite, React Hooks API</h6> */}
                            </div>
                            <img src="/image/cifra-two.svg"
                            alt="Лого"
                            className="absolute translate-x-[-45px] translate-y-[-50px]"/>     
                        </div>

                        <div className="card-main w-[280px] h-[300px] flex  flex-col  text-white relative shrink-0">
                            <div className="flex items-center px-2 translate-x-[235px] translate-y-[10px]">
                                <img src="/image/elips-design.svg" alt="logo-card-style" className="w-[25px]"/>
                            </div>
                            <div className="flex items-center flex-row gap-5 mt-[90px] px-5">
                                <img src="/image/card-design7.svg" />
                                <img src="/image/card-design8.svg" />
                                <img src="/image/card-design9.svg" />
                            </div>
                            <div  className="flex items-start pl-4 mt-[30px]">
                                {/* <h5 className="font-jost">Програмирование</h5> */}
                                <h5 className="font-jost">{t('DetailCard.Backend')}</h5>
                            </div>
                            <div className="mt-5 px-4">
                            <h6 className="font-jost font-light text-xs text-zinc-400"></h6>
                            <h6 className="font-jost font-light text-xs text-zinc-400">{t('DetailCard.BackendText')}</h6>
                                {/* <h6 className="font-jost font-light text-xs text-zinc-400">Мы разрабатываем серверную часть с использованием Python и Django,DRF, с базой данных PostgreSQL, SQLite</h6> */}
                            </div>
                            <img src="/image/cifra-three.svg"
                            alt="Лого"
                            className="absolute translate-x-[-45px] translate-y-[-50px]"/>         
                        </div>
                    
                        <div className="card-main w-[280px] h-[300px] flex  flex-col  text-white relative shrink-0">
                            <div className="flex items-center px-2 translate-x-[235px] translate-y-[10px]">
                                <img src="/image/elips-design.svg" alt="logo-card-style" className="w-[25px]"/>
                            </div>
                            <div className="flex items-center flex-row gap-5 mt-[90px] px-5">
                                <img src="/image/card-design10.svg" />
                                <img src="/image/card-design11.svg" />
                                <img src="/image/card-design12.svg" />
                            </div>
                            <div  className="flex items-start pl-4 mt-[30px]">
                            <h5 className="font-jost">{t('DetailCard.Server')}</h5>
                                {/* <h5 className="font-jost">Сервер</h5> */}
                            </div>
                            <div className="mt-5 px-4">
                            <h6 className="font-jost font-light text-xs text-zinc-400">{t('DetailCard.ServerText')}</h6>
                                {/* <h6 className="font-jost font-light text-xs text-zinc-400">Мы развёртываем веб-сайты на хостинге PythonAnywhere, настраиваем SSL-сертификаты для безопасного соединения и предоставляем поддержку</h6> */}
                            </div>
                            <img src="/image/cifra-four.svg"
                            alt="Лого"
                            className="absolute translate-x-[-45px] translate-y-[-50px]"/>
                        </div>
                    
                    </div>  

                </div>

            </div>
        </>
    );
}

export default DetailCard;