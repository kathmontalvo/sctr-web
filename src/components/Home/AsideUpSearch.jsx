import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CardContainer from './CardContainer';
import DetailsContainer from './DetailsContainer';
import avatarUser from '../../assets/static/img_avatar.png';

const AsideUp = () => (
  <div className='aside__search'>
    <CardContainer title='Colaboradores'>
      <label htmlFor='search'>
        <div className='searchInput'>
          <FontAwesomeIcon icon={faSearch} />
          <input id='search' type='search' placeholder='Buscar colaborador...' />
        </div>
      </label>
      <DetailsContainer id='11' avatar={avatarUser} title='Fernando Reyes' date='02/05/20 al 02/07/20' text={true} />
      <DetailsContainer id='22' avatar={avatarUser} title='Alberto Chavez' date='02/05/20 al 02/07/20' text={true} />
      <DetailsContainer id='33' avatar={avatarUser} title='Tyler Bernal' date='02/05/20 al 02/07/20' text={true} />
      <DetailsContainer id='44' avatar={avatarUser} title='Carlos Revilla' date='02/05/20 al 02/07/20' text={true} />
    </CardContainer>
  </div>
);

export default AsideUp;
