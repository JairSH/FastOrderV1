import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutRequest} from '../actions';
import '../assets/styles/components/header.scss';
import logo from '../assets/statics/logo-platzi-video-BW2.png';
import userIcon from '../assets/statics/user-icon.png';


const Header = props => {
  const {user} = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  }

    return(
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
          {hasUser ?
            <li><a href="/">{user.name}</a></li>
            : null
          }
          {hasUser ?
            <li><a href="#logout" onClick={handleLogout}>Cerrar Sesion</a></li>
          : 
          <li>
            <Link to='/login'>
              Iniciar Sesion
            </Link>
          </li>
          }
        </ul>
      </div>
    </header>
  );
}

const mapStateToProps = state => {
  return{
    user: state.user
  };
};

const mapDispatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProps,mapDispatchToProps) (Header);
