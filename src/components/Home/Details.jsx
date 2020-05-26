import React from 'react';
import '../../assets/styles/components/Details.scss';

const Details = () => {
  const Card = ({ title, text }) => (
    <div className='details__wrapper--card'>
      <p className='gray-text'>{title}</p>
      <h4 className='dark-text'>{text}</h4>
    </div>
  );
  return (
    <aside className='details'>
      <h3 className='gray-text'>Detalles del seguro</h3>
      <div className='details__wrapper'>
        <Card title='Tipo de seguro' text='SCTR Completo' />
        <Card title='Cantidad de asegurados' text='10 asegurados' />
        <button type='button' className='btn-download'>
          Descargar seguro en PDF
        </button>
      </div>
    </aside>
  );
};

export default Details;
