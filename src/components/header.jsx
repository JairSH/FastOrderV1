import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/header.scss';
import logo from '../assets/statics/logo.png';
import userIcon from '../assets/statics/user-icon.png';

const Header = () => (
  <header className="header">

    <Link to="/">
      <img className="header__img" src={logo} alt="Platzi Video" />
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <Link to='/login'>
          Iniciar Sesion
        </Link>
      </ul>
    </div>
  </header>
);

export default Header;