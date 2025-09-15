
import { useTranslation } from 'react-i18next';

function ReviewsSection(){
    const { t } = useTranslation();
    return(
        <>
            <div className="w-full overflow-x-hidden flex justify-center items-center max-w-[1000px] mx-auto mt-[100px] relative">
                <div className="inline-flex gap-20 px-4 slider">
                    {/* card */}
                    <div className="card-review flex items-center flex-col w-[280px] h-[340px] bg-[#D9D9D9]/[0.03] border border-[#D9D9D9]/[0.1]" style={{borderRadius:"40px"}}>
                        <div className="flex items-start justify-between w-full mt-5 ">
                            <img src="/image/arms.png" alt="image-review" className="w-[70px] h-[60px] overflow-hidden flex-shrink-0 ml-5"/>
                            <div className="w-[40px] h-[40px] rounded-full border border-white mr-5"></div>
                            </div>
                            <img src="/image/rew-decor.svg" alt="image-review" className="absolute"/>

                            <div className="flex flex-col font-jost ">
                            <p className="text-base text-stone-100 ml-5 mt-5 font-normal">{t('ReviewsSection.CardOneName')}</p>
                            {/* <p className="text-base text-stone-100 ml-5 mt-5 font-normal">Руки Милости</p> */}
                            <h6 className="text-sm font-light text-blue-200 px-5 mt-10">{t('ReviewsSection.CardOneText')}</h6>
                            {/* <h6 className="text-sm font-light text-blue-200 px-5 mt-10">Мы искренне благодарны за потрясающий сайт, созданный для нашей благотворительной организации.</h6> */}
                            <img src="/image/star.svg" alt="image-review" className="mt-10 w-[100px] px-5"/>
                        </div>
                    </div>
                      {/* card */}
                    <div className="card-review flex items-center flex-col w-[280px] h-[340px] bg-[#D9D9D9]/[0.03] border border-[#D9D9D9]/[0.1]" style={{borderRadius:"40px"}}>
                        <div className="flex items-start justify-between w-full mt-5 ">
                            <img src="/image/ser.png" alt="image-review" className="w-[200px] h-[90px] rounded-full object-cover ml-5"/>
                            <div className="w-[40px] h-[40px] rounded-full border border-white mr-5"></div>
                            </div>
                            <img src="/image/rew-decor.svg" alt="image-review" className="absolute"/>

                            <div className="flex flex-col font-jost ">
                            <p className="text-base text-stone-100 ml-5 mt-1 font-normal">Floor Masters</p>
                            <h6 className="text-sm font-light text-blue-200 px-5 mt-5">{t('ReviewsSection.CardTwoText')}</h6>
                            {/* <h6 className="text-sm font-light text-blue-200 px-5 mt-5">Крутой дизайн, современный и функциональный сайт который помогает в развитии нашего бизнесса в Тороното, очень довольны результатом </h6> */}
                            <img src="/image/star.svg" alt="image-review" className="mt-5 w-[100px] px-5"/>

                        </div>
                    </div>
                    {/* card */}
                    <div className="card-review flex items-center flex-col w-[280px] h-[340px] bg-[#D9D9D9]/[0.03] border border-[#D9D9D9]/[0.1]" style={{borderRadius:"40px"}}>
                            <div className="flex items-start justify-between w-full mt-5 ">
                                <img src="/image/bulder.png" alt="image-review" className="w-[70px] h-[70px] rounded-full object-cover ml-5"/>
                                <div className="w-[40px] h-[40px] rounded-full border border-white mr-5"></div>
                                </div>
                                <img src="/image/rew-decor.svg" alt="image-review" className="absolute"/>

                                <div className="flex flex-col font-jost ">
                                <p className="text-base text-stone-100 ml-5 mt-1 font-normal">Hause Doctor</p>
                                <h6 className="text-sm font-light text-blue-200 px-5 mt-10">{t('ReviewsSection.CardThreeText')}</h6>
                                {/* <h6 className="text-sm font-light text-blue-200 px-5 mt-10">Яркий сильный дизайн, сайт работает очень быстро,спасибо команде Mars.</h6> */}
                                <img src="/image/star.svg" alt="image-review" className="mt-20 w-[100px] px-5"/>

                            </div>
                    </div>
                    {/* card */}

                      {/* card */}
                      <div className="card-review flex items-center flex-col w-[280px] h-[340px] bg-[#D9D9D9]/[0.03] border border-[#D9D9D9]/[0.1]" style={{borderRadius:"40px"}}>
                        <div className="flex items-start justify-between w-full mt-5 ">
                            <img src="/image/arms.png" alt="image-review" className="w-[70px] h-[60px] overflow-hidden flex-shrink-0 ml-5"/>
                            <div className="w-[40px] h-[40px] rounded-full border border-white mr-5"></div>
                            </div>
                            <img src="/image/rew-decor.svg" alt="image-review" className="absolute"/>

                            <div className="flex flex-col font-jost ">
                            <p className="text-base text-stone-100 ml-5 mt-5 font-normal">{t('ReviewsSection.CardOneName')}</p>
                            {/* <p className="text-base text-stone-100 ml-5 mt-5 font-normal">Руки Милости</p> */}
                            <h6 className="text-sm font-light text-blue-200 px-5 mt-10">{t('ReviewsSection.CardOneText')}</h6>
                            {/* <h6 className="text-sm font-light text-blue-200 px-5 mt-10">Мы искренне благодарны за потрясающий сайт, созданный для нашей благотворительной организации.</h6> */}
                            <img src="/image/star.svg" alt="image-review" className="mt-10 w-[100px] px-5"/>
                        </div>
                    </div>
                      {/* card */}
                    <div className="card-review flex items-center flex-col w-[280px] h-[340px] bg-[#D9D9D9]/[0.03] border border-[#D9D9D9]/[0.1]" style={{borderRadius:"40px"}}>
                        <div className="flex items-start justify-between w-full mt-5 ">
                            <img src="/image/ser.png" alt="image-review" className="w-[200px] h-[90px] rounded-full object-cover ml-5"/>
                            <div className="w-[40px] h-[40px] rounded-full border border-white mr-5"></div>
                            </div>
                            <img src="/image/rew-decor.svg" alt="image-review" className="absolute"/>

                            <div className="flex flex-col font-jost ">
                            <p className="text-base text-stone-100 ml-5 mt-1 font-normal">Floor Masters</p>
                            <h6 className="text-sm font-light text-blue-200 px-5 mt-5">{t('ReviewsSection.CardTwoText')}</h6>
                            {/* <h6 className="text-sm font-light text-blue-200 px-5 mt-5">Крутой дизайн, современный и функциональный сайт который помогает в развитии нашего бизнесса в Тороното, очень довольны результатом </h6> */}
                            <img src="/image/star.svg" alt="image-review" className="mt-5 w-[100px] px-5"/>

                        </div>
                    </div>
                    {/* card */}
                    <div className="card-review flex items-center flex-col w-[280px] h-[340px] bg-[#D9D9D9]/[0.03] border border-[#D9D9D9]/[0.1]" style={{borderRadius:"40px"}}>
                            <div className="flex items-start justify-between w-full mt-5 ">
                                <img src="/image/bulder.png" alt="image-review" className="w-[70px] h-[70px] rounded-full object-cover ml-5"/>
                                <div className="w-[40px] h-[40px] rounded-full border border-white mr-5"></div>
                                </div>
                                <img src="/image/rew-decor.svg" alt="image-review" className="absolute"/>

                                <div className="flex flex-col font-jost ">
                                <p className="text-base text-stone-100 ml-5 mt-1 font-normal">Hause Doctor</p>
                                <h6 className="text-sm font-light text-blue-200 px-5 mt-10">{t('ReviewsSection.CardThreeText')}</h6>
                                {/* <h6 className="text-sm font-light text-blue-200 px-5 mt-10">Яркий сильный дизайн, сайт работает очень быстро,спасибо команде Mars.</h6> */}
                                <img src="/image/star.svg" alt="image-review" className="mt-20 w-[100px] px-5"/>

                            </div>
                    </div>
                    {/* card */}


                 
                    
                </div>
            </div>
        </>
    )
}
export default ReviewsSection;
