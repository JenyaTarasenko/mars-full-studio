import React from 'react';
import DetailList from '../../components/DetailList/DetailList';
import Navbar from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer/Footer';
import DetailCard from '../../components/DetailCard/DetailCard';
import RulesSection from '../../components/RulesSection/RulesSection';
import NumberDetail from '../../components/NumberDetail/NumberDetail';

function DetailPage(){
    return (
        <>
        <Navbar />
        <DetailList />
        <DetailCard />
        <RulesSection />
        <NumberDetail />
        <Footer />
        </>
    );
} 
export default DetailPage;