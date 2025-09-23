import './style.css';
import { useTranslation } from 'react-i18next';
import PriceCard1 from "../../assets/image/price-card1.svg";
import DollarOne from "../../assets/image/100$.svg";
import PriceCard2 from "../../assets/image/price-card3.svg";
import DollarTwo from "../../assets/image/200$.svg";
import PriceCard3 from "../../assets/image/price-card4.png";
import DollarThree from "../../assets/image/300$.svg";
import PriceCard4 from '../../assets/image/price-card5.svg';
import DollarFour from "../../assets//image/200$.svg";


function CardPrice(){
    const { t } = useTranslation();

    return(
        <div className="flex flex-col  lg:flex-row items-center justify-center gap-5 mt-[200px]">
            <div className="card-price w-[300px] h-[650px] flex flex-col items-center relative transform transition-transform duration-300 hover:scale-105">

                {/* <h6 class="font-jost text-orange-400 mt-20 text-2xl">Одностраничные</h6> */}
                <h6 className="font-jost text-orange-400 mt-20 text-2xl">{t('cardPrice.CardOne')}</h6>

                <div className="flex justify-start items-center mt-10 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">1</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm"> Уникальный дизайн</p> */}
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardOneDesign')}</p>
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">2</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Структурированный контент</p> */}
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardOneContent')}</p>
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">3</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Быстрая загрузка в любой<br/>точке мира</p> */}
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardOneLoadingOne')}<br/>{t('cardPrice.CardOneLoadingTwo')}</p>
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">4</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Интерактивные элементы <br/>кнопки,формы,соц.сети</p> */}
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardOneElementOne')}<br/>{t('cardPrice.CardOneElementTwo')}</p>
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">5</p>
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardOneAnimationOne')}<br/>{t('cardPrice.CardOneAnimationTwo')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Анимации <br/>декоративные элементы</p> */}
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">6</p>
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardOneProtectionOne')}<br/>{t('cardPrice.CardOneProtectionTwo')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Защита НTTPS, защита <br/> от спама и уязвимостей</p> */}
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">7</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Бесплатная поддержка</p> */}
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardOneSupport')}</p>
                </div>
                <img src={PriceCard1} alt="elips" className='absolute z-[-1] translate-y-[330px] translate-x-[-40px]'/>
                <img src={DollarOne} alt="elips" className='absolute z-[-1] translate-y-[50px] translate-x-[0] w-[300px]'/>

            </div>

            <div className="card-price w-[300px] h-[650px] flex flex-col items-center relative transform transition-transform duration-300 hover:scale-105">

                {/* <h6 class="font-jost text-orange-400 mt-20 text-2xl">Многостраничные</h6> */}
                <h6 className="font-jost text-orange-400 mt-20 text-2xl">{t('cardPrice.CardTwo')}</h6>

                <div className="flex justify-start items-center mt-10 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">1</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Уникальный дизайн</p> */}
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardTwoDesign')}</p>
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">2</p>
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardTwoPages')}</p> 
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Множество разделов и страниц.</p> */}
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">3</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Быстрая загрузка в любой<br/>точке мира</p> */}
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardTwoLoadOne')}<br/>{t('cardPrice.CardTwoLoadTwo')}</p>
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">4</p>
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardTwoСabinet')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Личный кабинет пользователя</p> */}
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">5</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Формы обратной связи — заявки,<br />подписки, обратный звонок</p> */}
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardTwoFormOne')}<br />{t('cardPrice.CardTwoFormTwo')}</p>
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">6</p>
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardTwoLanguage')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Мультиязычность</p> */}
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">7</p>
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardTwoSocOne')}<br />{t('cardPrice.CardTwoSocTwo')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Интеграции — соцсети,<br />карты, мессенджеры</p> */}
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">8</p>
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardTwoProtectionOne')}<br/>{t('cardPrice.CardTwoProtectionTwo')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Защита НTTPS, защита <br/> от спама и уязвимостей</p> */}
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">9</p>
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardTwoSupport')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Бесплатная поддержка</p> */}
                </div>
                <img src={PriceCard2} alt="elips" className='absolute z-[-1] translate-y-[350px] translate-x-[40px]'/>
                <img src={DollarTwo} alt="elips" className='absolute z-[-1] translate-y-[50px] translate-x-[0] w-[300px]'/>

            </div>
            <div className="card-price w-[300px] h-[650px] flex flex-col items-center relative transform transition-transform duration-300 hover:scale-105">

                {/* <h6 class="font-jost text-orange-400 mt-20 text-2xl">Интернет магазины</h6> */}

                <h6 className="font-jost text-orange-400 mt-20 text-2xl">{t('cardPrice.CardThree')}</h6>

                <div className="flex justify-start items-center mt-10 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">1</p>
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardThreeDesign')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm"> Уникальный дизайн</p> */}
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">2</p>
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardThreeCategoryOne')}<br />{t('cardPrice.CardThreeCategoryTwo')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Каталог товаров — с категориями, фильтрами,<br />сортировкой и карточками.</p> */}
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">3</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Поиск по товарам — быстрый <br />доступ к нужному продукту</p> */}
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardThreeSearchOne')}<br />{t('cardPrice.CardThreeSearchTwo')}</p>
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">4</p>
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardThreeBasketOne')}<br />{t('cardPrice.CardThreeBasketTwo')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Корзина покупок — добавление,<br />редактирование и удаление товаров.</p> */}
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">5</p>
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardThreeCabinet')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Личный кабинет пользователя</p> */}
                </div>

                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">6</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Системы оплаты</p> */}
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardThreePaiment')}</p>
                </div>
                
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">7</p>
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardThreeProtectionOne')}<br/>{t('cardPrice.CardThreeProtectionTwo')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Защита НTTPS, защита <br/> от спама и уязвимостей</p> */}
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">8</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Бесплатная поддержка</p> */}
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardThreeSupport')}</p>
                </div>
                <img src={PriceCard3} alt="elips" className='absolute z-[-1] translate-y-[360px] translate-x-[40px]'/>
                <img src={DollarThree} alt="elips" className='absolute z-[-1] translate-y-[50px] translate-x-[0] w-[300px]'/>

            </div>

            <div className="card-price w-[300px] h-[650px] flex flex-col items-center relative transform transition-transform duration-300 hover:scale-105">

            <h6 className="font-jost text-orange-400 mt-20 text-2xl text-center">{t('cardPrice.CardFourText')}</h6>
                {/* <h6 className="font-jost text-orange-400 mt-20 text-2xl text-center">Поддержка и развитие</h6> */}

                <div className="flex justify-start items-center mt-10 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">1</p>
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardFourTechnic')}</p>
                    {/* <p className="font-jost text-orange-100 mt-2 text-sm">Техническое сопровождение</p> */}
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">2</p>
                    {/* <p className="font-jost text-orange-100 mt-2 text-sm">Обновление дизайна</p> */}
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardFourDesign')}</p>
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">3</p>
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardFourContant')}</p>
                    {/* <p className="font-jost text-orange-100 mt-2 text-sm">Обновление контента</p> */}
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">4</p>
                    {/* <p className="font-jost text-orange-100 mt-2 text-sm">Оптимизация скорости</p> */}
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardFourSpeed')}</p>
                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">5</p>
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardFourScaling')}</p>
                    {/* <p className="font-jost text-orange-100 mt-2 text-sm">Масштабирование проекта</p> */}
                </div>

                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">6</p>
                    {/* <p className="font-jost text-orange-100 mt-2 text-sm">Внедрение новых фишек</p> */}
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardFourFeach')}</p>
                </div>
                
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">7</p>
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardFourAnalotic')}</p>
                    {/* <p className="font-jost text-orange-100 mt-2 text-sm">Аналитика и отчётность</p> */}

                </div>
                <div className="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p className="font-jost text-red-800 mt-2 text-xl font-black">8</p>
                    <p className="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardFourMonitoring')}</p>
                    {/* <p className="font-jost text-orange-100 mt-2 text-sm">Мониторинг работы сайта 24/7</p> */}
                </div>
                <img src={ PriceCard4} alt="elips" className='absolute z-[-1] translate-y-[360px] translate-x-[40px]'/>
                <img src={DollarFour} alt="elips" className='absolute z-[-1] translate-y-[50px] translate-x-[0] w-[300px]'/>

            </div>
           
        </div>
    );
}

export default CardPrice;