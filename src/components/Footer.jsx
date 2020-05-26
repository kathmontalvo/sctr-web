import React from 'react';
import logoInsured from '../assets/static/Insured.png';
import '../assets/styles/components/Footer.scss';

const Footer = () => (
  <footer className='main-footer'>
    <div className='logo-wrapper'>
      <img src={logoInsured} alt='logo Insured' />
      <p>I N S U R E D</p>
    </div>
  </footer>
);

export default Footer;
