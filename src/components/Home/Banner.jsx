import React from 'react';

const Banner = () => (
  <section className='banner'>
    <div className='container'>
      <article className='banner__text'>
        <div className='banner__text--greeting'>
          <p>¡Hola!</p>
          <h3>Wilfredo Ramos</h3>
        </div>
        <div className='banner__text--data'>
          <p>Días en planta</p>
          <h3>120</h3>
        </div>
      </article>
      <section className='banner__graphic'>
        graphic here
      </section>
    </div>
  </section>
);

export default Banner;
