import './style.css';
import { useTranslation } from 'react-i18next';
import StarIcon from "../../assets/image/star-icon.svg";
import ElipsCard from "../../assets/image/elips-card.svg";
import grai from "../../assets/image/grai.svg";
import TextDecor from "../../assets/image/text-decor.svg";
import RacketIcon from "../../assets/image/racket-icon.svg";
import planat from "../../assets/image/planat.svg";




function BastCard(){
    const { t } = useTranslation();
    return(
    <div className="w-full flex justify-center section-card-main mt-[50px]">
        <div className="overflow-x-auto overflow-y-hidden py-6">
            {/* <!-- карта 1 --> */}
            <div className="flex space-x-4">
            {/* <!-- карта 1 --> */}
            <div className="card-main w-[280px] h-[210px] flex  flex-col  text-white relative shrink-0">

                {/* <!-- ikon --> */}
                <div className="icon-main-card flex items-center flex-row justify-between absolute top-0 left-0 w-full px-2 mt-2">
                    <img src={StarIcon} alt="logo-card-style" className="animate-spin-slow"/>
                    {/* <img src="/image/star-icon.svg" alt="logo-card-style" className="animate-spin-slow"/> */}
                    <img src={ElipsCard} alt="logo-card-style"/>
                    {/* <img src="/image/elips-card.svg" alt="logo-card-style"/> */}
                </div>
                {/* <!-- ikon --> */}


                <div  className="flex items-start pl-4 mt-[80px]">
                {/* <h5 className="font-jost">Одностраничные </h5> */}
                <h5 className="font-jost">{t('cardBast.text')}</h5>
                </div>
            
                <div className="mt-5 px-4">
                    {/* <h6 className="font-jost font-light text-sm text-zinc-400">Быстрые и эффективные, идеально подходят для презентации одного продукта или услуги.</h6> */}
                    <h6 className="font-jost font-light text-sm text-zinc-400">{t('cardBast.solution')}</h6>
                </div>

                <img src={grai}
                alt="Лого"
                className="absolute ml-[50px]" style={{opacity:"60%"}}/>

                <img src={TextDecor}
                alt="Лого"
                className="absolute ml-[255px] mt-[50px]"/>

                <span className="absolute ml-[250px] mt-[180px] font-jost font-light text-xs" style={{opacity:"40%"}}>01</span>
            </div>
            {/* <!-- карта 1 --> */}

            {/* <!-- карта 2 --> */}
            <div className="card-main w-[280px] h-[210px] flex  flex-col text-white relative shrink-0">

                {/* <!-- ikon --> */}
                <div className="icon-main-card flex items-center flex-row justify-between absolute top-0 left-0 w-full px-2 mt-2">
                    <img src={RacketIcon} alt="logo-card-style" className="animate-spin-slow"/>
                    <img src={ElipsCard} alt="logo-card-style"/>
                </div>
                {/* <!-- ikon --> */}

                <div className="flex items-start pl-4" style={{marginTop:"80px"}}>
                    {/* <h5 className="font-jost">Многостраничные</h5> */}
                    <h5 className="font-jost">{t('cardBast.multi-page')}</h5>
                </div>
            
                <div className="mt-5 px-4">
                    {/* <h6 className="font-jost font-light text-sm text-zinc-400">Удобная структура для компаний с большим объёмом информации, услуг или контента.</h6> */}
                    <h6 className="font-jost font-light text-sm text-zinc-400">{t('cardBast.multi-page-text')}</h6>
                </div>

                <img src={grai}
                alt="Лого"
                className="absolute ml-[50px]" style={{opacity:"60%"}}/>

                <img src={TextDecor}
                alt="Лого"
                className="absolute ml-[255px] mt-[50px]"/>

                <span className="absolute ml-[250px] mt-[180px] font-jost font-light text-xs" style={{opacity:"40%"}}>02</span>
            </div>
            {/* <!-- карта 2 --> */}

            {/* <!-- карта 3--> */}
            <div className="card-main w-[280px] h-[210px] flex  flex-col text-white relative shrink-0">

                {/* <!-- ikon --> */}
                <div className="icon-main-card flex items-center flex-row justify-between absolute top-0 left-0 w-full px-2 mt-2">
                    <img src={planat} alt="logo-card-style" className="animate-spin-slow"/>
                    <img src={ElipsCard} alt="logo-card-style"/>
                </div>
                {/* <!-- ikon --> */}

                <div  className="flex items-start pl-4 mt-[80px]">
                    {/* <h5 className="font-jost">Интернет-магазины</h5> */}
                    <h5 className="font-jost">{t('cardBast.onlineStores')}</h5>
                </div>
            
                <div className="mt-5 px-4">
                    {/* <h6 className="font-jost font-light text-sm text-zinc-400">Полноценные площадки для онлайн-продаж с каталогом, корзиной и системой оплаты.</h6> */}
                    <h6 className="font-jost font-light text-sm text-zinc-400">{t('cardBast.onlineStoresText')}</h6>
                </div>

                <img src={grai}
                alt="Лого"
                className="absolute ml-[50px]" style={{opacity:"60%"}}/>

                <img src={TextDecor}
                alt="Лого"
                className="absolute ml-[255px] mt-[50px]"/>

                <span className="absolute ml-[250px] mt-[180px] font-jost font-light text-xs" style={{opacity:"40%"}}>03</span>
            </div>
            {/* <!-- карта 3--> */}
            
            </div>  

        </div>
    </div>
    );
}
export default BastCard;