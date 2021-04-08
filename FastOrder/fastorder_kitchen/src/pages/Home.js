import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/home.css'
import '../assets/styles/App.scss'
import mainfondo from '../assets/statics/main-image.jpg'

class Home extends React.Component {
  render () {
    return (
      <main>
        <section className='main-image'>
          <img src={mainfondo} alt='fondo' />
        </section>
        <section className='text-main'>
          <p>Bienvenidos <br /> FAST FOOD</p>
        </section>
        <section className='main-buttons'>
          <div>
            <Link to='/login'>
              <button>Login</button>
            </Link>
          </div>
          <div>
            <Link to='/register'>
              <button>Register</button>
            </Link>
          </div>
        </section>
      </main>
    )
  }
}
export default Home
