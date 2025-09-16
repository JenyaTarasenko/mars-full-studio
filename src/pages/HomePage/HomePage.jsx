import React from 'react';
import ListView from "../../components/ProjectList/ProjectList";
import Navbar from '../../components/NavBar/Navbar';
import MainSection from '../../components/MainSection/MainSection';
import TechnologiesMain from '../../components/TechnologiesMain/TechnologiesMain';
import Advantages from '../../components/Advantages/Advantages';
import BastCard from '../../components/CardBast/CardBast';
import TextDecoration from '../../components/Text/TextDecoration/TextDecoration';
import CardJob from '../../components/CardJob/CardJob';
import Shedule from '../../components/ schedule/ schedule';
import Price from '../../components/Price/Price';
import ButtonMain from '../../components/Buttons/ButtonMain/ButtonMain';
import SectionTextMain from '../../components/SectionTextMain/SectionTextMain';
import ReviewsSection from '../../components/ReviewsSection/ReviewsSection';
import DesignSection from '../../components/DesignSection/DesignSection';
import Footer from '../../components/Footer/Footer';
import CardPrice from '../../components/CardPrice/CardPrice';
import MarsSectionText from '../../components/MarsSectionText/MarsSectionText';
import HomeServices from '../../components/HomeServices/HomeServices';
import TextLittleSection from '../../components/TextLittleSection/TextLittleSection';
import QuestionsSection from '../../components/QuestionsSection/QuestionsSection';
import SocialFixed from '../../components/SocialFixed/SocialFixed';
// библиотека для сео   npm install @dr.pogodin/react-helmet
import { Helmet } from '@dr.pogodin/react-helmet';
// перевод на всю страницу  для seo
import { useTranslation } from "react-i18next";
import Bast from '../../components/Bast/Bast';




function HomePage(){
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                {/* 🔹 Основные теги SEO */}
                <title>{t("seo.HomeTitle")}</title>
                <meta name="description" content={t("seo.HomeDescription")} />
                <meta name="keywords" content={t("seo.HomeKeyWords")} />
                <meta name="author" content="Mars Studio" />
                <meta name="robots" content="index, follow" />

                {/* 🔹 Open Graph */}
                <meta property="og:title" content={t("seo.HomeTitle")} />
                <meta property="og:description" content={t("seo.HomeDescription")} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.web-mars.com/" />
                <meta property="og:image" content="https://www.web-mars.com/favicon/mars-image.png" />
                <meta property="og:site_name" content="Mars Studio" />

                 {/* 🔹 для мультиязычного сео */}
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:locale:alternate" content="uk_UA" />
                <meta property="og:locale:alternate" content="en_US" />



                {/* 🔹 Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t("seo.HomeTitle")} />
                <meta name="twitter:description" content={t("seo.HomeDescription")} />
                <meta name="twitter:image" content="https://www.web-mars.com/images/seo-card.jpg" />

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
                    "logo": "https://www.web-mars.com/favicon/fa512.png"
                    }
                `}</script>
            </Helmet>

            <Navbar />
            <MainSection />
            <TechnologiesMain />
            <Advantages />
            <MarsSectionText text1="MarsSectionText.HomeText" text2="MarsSectionText.HomeDescription"/>
            <HomeServices />
            <TextDecoration  mainKey="solutions"/>
            <BastCard />
            <ButtonMain />
            <Shedule />
            <CardJob />
            <TextLittleSection text1="TextLittleSection.homeText" text2="TextLittleSection.homeDescription" />
            <ListView />
            <TextDecoration  mainKey="price"/>
            <Price />
            <CardPrice />
            <MarsSectionText text1="MarsSectionText.HomeReviewText" text2="MarsSectionText.HomeReviewDescription"/>
            <ReviewsSection />
            <DesignSection />
            <MarsSectionText text1="MarsSectionText.HomeQuestionText" text2="MarsSectionText.HomeQuestionDescription"/>
            <QuestionsSection />
            <SocialFixed />
            <Bast />
            <Footer />
        </>
    );
} 
export default HomePage;