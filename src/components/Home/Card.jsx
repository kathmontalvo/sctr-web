import React from 'react';

const Card = ({ seeDetails, id, btnText, avatar, title = 'SCTR Tipo 2', date = '25/06/2020' }) => (
  <div className='card'>
    <div className='card__info'>
      <img className='card__info--avatar' src={avatar} alt='avatar de empresa' />
      <div className='card__info--text'>
        <h4>{title}</h4>
        <p>{date}</p>
      </div>
    </div>
    {
      seeDetails && (
        <div className='card__button'>
          <button type='button' onClick={(e) => seeDetails(id)}>{btnText}</button>
        </div>
      )
    }
  </div>
);

export default Card;
