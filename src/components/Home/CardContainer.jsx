import React from 'react';

const CardContainer = ({ children, title = 'Mis SCTR' }) => (
  <article className='card-wrapper'>
    <h3 className='card-title'>{ title }</h3>
    <div className='card-container'>{children}</div>
  </article>
);

export default CardContainer;
