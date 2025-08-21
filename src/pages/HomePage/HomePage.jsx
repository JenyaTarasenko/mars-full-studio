import React from 'react';
import ListView from "../../components/ProjectList/ProjectList";
import Navbar from '../../components/NavBar/Navbar';
import MainSection from '../../components/MainSection/MainSection';
import TechnologiesMain from '../../components/TechnologiesMain/TechnologiesMain';
import Advantages from '../../components/Advantages/Advantages';
import BastCard from '../../components/CardBast/CardBast';
function HomePage(){
    return (
        <>
        <Navbar />
        <MainSection />
        {/* <ListView /> */}
        <TechnologiesMain />
        <Advantages />
        <BastCard />
        
        </>
    );
} 
export default HomePage;