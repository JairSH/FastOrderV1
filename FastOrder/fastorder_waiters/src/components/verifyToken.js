import React, { useState } from 'react'
import { connect } from 'react-redux'
import { tokenRequest } from '../actions'
import '../assets/styles/components/register.scss'

const VerifyToken = (props) => {
  const [form, setValues] = useState({
    token: ''
  })

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    props.tokenRequest(form)
    props.history.push('/')
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          name='token'
          className='input'
          type='password'
          placeholder='token'
          onChange={handleInput}
        />
        <button className='button'>Iniciar sesión</button>
      </form>
    </section>
  )
}

const mapDispatchToProps = {
  tokenRequest
}

export default connect(null, mapDispatchToProps)(VerifyToken)
