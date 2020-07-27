import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Register.scss';
import userBg from '../assets/static/fondoRegister.jpg';
import plantBg from '../assets/static/plant-register-bg.jpg';
import companyBg from '../assets/static/company-register-bg.jpg';
import sctrLogo from '../assets/static/SCTR.png';

const Register = () => {
  const textUser = [
    'Persona que ejecuta labores de riesgo en Planta – Asegurado – también conocido como Afiliado de un Usuario Administrador',
    'Lleva tu diario personal de trabajos y actividades en campo, controla tus horarios regulares y horas extra.',
    'Cuenta en todo momento con tu S.C.T.R. almacenado en tu dispositivo móvil – App “SCTR Usuario”.',
    'No olvides mantener actualizado tu seguro y revisar la vigencia del mismo.',
  ];
  const textPlant = [
    'Empresa que recibe a Usuarios contratistas para todo tipo de trabajo o bien reunión dentro de la Planta.',
    'Obtendrás reportes ordenados de los registros de ingreso y salida de cada Usuario y persona que ingrese a planta y cuente con un seguro S.C.T.R.',
    'Cuenta con el documento S.C.T.R. de los Usuarios en la nube, evita almacenar y acumular papel.',
    'Ponte en contacto con nosotros para personalizar la información a visualizar en tus reportes.',
  ];
  const textAdministrator = [
    'Representante de la empresa que realiza actividades de riesgo y maneja un grupo de trabajo - Contratista.',
    'Obtén información y reportes de los días y horas en Planta de tus Usuarios Afiliados.',
    'Visualiza la ubicación y el tiempo de tus Usuarios Afiliados en Planta.',
    'Elabora tus reportes y controla las horas laborales y extra con la información que te proporcionamos.',
  ];
  const [text, setText] = useState(textUser);
  const [registerBg, setRegisterBg] = useState(userBg);

  const updateRegister = (text, bg) => {
    setRegisterBg(bg);
    setText(text);
  };

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
            <ul>
              {
                text && text.map((el, i) => (
                  <li className='second-p' key={`text-${i}`}>
                    {el}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className='second-column'>
        <div className='container-button'>
          <form className='usuario' action=''>
            <button type='button' onClick={((e) => updateRegister(textUser, userBg))}>Soy Usuario</button>
          </form>
          <form className='empresa' action=''>
            <button type='button' onClick={((e) => updateRegister(textPlant, plantBg))}>Soy Planta</button>
          </form>
          <form className='contratista' action=''>
            <button type='button' onClick={((e) => updateRegister(textAdministrator, companyBg))}>Soy Usuario administrador</button>
          </form>
        </div>
        <form className='container-forms'>
          <div className='name'>
            <label htmlFor='nombre'>
              Nombre de Usuario
              <input
                id='nombre'
                type='text'
                placeholder='Escribe tu nombre'
                required
                autoComplete='username'
              />
            </label>
          </div>
          <div className='email'>
            <label htmlFor='email'>
              Email
              <input
                id='email'
                type='email'
                placeholder='Escribe tu email aqui'
                required
                autoComplete='email'
              />
            </label>
          </div>
          <div className='password'>
            <label htmlFor='pass'>
              Contraseña
              <input
                id='pass'
                type='password'
                placeholder='Escribe tu contraseña aqui'
                required
                autoComplete='new-password'
              />
            </label>
          </div>
          <div className='confirm'>
            <label htmlFor='confirmar'>
              Confirmar tu contraseña
              <input
                id='confirmar'
                type='password'
                placeholder='Confirma tu contraseña aqui'
                required
                autoComplete='new-password'
              />
            </label>
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
