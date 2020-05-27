import React, { useState } from 'react';
import MainInfo from '../components/Home/MainInfo.jsx';
import Banner from '../components/Home/Banner.jsx';
import Aside from '../components/Home/Aside.jsx';
import Card from '../components/Home/Card.jsx';
import CardContainer from '../components/Home/CardContainer.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Details from '../components/Home/InsuranceDetails.jsx';
import DetailsContainer from '../components/Home/DetailsContainer.jsx';
import '../assets/styles/Home.scss';

const Home = () => {

  return (
    <>
      <Header />
      <Banner />
      <MainInfo>
        <CardContainer>
          <DetailsContainer id='1' />
          <DetailsContainer id='2' />
          <DetailsContainer id='3' />
          <DetailsContainer id='4' />
        </CardContainer>
        <CardContainer>
          <DetailsContainer id='5' />
          <DetailsContainer id='6' />
          <DetailsContainer id='7' />
          <DetailsContainer id='8' />
        </CardContainer>
        <Aside />
      </MainInfo>
      <Footer />
    </>
  );
};

export default Home;
