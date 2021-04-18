import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerRequest } from '../actions'
import '../assets/styles/components/register.scss'
import VerifyToken from '../components/verifyToken'

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    username: '',
    phone_number: '',
    password: '',
    password_confirmation: '',
    first_name: '',
    last_name: ''
  })

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    props.registerRequest(form)
    props.history.push('login')
  }
  return (
    <>
      <section className='register'>
        <section className='register__container'>
          <h2>Regístrate</h2>
          <form className='register__container--form' onSubmit={handleSubmit}>
            <input
              name='email'
              className='input'
              type='text'
              placeholder='email'
              onChange={handleInput}
            />
            <input
              name='username'
              className='input'
              type='text'
              placeholder='username'
              onChange={handleInput}
            />
            <input
              name='phone_number'
              className='input'
              type='text'
              placeholder='phone number'
              onChange={handleInput}
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='password'
              onChange={handleInput}
            />
            <input
              name='password_confirmation'
              className='input'
              type='password'
              placeholder='password confirmation'
              onChange={handleInput}
            />
            <input
              name='first_name'
              className='input'
              type='text'
              placeholder='first name'
              onChange={handleInput}
            />
            <input
              name='last_name'
              className='input'
              type='text'
              placeholder='last name'
              onChange={handleInput}
            />
            <button className='button'>Registrarme</button>
          </form>
          <Link to='/login'>
            Iniciar sesión
          </Link>
        </section>
      </section>
      <VerifyToken />
    </>
  )
}

const mapDispatchToProps = {
  registerRequest
}

export default connect(null, mapDispatchToProps)(Register)
