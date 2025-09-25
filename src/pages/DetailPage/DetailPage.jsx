import React from 'react';
import DetailList from '../../components/DetailList/DetailList';
import Navbar from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer/Footer';
// import DetailCard from '../../components/DetailCard/DetailCard';
import RulesSection from '../../components/RulesSection/RulesSection';
// import NumberDetail from '../../components/NumberDetail/NumberDetail';
// import MarsSectionText from '../../components/MarsSectionText/MarsSectionText';
import SocialFixed from '../../components/SocialFixed/SocialFixed';
// библиотека для сео   npm install @dr.pogodin/react-helmet
import { Helmet } from '@dr.pogodin/react-helmet';
// перевод на всю страницу  для seo
import { useTranslation } from "react-i18next";

function DetailPage(){
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                {/* 🔹 Основные теги SEO */}
                <title>{t("seo.DetailTitle")}</title>
                {/* <title>Mars Studio — О нас | Веб-студия Django + React</title> */}
                <meta name="description" content={t("seo.DetailDescription")} />
                {/* <meta name="description"  content="Mars Studio — разработка многостраничных сайтов, одностраничных, интернет магазинов,индивидуальный дизайн Django, React, UI-UX" /> */}
                <meta name="keywords" content={t("seo.DetailDescription")} />
                {/* <meta name="keywords" content="Mars Studio, веб-разработка, Django, React, проект название, корпоративный сайт, интернет-магазин, веб-приложение, UI/UX дизайн, SEO продвижение" /> */}

                <meta name="author" content="Mars Studio" />
                <meta name="robots" content="index, follow" />

                {/* 🔹 Open Graph */}
                <meta property="og:title" content={t("seo.DetailTitle")} />
                <meta property="og:description" content={t("seo.DetailDescription")} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.web-mars.com/" />
                <meta property="og:image" content="https://www.web-mars.com/static/favicon/mars-image.png" />
                <meta property="og:site_name" content="Mars Studio" />

                 {/* 🔹 для мультиязычного сео */}
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:locale:alternate" content="uk_UA" />
                <meta property="og:locale:alternate" content="en_US" />



                {/* 🔹 Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t("seo.HomeTitle")} />
                <meta name="twitter:description" content={t("seo.HomeDescription")} />
                <meta name="twitter:image" content="https://www.web-mars.com/static/favicon/mars-image.png" />

                {/* 🔹 Canonical */}
                <link rel="canonical" href="https://www.web-mars.com/" />

                <link rel="alternate" href="https://www.web-mars.com/" hreflang="x-default" />


                {/* 🔹 Технические */}
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="theme-color" content="#000000" />

                  {/* 🔹 Структурированные данные */}
                <script type="application/ld+json">{`
                    {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Mars Studio",
                    "url": "https://www.web-mars.com/",
                    "logo": "https://www.web-mars.com/static/favicon/fa512.png",
                    "description": "Марс Студия-разработка уникальных иньернет сайтов на Django React,одностраничных, многостраничных, интернет магазинов",
                    "inLanguage": ["ru", "en", "uk"],
                    "contactPoint": [
                        {
                          "@type": "ContactPoint",
                          "telephone": "+380731606731",
                          "contactType": "customer service",
                          "email": "mars.studio.dnepr@gmail.com",
                          "areaServed": "UA",
                          "availableLanguage": ["ru", "uk", "en"]
                        }
                      ]
                    }
                `}</script>
            </Helmet>
        <Navbar />
        <DetailList />
        <RulesSection />
        {/* <MarsSectionText text1="MarsSectionText.DetailText" text2="MarsSectionText.DetailDescription"/>
        <DetailCard /> */}
        <SocialFixed />
        <Footer />
        </>
    );
} 
export default DetailPage;