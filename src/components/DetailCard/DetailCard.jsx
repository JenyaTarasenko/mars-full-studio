import { useTranslation } from 'react-i18next';
import ElipsDesign from "../../assets/image/elips-design.svg";
import CardDesign1 from "../../assets/image/card-design1.svg";
import CardDesign2 from "../../assets/image/card-design2.svg";
import CardDesign3 from "../../assets/image/card-design3.svg";
import One from "../../assets/image/cifra-one.svg";
import CardDesign6 from "../../assets/image/card-design6.svg";
import CardDesign4 from "../../assets/image/card-design4.svg";
import CardDesign5 from "../../assets/image/card-design5.svg";
import Two from "../../assets/image/cifra-two.svg"
import CardDesign7 from "../../assets/image/card-design7.svg";
import CardDesign8 from "../../assets/image/card-design8.svg";
import CardDesign9 from "../../assets/image/card-design9.svg";
import Three from "../../assets/image/cifra-three.svg";
import CardDesign10 from "../../assets/image/card-design10.svg";
import CardDesign11 from "../../assets/image/card-design11.svg";
import CardDesign12 from "../../assets/image/card-design12.svg";
import Four from "../../assets/image/cifra-four.svg";


function DetailCard(){
    const { t } = useTranslation();

    return(
        <>
            <div className="w-full flex justify-center section-card-main mt-20">

                <div className="overflow-x-auto overflow-y-hidden py-6">
              
                    <div className="flex space-x-4">
                    
                        <div className="card-main w-[280px] h-[300px] flex  flex-col  text-white relative shrink-0 ">

                            <div className="flex items-center px-2 translate-x-[235px] translate-y-[10px]">
                                <img src={ElipsDesign } alt="logo-card-style" className="w-[25px]"/>
                            </div>
                        
                            <div className="flex items-center flex-row gap-5 mt-[90px] px-5">
                               
                                <img src={CardDesign1} className='w-[40px]' loading="lazy"/>
                                <img src={CardDesign2} className='w-[40px]' loading="lazy"/>
                                <img src={CardDesign3} className='w-[40px]' loading="lazy"/>
                            </div>

                            <div  className="flex items-start pl-4 mt-[30px]">
                               
                                <h5 className="font-jost">{t('DetailCard.Design')}</h5>
                            </div>
                            <div className="mt-5 px-4">
                            <h6 className="font-jost font-light text-xs text-zinc-400">{t('DetailCard.DesignText')}</h6>
                                {/* <h6 className="font-jost font-light text-xs text-zinc-400">Наша студия использует Figma для разработки современных веб-интерфейсов, а также Illustrator и Photoshop для создания и обработки графики..</h6> */}
                            </div>
                            <img src={One}
                                alt="one"
                            className="absolute translate-x-[-45px] translate-y-[-50px]"/>

                        </div>
                        
                        <div className="card-main w-[280px] h-[300px] flex  flex-col  text-white relative shrink-0">
                            <div className="flex items-center px-2 translate-x-[235px] translate-y-[10px]">
                                <img src={ElipsDesign} alt="logo-card-style" className="w-[25px]"/>
                            </div>
                            <div className="flex items-center flex-row gap-5 mt-[90px] px-5">
                                {/* <img src="/image/card-design4.svg" />
                                <img src="/image/card-design5.svg" />
                                <img src="/image/card-design6.svg" /> */}
                                <img src={CardDesign4} className='w-[40px]' loading="lazy" />
                                <img src={CardDesign5} className='w-[40px]' loading="lazy"/>
                                <img src={CardDesign6} className='w-[40px]' loading="lazy"/>


                            </div>
                            <div  className="flex items-start pl-4 mt-[30px]">
                                {/* <h5 className="font-jost">Верстка</h5> */}
                                <h5 className="font-jost">{t('DetailCard.Frontend')}</h5>
                            </div>
                            <div className="mt-5 px-4">
                            <h6 className="font-jost font-light text-xs text-zinc-400">{t('DetailCard.FrontendText')}</h6>

                            </div>
                            <img src={Two}
                  
                            alt="Лого"
                            className="absolute translate-x-[-45px] translate-y-[-50px]"/>     
                        </div>

                        <div className="card-main w-[280px] h-[300px] flex  flex-col  text-white relative shrink-0">
                            <div className="flex items-center px-2 translate-x-[235px] translate-y-[10px]">
                                <img src={ElipsDesign} alt="logo-card-style" className="w-[25px]"/>
                            </div>
                            <div className="flex items-center flex-row gap-5 mt-[90px] px-5">
                                <img src={CardDesign7} className='w-[40px]' loading="lazy"/>
                                <img src={CardDesign8} className='w-[40px]' loading="lazy"/>
                                <img src={CardDesign9} className='w-[40px]' loading="lazy"/>
                              
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
                                <img src={Three}
                            
                            alt="Лого"
                            className="absolute translate-x-[-45px] translate-y-[-50px]"/>         
                        </div>
                    
                        <div className="card-main w-[280px] h-[300px] flex  flex-col  text-white relative shrink-0">
                            <div className="flex items-center px-2 translate-x-[235px] translate-y-[10px]">
                                <img src={ElipsDesign} alt="logo-card-style" className="w-[25px]"/>
                            </div>
                            <div className="flex items-center flex-row gap-5 mt-[90px] px-5">
                                <img src={CardDesign10} className='w-[40px]' loading="lazy"/>
                                <img src={CardDesign11} className='w-[40px]' loading="lazy"/>
                                <img src={CardDesign12} className='w-[40px]' loading="lazy"/>
                              
                            </div>
                            <div  className="flex items-start pl-4 mt-[30px]">
                            <h5 className="font-jost">{t('DetailCard.Server')}</h5>
                            </div>
                            <div className="mt-5 px-4">
                            <h6 className="font-jost font-light text-xs text-zinc-400">{t('DetailCard.ServerText')}</h6>

                            </div>
                            <img src={Four}
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