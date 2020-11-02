import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../assets/styles/Login.scss';
import mainBg from '../assets/static/fondoLogin.jpg';
import sctrLogo from '../assets/static/SCTR.png';
import login from '../controllers/auth';
import sessionService from '../controllers/session';
import getCurrentUser from '../controllers/current-user/getCurrentUser';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getUser = (token) => {
    return getCurrentUser(token)
      .then((data) => {
        console.log(data);
        const { role } = data.data;
        switch (role) {
          case 4:
            history.push('home-plant');
            break;
          case 3:
            history.push('home-user');
            break;
          default:
            alert('Not okay');
            break;
        }

      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      .then((res) => {
        getUser(res.access_token);
        sessionService.setItem('access_token', res.access_token);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
    // if (email === 'usuario@sctr.com' && password === '123456') { //USUARIO
    //   history.push('home-user');
    // } else if (email === 'planta@sctr.com' && password === '123456') { //PLANTA
    //   history.push('home-plant');
    // } else if (email === 'contratista@sctr.com' && password === '123456') { //CONTRATISTA
    //   history.push('home-company');
    // }
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
              Utilicemos el App Móvil “SCTR Usuario” y “SCTR Planta”
            </p>
            <p className='first-p'>
              Instauremos el uso de un documento S.C.T.R. de modo virtual - no más en físico.
            </p>
          </div>
        </div>
      </div>
      <form className='items' onSubmit={handleSubmit}>
        <div className='items-container'>
          <div className='email'>
            <label htmlFor='email'>
              Email
              <input
                id='email'
                type='email'
                placeholder='Escribe tu email aqui'
                required
                onChange={(e) => { setEmail(e.target.value); }}
              />
            </label>
          </div>
          <div className='password'>
            <label htmlFor='password'>
              Contraseña
              <input
                id='password'
                type='password'
                placeholder='Escribe tu contraseña aqui'
                required
                onChange={(e) => { setPassword(e.target.value); }}
              />
            </label>
          </div>
          <ul className='forget'>
            <li>
              <p className='pass'>
                ¿Olvidaste tu contraseña?
              </p>
              <a className='recover' href='#recover-password'>
                Recuperar contraseña
              </a>
            </li>
          </ul>
          <div className='submit'>
            <button type='submit'>Iniciar sesión</button>
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
