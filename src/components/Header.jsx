import React from 'react';
import { Link } from 'react-router-dom';
import sctrLogo from '../assets/static/SCTR.png';

const Header = ({ avatar, redirect }) => (
  <header className='header-home'>
    <div className='container header'>
      <Link to={redirect} className='header__logo'>
        <img src={sctrLogo} alt='Logo SCTR' />
        <p>Seguro Complementario de Trabajo de Riesgo</p>
      </Link>
      <nav>
        <p>Mi perfil</p>
        <img src={avatar} className='avatar' alt='avatar del usuario' />
      </nav>
    </div>
  </header>
);

export default Header;
