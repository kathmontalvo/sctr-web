import React from 'react';
import document from '../../assets/docs/prueba.pdf';

const Aside = () => (
  <aside className='aside'>
    <div className='aside__text'>
      <div className='aside__text--up'>
        <h3>Añadir SCTR</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium unde quidem et harum facere exercitationem id dignissimos? Eum, eligendi! Iusto nesciunt rerum, ut nihil quia illo et labore eius possimus.</p>
      </div>
      <div className='aside__text--down'>
        <label htmlFor='uploadFile' className='btn-reverse'>
          Añadir SCTR
          <input type='file' id='uploadFile' />
        </label>
      </div>
    </div>
    <div className='aside__download'>
      <h3>Descargas reportes completos</h3>
      <div className='btn-group'>
        <a href={document} download type='button' className='btn-download'>Descargar reporte en PDF</a>
        <a href={document} download type='button' className='btn-download'>Descargar reporte en Excel</a>
      </div>
    </div>
  </aside>
);

export default Aside;
