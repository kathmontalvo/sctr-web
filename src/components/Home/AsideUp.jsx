import React from 'react';

const AsideUp = ({ title = 'SCTR', titleBtn = 'SCTR', text }) => (
  <div className='aside__text'>
    <div className='aside__text--up'>
      <h3>
        Añadir
        {' '}
        {title}
      </h3>
      <p>
        {text}
      </p>
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
