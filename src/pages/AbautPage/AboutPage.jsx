import React from 'react';
import Navbar from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer/Footer';
import AboutMain from '../../components/AboutMain/AboutMain';
import Advantages from '../../components/Advantages/Advantages';
import AboutAdvantages from '../../components/AboutAdvantages/AboutAdvantages';
import AboutCardAdvantages from '../../components/AboutCardAdvantages/AboutCardAdvantages';
import ImageStep from '../../components/ ImageStep/ImageStep';
import TextDecoration from '../../components/Text/TextDecoration/TextDecoration';


function  AboutPage(){
    return (
        <>
            <Navbar />
            <AboutMain />
            <Advantages />
            <AboutAdvantages />
            <AboutCardAdvantages />
            <TextDecoration  mainKey="weekdays" />
            <ImageStep />
            <Footer />
        </>
    )
}
export default AboutPage;