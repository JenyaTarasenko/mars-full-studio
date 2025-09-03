import { useTranslation } from 'react-i18next';

function NumberDetail(){
    const { t } = useTranslation();

    return(
        <>
        <div className="flex flex-col mt-20 lg:flex-row items-center justify-center gap-5">
            <div className="flex items-center justify-center relative flex-col">
                <img src="/image/cifra-text.svg" alt="number" className="w-[280px] z-[-1]" />
                <p className="font-jost text-red-600 text-7xl font-bold absolute mb-[40px]">+120%</p>
                {/* <p className="font-jost text-zinc-200  text-sm font-light text-center mt-5 tracking-widest">Рост посещаемости<br />сайта за 3 месяца</p> */}
                <p className="font-jost text-zinc-200  text-sm font-light text-center mt-5 tracking-widest">{t('NumberDetail.description')}<br />{t('NumberDetail.descriptionText')}</p>
            </div>
            <div className="flex items-center justify-center relative flex-col">
                <img src="/image/cifra-text.svg" alt="number" className="w-[280px] z-[-1]" />
                <p className="font-jost text-red-600 text-7xl font-bold absolute mb-[40px]">+85%</p>
                {/* <p className="font-jost text-zinc-200  text-sm font-light text-center mt-5 tracking-widest">Увеличение конверсии<br/>заявок и продаж</p> */}
                <p className="font-jost text-zinc-200  text-sm font-light text-center mt-5 tracking-widest">{t('NumberDetail.Items')}<br/>{t('NumberDetail.ItemsText')}</p>
            </div>
            <div className="flex items-center justify-center relative flex-col">
                <img src="/image/cifra-text.svg" alt="number" className="w-[280px] z-[-1]" />
                <p className="font-jost text-red-600 text-7xl font-bold absolute mb-[40px]">+75%</p>
                <p className="font-jost text-zinc-200  text-sm font-light text-center mt-5 tracking-widest">{t('NumberDetail.Text')}<br/>{t('NumberDetail.TextOne')}</p>
                {/* <p className="font-jost text-zinc-200  text-sm font-light text-center mt-5 tracking-widest">Вовлечённость благодаря<br/>интерфейсу и функционалу</p> */}
            </div>
        </div>
        </>
    );
}
export default NumberDetail;