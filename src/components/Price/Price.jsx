// import './style.css';
import { useTranslation } from 'react-i18next';

function Price(){
    const { t } = useTranslation();
    return(
        <>
        <div className="flex items-center justify-center relative section-price-elips-destop flex-row">
        
            <div className="flex items-center justify-center">
                <img src="/image/elips-center.svg" class="animate-spin-slow-new absolute" style={{marginTop:"820px"}} />
                <div className="flex items-center  flex-col justify-center absolute translate-y-[400px] gap-3">
                    <h5 className="font-jost text-6xl italic" style={{color:"#FF3100", fontWeight:"900"}}>от 300 $</h5>
                    <h6 className="font-jost text-4xl text-white font-bold">Многостраничные</h6>
                </div>
            </div>
        
            <div className="flex items-center justify-center">
                <img src="/image/elips-left.svg" class="animate-spin-slow-new absolute mr-[600px]" style={{marginTop:"820px"}} />
            <div className="flex items-center  flex-col justify-center absolute translate-y-[400px] translate-x-[300px] gap-3">
                <h5 className="font-jost text-4xl italic" style={{color:"#FF3100", fontWeight:"900"}}>от 400 $</h5>
                <h6 className="font-jost text-2xl text-white font-bold">Интернет магазины</h6>
            </div>
        </div>
        
        <div className="flex items-center justify-center">
            <img src="/image/elips-right.svg" class="animate-spin-slow-new absolute ml-[600px]" style={{marginTop:"820px"}} />
           
            <div className="flex items-center  flex-col justify-center absolute translate-y-[400px] translate-x-[-300px] gap-3">
                <h5 className="font-jost text-4xl italic" style={{color:"#FF3100", fontWeight:"900"}}>от 100 $</h5>
                <h6 className="font-jost text-2xl text-white font-bold">Landing Page</h6>
            </div>
            </div>

        </div>

        </>
    );
}
export default Price;  