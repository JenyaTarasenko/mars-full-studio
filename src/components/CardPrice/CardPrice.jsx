import './style.css';
import { useTranslation } from 'react-i18next';

function CardPrice(){
    const { t } = useTranslation();

    return(
        <div class="flex flex-col  lg:flex-row items-center justify-center gap-5 lg:mt-[700px] mt-[100px]">
            <div class="card-price w-[300px] h-[650px] flex flex-col items-center relative transform transition-transform duration-300 hover:scale-105">

                {/* <h6 class="font-jost text-orange-400 mt-20 text-2xl">Одностраничные</h6> */}
                <h6 class="font-jost text-orange-400 mt-20 text-2xl">{t('cardPrice.CardOne')}</h6>

                <div class="flex justify-start items-center mt-10 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">1</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm"> Уникальный дизайн</p> */}
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardOneDesign')}</p>
                </div>
                <div class="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">2</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Структурированный контент</p> */}
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardOneContent')}</p>
                </div>
                <div class="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">3</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Быстрая загрузка в любой<br/>точке мира</p> */}
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardOneLoadingOne')}<br/>{t('cardPrice.CardOneLoadingTwo')}</p>
                </div>
                <div class="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">4</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Интерактивные элементы <br/>кнопки,формы,соц.сети</p> */}
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardOneElementOne')}<br/>{t('cardPrice.CardOneElementTwo')}</p>
                </div>
                <div class="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">5</p>
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardOneAnimationOne')}<br/>{t('cardPrice.CardOneAnimationTwo')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Анимации <br/>декоративные элементы</p> */}
                </div>
                <div class="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">6</p>
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardOneProtectionOne')}<br/>{t('cardPrice.CardOneProtectionTwo')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Защита НTTPS, защита <br/> от спама и уязвимостей</p> */}
                </div>
                <div class="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">7</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Бесплатная поддержка</p> */}
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardOneSupport')}</p>
                </div>
                <img src="/image/price-card1.svg" alt="elips" className='absolute z-[-1] translate-y-[330px] translate-x-[-40px]'/>
                <img src="/image/100$.svg" alt="elips" className='absolute z-[-1] translate-y-[50px] translate-x-[0] w-[300px]'/>

            </div>

            <div class="card-price w-[300px] h-[650px] flex flex-col items-center relative transform transition-transform duration-300 hover:scale-105">

                {/* <h6 class="font-jost text-orange-400 mt-20 text-2xl">Многостраничные</h6> */}
                <h6 class="font-jost text-orange-400 mt-20 text-2xl">{t('cardPrice.CardTwo')}</h6>

                <div class="flex justify-start items-center mt-10 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">1</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Уникальный дизайн</p> */}
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardTwoDesign')}</p>
                </div>
                <div class="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">2</p>
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardTwoPages')}</p> 
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Множество разделов и страниц.</p> */}
                </div>
                <div class="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">3</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Быстрая загрузка в любой<br/>точке мира</p> */}
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardTwoLoadOne')}<br/>{t('cardPrice.CardTwoLoadTwo')}</p>
                </div>
                <div class="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">4</p>
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardTwoСabinet')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Личный кабинет пользователя</p> */}
                </div>
                <div class="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">5</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Формы обратной связи — заявки,<br />подписки, обратный звонок</p> */}
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardTwoFormOne')}<br />{t('cardPrice.CardTwoFormTwo')}</p>
                </div>
                <div class="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">6</p>
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardTwoLanguage')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Мультиязычность</p> */}
                </div>
                <div class="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">7</p>
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardTwoSocOne')}<br />{t('cardPrice.CardTwoSocTwo')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Интеграции — соцсети,<br />карты, мессенджеры</p> */}
                </div>
                <div class="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">8</p>
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardTwoProtectionOne')}<br/>{t('cardPrice.CardTwoProtectionTwo')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Защита НTTPS, защита <br/> от спама и уязвимостей</p> */}
                </div>
                <div class="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">9</p>
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardTwoSupport')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Бесплатная поддержка</p> */}
                </div>
                <img src="/image/price-card3.svg" alt="elips" className='absolute z-[-1] translate-y-[350px] translate-x-[40px]'/>
                <img src="/image/200$.svg" alt="elips" className='absolute z-[-1] translate-y-[50px] translate-x-[0] w-[300px]'/>

            </div>
            <div class="card-price w-[300px] h-[650px] flex flex-col items-center relative transform transition-transform duration-300 hover:scale-105">

                {/* <h6 class="font-jost text-orange-400 mt-20 text-2xl">Интернет магазины</h6> */}

                <h6 class="font-jost text-orange-400 mt-20 text-2xl">{t('cardPrice.CardThree')}</h6>

                <div class="flex justify-start items-center mt-10 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">1</p>
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardThreeDesign')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm"> Уникальный дизайн</p> */}
                </div>
                <div class="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">2</p>
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardThreeCategoryOne')}<br />{t('cardPrice.CardThreeCategoryTwo')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Каталог товаров — с категориями, фильтрами,<br />сортировкой и карточками.</p> */}
                </div>
                <div class="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">3</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Поиск по товарам — быстрый <br />доступ к нужному продукту</p> */}
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardThreeSearchOne')}<br />{t('cardPrice.CardThreeSearchTwo')}</p>
                </div>
                <div class="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">4</p>
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardThreeBasketOne')}<br />{t('cardPrice.CardThreeBasketTwo')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Корзина покупок — добавление,<br />редактирование и удаление товаров.</p> */}
                </div>
                <div class="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">5</p>
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardThreeCabinet')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Личный кабинет пользователя</p> */}
                </div>

                <div class="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">6</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Системы оплаты</p> */}
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardThreePaiment')}</p>
                </div>
                
                <div class="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">7</p>
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardThreeProtectionOne')}<br/>{t('cardPrice.CardThreeProtectionTwo')}</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Защита НTTPS, защита <br/> от спама и уязвимостей</p> */}
                </div>
                <div class="flex justify-start items-center mt-3 w-full pl-10 flex-row gap-5">
                    <p class="font-jost text-red-800 mt-2 text-xl font-black">8</p>
                    {/* <p class="font-jost text-orange-100 mt-2 text-sm">Бесплатная поддержка</p> */}
                    <p class="font-jost text-orange-100 mt-2 text-sm">{t('cardPrice.CardThreeSupport')}</p>
                </div>
                <img src="/image/price-card4.png" alt="elips" className='absolute z-[-1] translate-y-[360px] translate-x-[40px]'/>
                <img src="/image/300$.svg" alt="elips" className='absolute z-[-1] translate-y-[50px] translate-x-[0] w-[300px]'/>

            </div>
           
        </div>
    );
}

export default CardPrice;