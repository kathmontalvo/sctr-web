import React from 'react';

const Aside = () => (
  <aside className='aside'>
    <div className='aside__text'>
      <div className='aside__text--up'>
        <h3>Añadir SCTR</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium unde quidem et harum facere exercitationem id dignissimos? Eum, eligendi! Iusto nesciunt rerum, ut nihil quia illo et labore eius possimus.</p>
      </div>
      <div className='aside__text--down'>
        <button type='button' className='btn-reverse'>Añadir SCTR</button>
      </div>
    </div>
    <div className='aside__download'>
      <h3>Descargas reportes completos</h3>
      <div className='btn-group'>
        <button type='button' className='btn-download'>Descargar reporte en PDF</button>
        <button type='button' className='btn-download'>Descargar reporte en Excel</button>
      </div>
    </div>
  </aside>
);

export default Aside;
