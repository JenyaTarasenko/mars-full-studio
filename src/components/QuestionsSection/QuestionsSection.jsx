import { useTranslation } from 'react-i18next';

function QuestionsSection(){
    const { t } = useTranslation();

    return(
        <>
        <div className="w-full flex justify-center section-card-main sm:mt-[100px] mt-[150px]">
            <div className="overflow-x-auto overflow-y-hidden py-6">
                {/* <!-- карта 1 --> */}
                <div className="flex space-x-4">
                {/* <!-- карта 1 --> */}
                    <div className="w-[430px] h-[250px] flex flex-col relative shrink-0 bg-[#D9D9D9] bg-opacity-5 p-5 transform transition-transform duration-300 hover:scale-105 overflow-hidden rounded-[60px]">
                        <div class="flex">
                            {/* <h5 class="font-jost text-left text-lg text-zinc-200 mt-5 p-2">Сколько времени занимает<br />Бразработка сайта?</h5> */}
                            <h5 class="font-jost text-left text-lg text-zinc-200 mt-5 p-2">{t('Question.CardOne')}<br />{t('Question.CardOneItem')}</h5>
                        </div>
                        <div class="flex mt-3">
                        <h6 class="font-jost text-left text-sm text-zinc-400 p-2">{t('Question.CardOneDescription')}</h6>
                            {/* <h6 class="font-jost text-left text-sm text-zinc-400 p-2">В среднем от 2 до 6 недель, в зависимости от сложности и количества страниц.Одностраничный сайт Landing page занимает от 4 дней до 6 дней туда входит дизайн програмирование серверная часть </h6> */}
                        </div>
                    </div>  

                    <div className="w-[420px] h-[250px] flex flex-col relative shrink-0 bg-[#D9D9D9] bg-opacity-5 p-5 transform transition-transform duration-300 hover:scale-105 overflow-hidden rounded-[60px]">
                        <div class="flex">
                            <h5 class="font-jost text-left text-lg text-zinc-200 mt-5 p-2">{t('Question.CardTwo')}</h5>
                            {/* <h5 class="font-jost text-left text-lg text-zinc-200 mt-5 p-2">Сколько стоит сайт?</h5> */}
                        </div>
                        <div class="flex mt-10">
                        <h6 class="font-jost text-left text-sm text-zinc-400 p-2">{t('Question.CardTwoDescription')}</h6>
                            {/* <h6 class="font-jost text-left text-sm text-zinc-400 p-2">Стоимость рассчитывается индивидуально. Одностраничный сайт дешевле от 100$, интернет-магазин дороже. Мы подбираем решение под ваш бюджет.</h6> */}
                        </div>
                    </div>  


                    <div className="w-[430px] h-[250px] flex flex-col relative shrink-0 bg-[#D9D9D9] bg-opacity-5 p-5 transform transition-transform duration-300 hover:scale-105 overflow-hidden rounded-[60px]">
                        <div class="flex">
                        <h5 class="font-jost text-left text-lg text-zinc-200 mt-5 p-2">{t('Question.CardThree')}<br />{t('Question.CardThreeItem')}</h5>
                            {/* <h5 class="font-jost text-left text-lg text-zinc-200 mt-5 p-2">Можно ли дорабатывать сайт<br />после запуска?</h5> */}
                        </div>
                        <div class="flex mt-3">
                        {/* <h6 class="font-jost text-left text-sm text-zinc-400 p-2">Да, мы всегда можем добавить новые функции, изменить дизайн или расширить функционал.Наша студия с радостью предоставит вам услуги по доработке или расширению ,или полного перезапуска вашего сайта </h6> */}
                            <h6 class="font-jost text-left text-sm text-zinc-400 p-2">{t('Question.CardThreeDescription')}</h6>
                        </div>
                    </div>  


                    <div className="w-[330px] h-[250px] flex flex-col relative shrink-0 bg-[#D9D9D9] bg-opacity-5 p-5 transform transition-transform duration-300 hover:scale-105 overflow-hidden rounded-[60px]">
                        <div class="flex">
                        <h5 class="font-jost text-left text-lg text-zinc-200 mt-5 p-2">{t('Question.CardFour')}</h5>
                            {/* <h5 class="font-jost text-left text-lg text-zinc-200 mt-5 p-2">Будет ли сайт работать на телефонах?</h5> */}
                        </div>
                        <div class="flex mt-5">
                        <h6 class="font-jost text-left text-sm text-zinc-400 p-2">{t('Question.CardFourDescription')}</h6>
                            {/* <h6 class="font-jost text-left text-sm text-zinc-400 p-2">Конечно! Все наши сайты адаптивные и отлично отображаются на смартфонах и планшетах.</h6> */}
                        </div>
                    </div>  


                    <div className="w-[390px] h-[250px] flex flex-col relative shrink-0 bg-[#D9D9D9] bg-opacity-5 p-5 transform transition-transform duration-300 hover:scale-105 overflow-hidden rounded-[60px]">
                        <div class="flex">
                        <h5 class="font-jost text-left text-lg text-zinc-200 mt-5 p-2">{t('Question.CardFive')}<br/>{t('Question.CardFiveItem')}</h5>
                            {/* <h5 class="font-jost text-left text-lg text-zinc-200 mt-5 p-2">Что насчёт поддержки<br/>и безопасности?</h5> */}
                        </div>
                        <div class="flex mt-3">
                        <h6 class="font-jost text-left text-sm text-zinc-400 p-2">{t('Question.CardFiveDescription')}</h6>
                            {/* <h6 class="font-jost text-left text-sm text-zinc-400 p-2">Мы размещаем сайты на надёжных серверах с защитой и при необходимости предоставляем техническую поддержку.Ваш сайт будет одинаково быстро открыватся в любой точке мира</h6> */}
                        </div>
                    </div>  

                    <div className="w-[350px] h-[250px] flex flex-col relative shrink-0 bg-[#D9D9D9] bg-opacity-5 p-5 transform transition-transform duration-300 hover:scale-105 overflow-hidden rounded-[60px]">
                        <div class="flex">
                            <h5 class="font-jost text-left text-lg text-zinc-200 mt-5 p-2">Нужно ли мне разбираться<br />в технической части?</h5>
                        </div>
                        <div class="flex mt-3">
                            <h6 class="font-jost text-left text-sm text-zinc-400 p-2">Нет, мы берём все технические задачи на себя. От вас нужны только пожелания и видение будущего сайта.</h6>
                        </div>
                    </div>  


                    <div className="w-[350px] h-[250px] flex flex-col relative shrink-0 bg-[#D9D9D9] bg-opacity-5 p-5 transform transition-transform duration-300 hover:scale-105 overflow-hidden rounded-[60px]">
                        <div class="flex">
                        {/* <h5 class="font-jost text-left text-lg text-zinc-200 mt-5 p-2">Можно ли подключить оплату,<br /> чат или карты?</h5> */}
                            <h5 class="font-jost text-left text-lg text-zinc-200 mt-5 p-2">{t('Question.CardSix')}<br />{t('Question.CardSixItem')}</h5>
                        </div>
                        <div class="flex mt-3">
                        <h6 class="font-jost text-left text-sm text-zinc-400 p-2">{t('Question.CardSixDescription')}</h6>
                            {/* <h6 class="font-jost text-left text-sm text-zinc-400 p-2">Да, мы интегрируем удобные сервисы — от онлайн-оплаты до чатов и карт. Всё работает прямо на сайте.</h6> */}
                        </div>
                    </div> 


                    <div className="w-[350px] h-[250px] flex flex-col relative shrink-0 bg-[#D9D9D9] bg-opacity-5 p-5 transform transition-transform duration-300 hover:scale-105 overflow-hidden rounded-[60px]">
                        <div class="flex">
                        <h5 class="font-jost text-left text-lg text-zinc-200 mt-5 p-2">{t('Question.CardSevenText')}</h5>
                            {/* <h5 class="font-jost text-left text-lg text-zinc-200 mt-5 p-2">А если у меня уже есть сайт?</h5> */}
                        </div>
                        <div class="flex mt-5">
                        <h6 class="font-jost text-left text-sm text-zinc-400 p-2">{t('Question.CardSevenDescription')}</h6>
                            {/* <h6 class="font-jost text-left text-sm text-zinc-400 p-2">Мы можем обновить существующий сайт, улучшить дизайн, ускорить работу и добавить новые функции, все это будет сделано с учетом наших технологий с которым мы работаем</h6> */}
                        </div>
                    </div> 


                </div>
            </div>
        </div>
        </>
    );
}

export default QuestionsSection;