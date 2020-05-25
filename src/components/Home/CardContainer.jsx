import React from 'react';

const CardContainer = ({ children }) => (
  <article className='card-wrapper'>
    <h3 className='card-title'>Mis SCTR</h3>
    <div className='card-container'>{children}</div>
  </article>
);

export default CardContainer;
