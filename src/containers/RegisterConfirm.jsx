import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/RegisterConfirm.scss';
import confirmationBg from '../assets/static/confirmacion.jpg';
import sctrLogo from '../assets/static/SCTR.png';

const RegisterConfirm = () => {
  return (
    <div className='register-confirmation' style={{ backgroundImage: `url(${confirmationBg})` }}>
      <main className='fondo-3'>
        <header>
          <img src={sctrLogo} alt='' />
          <p>Seguro Complementario de Trabajo de Riesgo</p>
        </header>
        <div className='confirmation'>
          <h1>Confirma tu email</h1>
          <p>
            Recibirás un correo de Confirmación de Registro. Con los datos
            completados correctamente, podrás acceder desde el App movil a tu
            Usuario.
          </p>
          <form action=''>
            <button type='submit'>Reenviar Link</button>
          </form>
          <ul>
            <li>
              <Link to='/'>
                Volver a inicio
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default RegisterConfirm;
