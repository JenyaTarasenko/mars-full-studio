// import { useTranslation } from 'react-i18next';


// function SectionTextMain(){
//     const { t } = useTranslation();

//     return(
//         <div className="flex justify-center px-10">
//             <h5 className="jont-jost text-white text-3xl sm:text-5xl font-bold">{t(SectionTextMain.text)}<p className="jont-jost text-zinc-400 text-3xl sm:text-5xl font-light ">{t(SectionTextMain.description)}</p>{t(SectionTextMain.item)}</h5>
//         </div>
//     );
// }
// export default SectionTextMain;


import { useTranslation } from 'react-i18next';

function SectionTextMain() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center px-10 mt-[700px]">
      <div className="font-jost text-left">
        <h5 className="text-white text-3xl sm:text-5xl font-bold">
          {t('SectionTextMain.text')}
        </h5>
        <p className="text-zinc-400 text-3xl sm:text-5xl font-light mt-2">
          {t('SectionTextMain.description')}
        </p>
        <span className="text-white text-3xl sm:text-5xl">
          {t('SectionTextMain.item')}
        </span>
      </div>
    </div>
  );
}

export default SectionTextMain;
