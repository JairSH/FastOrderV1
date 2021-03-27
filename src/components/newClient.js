import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createOrdenes } from '../actions'

const NewOrder = (props) => {
  const [form, setValues] = useState({
    mylist: []
  })

  const handleSubmit = event => {
    event.preventDefault()
    setValues({
      ...form,
      [event.target.id]: event.target.value
    })
    props.createClientes(form)
  }

  return (
    <section className='login'>
      <button onSubmit={handleSubmit}>Guardar Orden</button>
    </section>
  )
}
const mapDispatchToProps = {
  createOrdenes
}

export default connect(null, mapDispatchToProps)(NewOrder)

/* const NewClient = (props) => {
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
    props.createClientes(form)
  }

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Ingresar el nombre del cliente</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            className='input'
            type='text'
            placeholder='name'
            onChange={handleInput}
          />
          <input
            name='last_name'
            className='input'
            type='text'
            placeholder='Last Name'
            onChange={handleInput}
          />
          <button className='button'>Guardar</button>
        </form>
      </section>
    </section>
  )
}

const mapDispatchToProps = {
  createClientes
}

export default connect(null, mapDispatchToProps)(NewClient)
*/
