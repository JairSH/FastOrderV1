import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createBebidas } from '../actions'
import '../assets/styles/components/new_bebidas.css'

const Bebidas = (props) => {
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
    props.createBebidas(form)
  }
  return (
    <section className='bebida'>
      <section className='bebida__container'>
        <h2>Ingresar una bebida</h2>
        <form className='bebida__container--form' onSubmit={handleSubmit}>
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
  createBebidas
}

export default connect(null, mapDispatchToProps)(Bebidas)
