import React from 'react';
import avatar from '../../assets/static/img_avatar.png';

const Card = () => (
  <div className='card'>
    <div className='card__info'>
      <img className='card__info--avatar' src={avatar} alt='avatar de empresa' />
      <div className='card__info--text'>
        <h4>SCTR Tipo 2</h4>
        <p>25/06/2020</p>
      </div>
    </div>
    <div className='card__button'>
      <button type='button'>Ver más</button>
    </div>
  </div>
);

export default Card;
