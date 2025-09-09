import React from 'react';
import DetailList from '../../components/DetailList/DetailList';
import Navbar from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer/Footer';
import DetailCard from '../../components/DetailCard/DetailCard';
import RulesSection from '../../components/RulesSection/RulesSection';
import NumberDetail from '../../components/NumberDetail/NumberDetail';
import MarsSectionText from '../../components/MarsSectionText/MarsSectionText';
import SocialFixed from '../../components/SocialFixed/SocialFixed';

function DetailPage(){
    return (
        <>
        <Navbar />
        <DetailList />
        <RulesSection />
        <MarsSectionText text1="MarsSectionText.DetailText" text2="MarsSectionText.DetailDescription"/>
        <DetailCard />
        <SocialFixed />
        <Footer />
        </>
    );
} 
export default DetailPage;