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
import avatarPlant from '../../assets/static/antamina.png';
import avatarContratista from '../../assets/static/contratista.png';
import avatarUser from '../../assets/static/img_avatar.png';

import '../../assets/styles/Home.scss';

const HomeCompany = () => {
  return (
    <>
      <Header avatar={avatarPlant} />
      <Banner userName='Compañía Antamina' graphicSubTitle='Comparado al mes anterior' graphicTitle='20% aumento de proveedores' />
      <MainInfo classes='container-plant'>
        <CardContainer>
          <DetailsContainer id='1' avatar={avatarContratista}>
            <div className='details-container-plant'>
              <CardContainer title='Colaboradores'>
                <DetailsContainer id='5' avatar={avatarUser} title='Fernando Reyes' date='02/05/20 al 02/07/20' text={true} />
                <DetailsContainer id='6' avatar={avatarUser} title='Armando Perez' date='02/05/20 al 02/07/20' text={true} />
                <DetailsContainer id='7' avatar={avatarUser} title='Cecilia Varcarcel' date='02/05/20 al 02/07/20' text={true} />
                <DetailsContainer id='8' avatar={avatarUser} title='Denise Rojas' date='02/05/20 al 02/07/20' text={true} />
              </CardContainer>
              <Details />
            </div>
          </DetailsContainer>
          <DetailsContainer id='2' avatar={avatarContratista}>
            <div className='details-container-plant'>
              <CardContainer title='Colaboradores'>
                <DetailsContainer id='9' avatar={avatarUser} title='Fernando Reyes' date='02/05/20 al 02/07/20' text={true} />
                <DetailsContainer id='10' avatar={avatarUser} title='Armando Perez' date='02/05/20 al 02/07/20' text={true} />
                <DetailsContainer id='11' avatar={avatarUser} title='Cecilia Varcarcel' date='02/05/20 al 02/07/20' text={true} />
                <DetailsContainer id='12' avatar={avatarUser} title='Denise Rojas' date='02/05/20 al 02/07/20' text={true} />
              </CardContainer>
              <Details />
            </div>
          </DetailsContainer>
          <DetailsContainer id='3' avatar={avatarContratista}>
            <div className='details-container-plant'>
              <CardContainer title='Colaboradores'>
                <DetailsContainer id='13' avatar={avatarUser} title='Fernando Reyes' date='02/05/20 al 02/07/20' text={true} />
                <DetailsContainer id='14' avatar={avatarUser} title='Armando Perez' date='02/05/20 al 02/07/20' text={true} />
                <DetailsContainer id='15' avatar={avatarUser} title='Cecilia Varcarcel' date='02/05/20 al 02/07/20' text={true} />
                <DetailsContainer id='16' avatar={avatarUser} title='Denise Rojas' date='02/05/20 al 02/07/20' text={true} />
              </CardContainer>
              <Details />
            </div>
          </DetailsContainer>
          <DetailsContainer id='4' avatar={avatarContratista}>
            <div className='details-container-plant'>
              <CardContainer title='Colaboradores'>
                <DetailsContainer id='17' avatar={avatarUser} title='Fernando Reyes' date='02/05/20 al 02/07/20' text={true} />
                <DetailsContainer id='18' avatar={avatarUser} title='Armando Perez' date='02/05/20 al 02/07/20' text={true} />
                <DetailsContainer id='19' avatar={avatarUser} title='Cecilia Varcarcel' date='02/05/20 al 02/07/20' text={true} />
                <DetailsContainer id='20' avatar={avatarUser} title='Denise Rojas' date='02/05/20 al 02/07/20' text={true} />
              </CardContainer>
              <Details />
            </div>
          </DetailsContainer>
        </CardContainer>
        <Aside title='Contratista' titleBtn='colaborador'>
          <AsideUp />
        </Aside>
      </MainInfo>
      <Footer />
    </>
  );
};

export default HomeCompany;
