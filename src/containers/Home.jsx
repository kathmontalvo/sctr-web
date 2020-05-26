import React from 'react';
import MainInfo from '../components/Home/MainInfo.jsx';
import Banner from '../components/Home/Banner.jsx';
import Aside from '../components/Home/Aside.jsx';
import Card from '../components/Home/Card.jsx';
import CardContainer from '../components/Home/CardContainer.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Details from '../components/Home/Details.jsx';
import '../assets/styles/Home.scss';

const Home = () => {
  // const detailsList = document.querySelectorAll('details');

  // function expand() {
  //   detailsList.forEach((details) => {
  //     details.removeAttribute('open');
  //   });
  // }

  function seeDetails(id) {
    const details = document.getElementById(`details-${id}`);
    if (details.open) {
      details.removeAttribute('open');
    } else if (!details.open) {
      details.setAttribute('open', true);
    }
    // detailsList.forEach((details) => {
    //   details.querySelector('summary').addEventListener('click', expand);
    // });
  }
  return (
    <>
      <Header />
      <Banner />
      <MainInfo>
        <CardContainer>
          <details open={false} id='details-1'>
            <summary>
              <Card seeDetails={seeDetails} id='1' />
            </summary>
            <Details />
          </details>
          <details open={false} id='details-2'>
            <summary>
              <Card seeDetails={seeDetails} id='2' />
            </summary>
            <Details />
          </details>
          <details open={false} id='details-3'>
            <summary>
              <Card seeDetails={seeDetails} id='3' />
            </summary>
            <Details />
          </details>
          <details open={false} id='details-4'>
            <summary>
              <Card seeDetails={seeDetails} id='4' />
            </summary>
            <Details />
          </details>
        </CardContainer>
        <CardContainer>
          <details open={false} id='details-5'>
            <summary>
              <Card seeDetails={seeDetails} id='5' />
            </summary>
            <Details />
          </details>
          <details open={false} id='details-6'>
            <summary>
              <Card seeDetails={seeDetails} id='6' />
            </summary>
            <Details />
          </details>
          <details open={false} id='details-7'>
            <summary>
              <Card seeDetails={seeDetails} id='7' />
            </summary>
            <Details />
          </details>
          <details open={false} id='details-8'>
            <summary>
              <Card seeDetails={seeDetails} id='8' />
            </summary>
            <Details />
          </details>
        </CardContainer>
        <Aside />
      </MainInfo>
      <Footer />
    </>
  );
};

export default Home;
