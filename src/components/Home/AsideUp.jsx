import React from 'react';

const AsideUp = ({ title = 'SCTR', titleBtn = 'SCTR' }) => (
  <div className='aside__text'>
    <div className='aside__text--up'>
      <h3>
        Añadir
        {' '}
        {title}
      </h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium unde quidem et harum facere exercitationem id dignissimos? Eum, eligendi! Iusto nesciunt rerum, ut nihil quia illo et labore eius possimus.</p>
    </div>
    <div className='aside__text--down'>
      <label htmlFor='uploadFile' className='btn-reverse'>
        Añadir
        {' '}
        {titleBtn}
        <input type='file' id='uploadFile' />
      </label>
    </div>
  </div>
);

export default AsideUp;
