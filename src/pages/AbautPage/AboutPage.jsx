import React from 'react';
import Navbar from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer/Footer';
import AboutMain from '../../components/AboutMain/AboutMain';
import Advantages from '../../components/Advantages/Advantages';
import AboutAdvantages from '../../components/AboutAdvantages/AboutAdvantages';
import AboutCardAdvantages from '../../components/AboutCardAdvantages/AboutCardAdvantages';
import ImageStep from '../../components/ ImageStep/ImageStep';
import TextDecoration from '../../components/Text/TextDecoration/TextDecoration';
import CardStep from '../../components/CardStep/CardStep';
import MarsSectionText from '../../components/MarsSectionText/MarsSectionText';
import TextLittleSection from '../../components/TextLittleSection/TextLittleSection';
import AboutTeam from '../../components/AboutTeam/AboutTeam';
import SocialFixed from '../../components/SocialFixed/SocialFixed';
import { Helmet } from '@dr.pogodin/react-helmet';
// перевод на всю страницу  для seo
import { useTranslation } from "react-i18next";



function  AboutPage(){
    const { t } = useTranslation();

    return (
        <>
           <Helmet>
                {/* 🔹 Основные теги SEO */}
                <title>{t("seo.AboutTitle")}</title>
                {/* <title>Mars Studio — О нас | Веб-студия Django + React</title> */}
                <meta name="description" content={t("seo.AboutDescription")} />
                {/* <meta name="description"  content="Mars Studio — команда экспертов по веб-разработке на Django и React. Мы создаём уникальные сайты и приложения, внедряем современные технологии и обеспечиваем полный цикл поддержки." /> */}
                <meta name="keywords" content={t("seo.AboutKeyWords")} />
                {/* <meta name="keywords" content="Mars Studio — веб-студия полного цикла: Django + React, UI/UX, SEO, поддержка." /> */}
                <meta name="author" content="Mars Studio" />
                <meta name="robots" content="index, follow" />

                {/* 🔹 Open Graph */}
                <meta property="og:title" content={t("seo.AboutTitle")} />
                <meta property="og:description" content={t("seo.AboutDescription")}  />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.web-mars.com/about-mars-studio/" />
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
                    "description": "Марс Студия-полный цикл разработки интернет сайтов для вашего бизнесса",
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
            <AboutMain />
            {/* <Advantages /> */}
            <MarsSectionText text1="MarsSectionText.aboutTextBast" text2="MarsSectionText.aboutDescriptionBast"/>
            <AboutAdvantages />
            <AboutCardAdvantages />
            <TextDecoration  mainKey="weekdays" />
            <ImageStep />
            <MarsSectionText text1="MarsSectionText.aboutText" text2="MarsSectionText.aboutDescription"/>
            <CardStep />
            <TextLittleSection text1="TextLittleSection.aboutText" text2="TextLittleSection.aboutDescription" />
            <AboutTeam />
            <SocialFixed />
            <Footer />
        </>
    )
}
export default AboutPage;