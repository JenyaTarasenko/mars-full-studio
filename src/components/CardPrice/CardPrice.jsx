import './style.css';
import { useTranslation } from 'react-i18next';

function CardPrice(){
    const { t } = useTranslation();

    return(
        <div class="flex flex-row items-center justify-center mt-20 gap-5">
            <div class="card-price w-[280px] h-[450px] flex flex-col ">
                <img src="/image/elips-price.svg" alt="elips" className='w-[40px] translate-x-[220px] translate-y-[20px] opacity-20'/>

            </div>
            <div class="card-price w-[280px] h-[450px] ">

            </div>
        </div>
    );
}

export default CardPrice;