import React from 'react';
import document from '../../assets/docs/prueba.pdf';

const Aside = ({ children }) => (
  <aside className='aside'>
    {children}
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
