import React from 'react';
import { Link } from 'react-router-dom';
import Graphic from '../Graphic';

const Banner = ({ userName, graphicTitle, graphicSubTitle, redirect }) => (
  <section className='banner'>
    <div className='banner__container container'>
      <article className='banner__text'>
        <div className='banner__text--greeting'>
          <p>¡Hola!</p>
          <h3>{userName}</h3>
        </div>
        <div className='banner__text--data'>
          <p>{graphicSubTitle}</p>
          <h3>{graphicTitle}</h3>
          <Link to={`/${redirect}?graphic=bar`} className='btn-download' type='button'>
            Ver más gŕaficos
          </Link>
        </div>
      </article>
      <section className='banner__graphic'>
        <Graphic />
      </section>
    </div>
  </section>
);

export default Banner;
