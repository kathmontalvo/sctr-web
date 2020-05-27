import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Register.scss';
import registerBg from '../assets/static/fondoRegister.jpg';
import sctrLogo from '../assets/static/SCTR.png';

const Register = () => {
  return (
    <main className='datos-de-usuario'>
      <div className='fondo-2' style={{ backgroundImage: `url(${registerBg})` }}>
        <div className='ingresar'>
          <div className='return'>
            <Link to='/'>
              <i className='fas fa-angle-left' />
            </Link>
          </div>
          <div className='account-1'>
            <Link to='/'>
              <img src={sctrLogo} width='150px' height='50px' alt='' />
            </Link>
            <h1>Crear Usuario</h1>
            <p className='second-p'>
              Persona que realiza labores en Planta – Asegurado
            </p>
            <p className='second-p'>
              Lleva tu diario personal de labores en campo, controla tus horarios y horas extra.
            </p>
            <p className='second-p'>
              En todo momento, tu S.C.T.R. en tu dispositivo móvil para toda labor de riesgo.
            </p>
            <p className='second-p'>
              No olvides mantener actualizado tu seguro y revisar la vigencia del mismo.
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className='second-column'>
        <div className='container-button'>
          <form className='usuario' action=''>
            <button type='submit'>Soy Usuario</button>
          </form>
          <form className='empresa' action=''>
            <button type='submit'>Soy Empresa</button>
          </form>
          <form className='contratista' action=''>
            <button type='submit'>Soy Contratista</button>
          </form>
        </div>
        <form className='container-forms'>
          <div className='name'>
            <label htmlFor='nombre'>Nombre de Usuario</label>
            <input
              id='nombre'
              type='text'
              placeholder='Escribe tu nombre'
              required
            />
          </div>
          <div className='email'>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              type='email'
              placeholder='Escribe tu email aqui'
              required
            />
          </div>
          <div className='password'>
            <label htmlFor='pass'>Contraseña</label>
            <input
              id='pass'
              type='password'
              placeholder='Escribe tu contraseña aqui'
              required
            />
          </div>
          <div className='confirm'>
            <label htmlFor='confirmar'>Confirmar tu contraseña</label>
            <input
              id='confirmar'
              type='password'
              placeholder='Confirma tu contraseña aqui'
              required
            />
          </div>
          <div className='create'>
            <button type='submit'>Crear Usuario</button>
          </div>
        </form>
        <ul className='create-user'>
          <li>
            <p className='account-2'>¿Ya tienes una cuenta?</p>
            <Link to='/login' className='log'>
              Inicia sesión
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Register;
