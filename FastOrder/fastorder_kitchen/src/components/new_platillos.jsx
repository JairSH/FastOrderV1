import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createPlatillos } from '../actions'
import '../assets/styles/components/new_platillos.css'

const Platillos = (props) => {
  const [form, setValues] = useState({
    name: ''
  })

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    props.createPostres(form)
  }
  return (
    <section className='postre'>
      <section className='postre__container'>
        <h2>Ingresar un postre</h2>
        <form className='postre__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            className='input'
            type='text'
            placeholder='name'
            onChange={handleInput}
          />
          <input
            name='price'
            className='input'
            type='text'
            placeholder='price'
            onChange={handleInput}
          />
          <input
            name='description'
            className='input'
            type='text'
            placeholder='description'
            onChange={handleInput}
          />
          <button className='button'>Enviar</button>
        </form>
      </section>
    </section>
  )
}
const mapDispatchToProps = {
  
}

export default connect(null, mapDispatchToProps)(Platillos)
