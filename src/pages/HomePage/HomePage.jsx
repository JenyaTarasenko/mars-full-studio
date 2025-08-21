import React from 'react';
import ListView from "../../components/ProjectList/ProjectList";
import Navbar from '../../components/NavBar/Navbar';
import MainSection from '../../components/MainSection/MainSection';
import TechnologiesMain from '../../components/TechnologiesMain/TechnologiesMain';
import Advantages from '../../components/Advantages/Advantages';

function HomePage(){
    return (
        <>
        <Navbar />
        <MainSection />
        <TechnologiesMain />
        <Advantages />
        </>
    );
} 
export default HomePage;