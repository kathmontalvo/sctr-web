import React, { useState } from 'react';
import MainInfo from '../../components/Home/MainInfo.jsx';
import Banner from '../../components/Home/Banner.jsx';
import Aside from '../../components/Home/Aside.jsx';
import AsideUp from '../../components/Home/AsideUp.jsx';
import Card from '../../components/Home/Card.jsx';
import CardContainer from '../../components/Home/CardContainer.jsx';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Details from '../../components/Home/InsuranceDetails.jsx';
import DetailsContainer from '../../components/Home/DetailsContainer.jsx';
import avatar from '../../assets/static/img_avatar.png';

import '../../assets/styles/Home.scss';

const Home = () => {

  return (
    <>
      <Header avatar={avatar} />
      <Banner userName='Wilfredo Ramos' graphicSubTitle='Días en planta' graphicTitle='120' />
      <MainInfo>
        <CardContainer>
          <DetailsContainer id='1' avatar={avatar}>
            <Details />
          </DetailsContainer>
          <DetailsContainer id='2' avatar={avatar}>
            <Details />
          </DetailsContainer>
          <DetailsContainer id='3' avatar={avatar}>
            <Details />
          </DetailsContainer>
          <DetailsContainer id='4' avatar={avatar}>
            <Details />
          </DetailsContainer>
        </CardContainer>
        <CardContainer>
          <DetailsContainer id='5' avatar={avatar}>
            <Details />
          </DetailsContainer>
          <DetailsContainer id='6' avatar={avatar}>
            <Details />
          </DetailsContainer>
          <DetailsContainer id='7' avatar={avatar}>
            <Details />
          </DetailsContainer>
          <DetailsContainer id='8' avatar={avatar}>
            <Details />
          </DetailsContainer>
        </CardContainer>
        <Aside>
          <AsideUp />
        </Aside>
      </MainInfo>
      <Footer />
    </>
  );
};

export default Home;
