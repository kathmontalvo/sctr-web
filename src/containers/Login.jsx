import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../assets/styles/Login.scss';
import mainBg from '../assets/static/fondoLogin.jpg';
import sctrLogo from '../assets/static/SCTR.png';

const Login = () => {
  const history = useHistory();
  const handleSubmit = () => {
    history.push('/home');
  };

  return (
    <div className='login-container'>
      <div className='fondo' style={{ backgroundImage: `url(${mainBg})` }}>
        <div className='ingresar'>
          <div className='return'>
            <Link to='/'>
              <i className='fas fa-angle-left' />
            </Link>
          </div>
          <div className='account'>
            <Link to='/'>
              <img src={sctrLogo} width='150px' height='50px' alt='' />
            </Link>
            <h1>Ingresa a tu Cuenta</h1>
            <p className='first-p'>Cuidemos nuestro Medio Ambiente.</p>
            <p className='first-p'>
              Utilicemos el App Movil (Usuario / Planta)
            </p>
            <p className='first-p'>
              Implementemos un S.C.T.R. de modo virtual - no más en físico.
            </p>
          </div>
        </div>
      </div>
      <form className='items' onSubmit={handleSubmit}>
        <div className='items-container'>
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
            <label htmlFor='password'>Contraseña</label>
            <input
              id='password'
              type='password'
              placeholder='Escribe tu contraseña aqui'
              required
            />
          </div>
          <ul className='forget'>
            <li>
              <p className='pass'>
                ¿Olvidaste tu contraseña?
              </p>
              <a className='recover' href='#'>
                Recuperar contraseña
              </a>
            </li>
          </ul>
          <div className='submit'>
            <button type='submit'>Log in</button>
          </div>
          <ul className='forget'>
            <li>
              <p className='pass'>
                ¿Aún no tienes una cuenta?
              </p>
              <Link to='register' className='recover'>
                Regístrate aquí
              </Link>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Login;
