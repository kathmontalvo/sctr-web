import React from 'react';
import MainInfo from '../../components/Home/MainInfo.jsx';
import Banner from '../../components/Home/Banner.jsx';
import Aside from '../../components/Home/Aside.jsx';
import AsideUp from '../../components/Home/AsideUp.jsx';
import CardContainer from '../../components/Home/CardContainer.jsx';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Details from '../../components/Home/InsuranceDetails.jsx';
import DetailsContainer from '../../components/Home/DetailsContainer.jsx';
import avatar from '../../assets/static/img_avatar.png';
import avatarPlant from '../../assets/static/antamina.png';

import '../../assets/styles/Home.scss';

const Home = () => {

  return (
    <>
      <Header avatar={avatar} redirect='home-user' />
      <Banner userName='Wilfredo Ramos' graphicSubTitle='Días en planta' graphicTitle='120' redirect='dashboard-user' />
      <MainInfo>
        <CardContainer title='Mis SCTR'>
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
        <CardContainer title='Empresas'>
          <DetailsContainer id='5' avatar={avatarPlant}>
            <Details />
          </DetailsContainer>
          <DetailsContainer id='6' avatar={avatarPlant}>
            <Details />
          </DetailsContainer>
          <DetailsContainer id='7' avatar={avatarPlant}>
            <Details />
          </DetailsContainer>
          <DetailsContainer id='8' avatar={avatarPlant}>
            <Details />
          </DetailsContainer>
        </CardContainer>
        <Aside>
        <AsideUp 
            text='
              Agrega aquí tu documento S.C.T.R. Verifica los datos sincronizados y confirma que sean
              correcto, estos se verán reflejados en el App móvil “SCTR Usuario”.
            '
          />        </Aside>
      </MainInfo>
      <Footer />
    </>
  );
};

export default Home;
