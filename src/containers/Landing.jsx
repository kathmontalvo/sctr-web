import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Landing.scss';
import sctrLogo from '../assets/static/SCTR.png';
import insuredLogo from '../assets/static/Insured.png';
import funcionaImg from '../assets/static/funciona.png';
import laPositiva from '../assets/static/lapositivaseguros.png';
import environmentBg from '../assets/static/ambiente.jpg';
import mainBg from '../assets/static/fondo.jpg';
import aboutUsBg from '../assets/static/nosotros.jpg';

const Landing = () => {
  // const ipad = window.matchMedia('screen and (max-width: 767px)');
  // const menu = document.getElementById('menu');
  // // const inicio = document.getElementById('menu-inicio');
  // // const nosotros = document.getElementById('menu-nosotros');
  // // const funciona = document.getElementById('menu-funciona');
  // // const clientes = document.getElementById('menu-clientes');
  // // const ayuda = document.getElementById('menu-ayuda');
  // // // console.log(burgerButton);

  // function hideShow() {
  //   if (menu.classList.contains('is-active')) {
  //     menu.classList.remove('is-active');
  //   } else {
  //     menu.classList.add('is-active');
  //   }
  // }

  // function validation(event) {
  //   if (event.matches) {
  //     const burgerButton = document.getElementById('burger-menu');
  //     console.log(document.getElementById('burger-menu'));
  //     // burgerButton.addEventListener('click', () => hideShow);
  //     // inicio.addEventListener('click', hideShow);
  //     // nosotros.addEventListener('click', hideShow);
  //     // funciona.addEventListener('click', hideShow);
  //     // clientes.addEventListener('click', hideShow);
  //     // ayuda.addEventListener('click', hideShow);
  //   }
  //   // else {
  //   //   burgerButton.removeEventListener('click', hideShow);
  //   // inicio.removeEventListener('click', hideShow);
  //   // nosotros.removeEventListener('click', hideShow);
  //   // funciona.removeEventListener('click', hideShow);
  //   // clientes.removeEventListener('click', hideShow);
  //   // ayuda.removeEventListener('click', hideShow);
  // //   }
  // }

  // validation(ipad);
  // // ipad.addEventListener(validation);

  return (
    <div className='App'>
      <i className='icon-menu burger-button' id='burger-menu' />
      <section
        className='container-header-first'
        style={{ backgroundImage: `url(${mainBg})` }}
      >
        <div className='container-color'>
          <header>
            <div className='logo'>
              <img src={sctrLogo} alt='' />
              <p>Seguro Complementario de Trabajo de Riesgo</p>
            </div>
            <section className='menu' id='menu'>
              <ul>
                <li>
                  <a id='menu-inicio' href='#Inicio'>
                    Inicio
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a id='menu-nosotros' href='#Nosotros'>
                    Nosotros
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a id='menu-funciona' href='#Funciona'>
                    ¿Cómo Funciona?
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a id='menu-clientes' href='#Clientes'>
                    Clientes
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a id='menu-ayuda' href='#Ayuda'>
                    Ayuda y Opiniones
                  </a>
                </li>
              </ul>
            </section>
          </header>

          <section id='Inicio' className='first-section'>
            <div className='text-container'>
              <h1>Bienvenido</h1>
              <p className='text-1'>Descarga en tu dispositivo móvil el App “SCTR Usuario”</p>
              <p className='text-3'>
                Accede a tu cuenta web para obtener tus reportes, contabilizar tus horas laborales y descargar tu Diario de trabajo
              </p>
              <p className='text-2'>Descarga en tu dispositivo móvil el App “SCTR Planta”</p>
            </div>
            <div className='inputs'>
              <form action=''>
                <Link to='/register'>
                  <button className='user' type='submit'>
                    Crear Usuario
                  </button>
                </Link>
              </form>
              <form action=''>
                <Link to='/login'>
                  <button className='log-in' type='submit'>
                    Iniciar sesión
                  </button>
                </Link>
              </form>
            </div>
          </section>
        </div>
      </section>

      <section id='Funciona' className='third-section'>
        <div className='works-container'>
          <h1>¿Cómo Funciona?</h1>
          <p>
            <strong>Usuario: </strong>
            Podrás subir a la web tu S.C.T.R. y nosotros sintetizaremos la
            información relevante. Confirmado por ti que la información es
            correcta, podrás visualizarla en el App “SCTR Usuario”. Desde allí
            registra toda actividad cuando vayas a una Planta, lleva tu diario
            de trabajo y actividades. Visualiza tus reportes ingresando a tu
            cuenta desde la web.
          </p>
          <p>
            <strong>Contratista: </strong>
            Afilia a Usuarios de tu representada que estén
            asegurados dentro del S.C.T.R. de tu empresa. Visualiza a través
            de la web los registros que tus Usuarios Afiliados realicen en
            Plantas. Obten reportes de las horas de ingreso y salida de
            Planta, horas laboradas y horas extra de cada Usuario.
          </p>
          <p>
            <strong>Planta: </strong>
            Registra desde el App “SCTR Planta” a toda persona Usuario que
            ingrese al Centro de Labores con el lector QR del App. Controla
            tus registros de ingreso y salida y obten reportes a través de la
            cuenta de la web. Podrás visualizar los comentarios que haga, así
            como visualizar los S.C.T.R. de cada Usuario registrado.
          </p>
        </div>
        <figure className='computer'>
          <img src={funcionaImg} width='250px' height='150px' alt='' />
        </figure>
      </section>

      <section
        id='Nosotros'
        className='second-section'
        style={{ backgroundImage: `url(${aboutUsBg})` }}
      >
        <div className='container-second'>
          <h1>Nosotros</h1>
          <p className='paragraph-1'>
            Promoviendo el cuidado Medio Ambiental, innovamos y conseguimos adaptar
            el seguro S.C.T.R. a una versión móvil y así reducimos la impresión de
            documentos.
            <br />
            Evitamos la necesidad de presentar y almacenar físicamente los seguros. La
            información se encuentra compartida y almacenada a través de la nube.
          </p>
          <p className='paragraph-2'>
            INSURED WM - buscamos agilizar labores rutinarias y de diario a tanto
            Empresas como Personas. Facilitamos un modelo de control y registro laboral
            sincronizado y actualizado en todo momento.
            <br />
            Conseguimos una comunicación perenne entre el Usuario, su empresa
            Contratista y la Planta.
          </p>
          <form action=''>
            <button type='submit'>Siguiente</button>
          </form>
        </div>
      </section>

      <section
        className='environment'
        style={{ backgroundImage: `url(${environmentBg})` }}
      >
        <div className='world'>
          <h1>cuidado medio ambiental</h1>
          <div className='text'>
            <p>
              Promovamos el cuidado de nuestra áreas verdes. Llevemos nuestro
              información en dispositivos móviles y no en un papel.
            </p>
          </div>
        </div>
      </section>

      <section className='testimonies-container'>
        <div className='testimonies'>
          <div className='slider'>
            <figure className='slider-figure'>
              <div className='slider-container'>
                <h1>Testimonios</h1>
                <h2>María Jimenez Suares Pacífico</h2>
                <p>
                  Eeche astarios de fuertina, lorem ipsum. Fuerto los solos
                  paradiso delado, desajnuar familiara noce. Amanate de oreo lorem
                  ima.
                </p>
              </div>
              <div className='slider-container'>
                <h1>Testimonios</h1>
                <h2>María Jimenez Suares Pacífico</h2>
                <p>
                  Eeche astarios de fuertina, lorem ipsum. Fuerto los solos
                  paradiso delado, desajnuar familiara noce. Amanate de oreo lorem
                  ima.
                </p>
              </div>
              <div className='slider-container'>
                <h1>Testimonios</h1>
                <h2>María Jimenez Suares Pacífico</h2>
                <p>
                  Eeche astarios de fuertina, lorem ipsum. Fuerto los solos
                  paradiso delado, desajnuar familiara noce. Amanate de oreo lorem
                  ima.
                </p>
              </div>
              <div className='slider-container'>
                <h1>Testimonios</h1>
                <h2>María Jimenez Suares Pacífico</h2>
                <p>
                  Eeche astarios de fuertina, lorem ipsum. Fuerto los solos
                  paradiso delado, desajnuar familiara noce. Amanate de oreo lorem
                  ima.
                </p>
              </div>
              <div className='slider-container'>
                <h1>Testimonios</h1>
                <h2>María Jimenez Suares Pacífico</h2>
                <p>
                  Eeche astarios de fuertina, lorem ipsum. Fuerto los solos
                  paradiso delado, desajnuar familiara noce. Amanate de oreo lorem
                  ima.
                </p>
              </div>
            </figure>
          </div>
          <div id='Ayuda' className='help'>
            <h1>¿Necesitas Ayuda?</h1>
            <h3>
              Escribenos al correo electronico con todas tus dudas y te
              atenderemos lo antes posible
            </h3>
            <ul>
              <li>
                <a href='/'>scrt@insured.com</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id='Clientes' className='clientes'>
        <h1>Nuestros Clientes</h1>
        <div className='img-clientes'>
          <img src={laPositiva} width='159px' height='179px' alt='' />
          <img src={laPositiva} width='159px' height='179px' alt='' />
          <img src={laPositiva} width='159px' height='179px' alt='' />
          <img src={laPositiva} width='159px' height='179px' alt='' />
        </div>
      </section>

      <footer className='insured'>
        <img src={insuredLogo} alt='' />
        <p>I N S U R E D</p>
      </footer>
    </div>
  );
};

export default Landing;
