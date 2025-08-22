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
        <Shedule />
        <CardJob />

       
        
        </>
    );
} 
export default HomePage;