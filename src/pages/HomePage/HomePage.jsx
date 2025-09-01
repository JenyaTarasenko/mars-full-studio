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

function HomePage(){
    return (
        <>
            <Navbar />
            <MainSection />
            {/* <ListView /> */}
            <TechnologiesMain />
            <Advantages />
            <TextDecoration  mainKey="solutions"/>
            <BastCard />
            <ButtonMain />
            <Shedule />
            <CardJob />
            <TextDecoration  mainKey="price"/>
            <Price />
            <CardPrice />
            <MarsSectionText text1="MarsSectionText.HomeReviewText" text2="MarsSectionText.HomeReviewDescription"/>
            <ReviewsSection />
            <DesignSection />
           
            <Footer />
        </>
    );
} 
export default HomePage;