import React from 'react';
import MainInfo from '../components/Home/MainInfo.jsx';
import Banner from '../components/Home/Banner.jsx';
import Aside from '../components/Home/Aside.jsx';
import Card from '../components/Home/Card.jsx';
import CardContainer from '../components/Home/CardContainer.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../assets/styles/Home.scss';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <MainInfo>
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
        <Aside />
      </MainInfo>
      <Footer />
    </>
  );
};

export default Home;
