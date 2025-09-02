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


function  AboutPage(){
    return (
        <>
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
            <Footer />
        </>
    )
}
export default AboutPage;