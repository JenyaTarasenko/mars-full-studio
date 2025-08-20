import React from 'react';
import ListView from "../../components/ProjectList/ProjectList";
import Navbar from '../../components/NavBar/Navbar';
import MainSection from '../../components/MainSection/MainSection';
import TechnologiesMain from '../../components/TechnologiesMain/TechnologiesMain';

function HomePage(){
    return (
        <>
        <Navbar />
        <MainSection />
        <TechnologiesMain />
        </>
    );
} 
export default HomePage;