import React from 'react';
import BrandImg from '../BrandImg/BrandImg';
import CarouselSection from '../CarouselSection/CarouselSection';
import ClientSection from '../ClientSection/ClientSection';
import ContactSection from '../ContactSection/ContactSection';
import Header from '../Header/Header';
import ServiceSection from '../ServiceSection/ServiceSection';
const Home = () => {
    return (
        <>
            <Header></Header>
            <BrandImg></BrandImg>
            <ServiceSection></ServiceSection>
             <CarouselSection></CarouselSection>
            <ClientSection></ClientSection>
            <ContactSection></ContactSection>
        </>
    );
};

export default Home;