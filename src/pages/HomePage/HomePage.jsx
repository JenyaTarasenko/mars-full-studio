import React from 'react';
import ListView from "../../components/ProjectList/ProjectList";
import Navbar from '../../components/NavBar/Navbar';

function HomePage(){
    return (
        <>
        <Navbar />
        <ListView />
        </>
    );
} 
export default HomePage;