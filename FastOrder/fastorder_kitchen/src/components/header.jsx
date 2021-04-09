import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutRequest } from '../actions'
import '../assets/styles/components/header.css'
import userIcon from '../assets/statics/user-icon.png'

const Header = props => {
  const { user } = props
  let hasUser = ''
  if (user) {
    hasUser = Object.keys(user).length > 0
  }
  const handleLogout = () => {
    props.logoutRequest({})
  }

  return (
    <header>
      <div>
        <Link to='/'>
          <li>
            <a>FAST FOOD</a>
          </li>
        </Link>
      </div>
      <nav className='header__menu'>
        <ul className='header-right'>
          <li>
            <img src={userIcon} alt='' />
          </li>
          <li className='perfil-menu'>
            <p>Perfil</p>
            <ul>
              {hasUser
                ? <li><a href='/'>{user.name}</a></li>
                : null}
              {hasUser
                ? <li><a href='#logout' onClick={handleLogout}>Cerrar Sesion</a></li>
                : <li><Link to='/login'>Iniciar Sesion</Link></li>}
            </ul>
          </li>
        </ul>
      </nav>
      <div className='header-menu'>
        <ul>
          <Link to='/create_menu/'>
            <li>
              <a>CREAR MENU</a>
            </li>
          </Link>
        </ul>
      </div>
      <div className='header-menu-orden'>
        <ul>
          <Link to='#'>
            <li>
              <a>ORDENES</a>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  logoutRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
