/* import React from 'react';

class Postres extends React.Component {
    const Users = () => {
        const [equipo, setEquipo] = React.useState([])
        React.useEffect(() =>{
            obtenerDatos()
        },[])
        const obtenerDatos = async () =>{
            const data = await fetch('http://jsonplaceholder.typicode.com/users')
            const users = await data.json()
            setEquipo(users)
        }
        state = {
          loading: true,
          error: null,
          data: [],
        };
      componentDidMount() {
        this.fetchData();
      }
      fetchData = async () => {
        this.setState({ loading: true, error: null });
        try {
          const response = await fetch('http://localhost:8000/postres/');
          const data = await response.json();
          this.setState({ loading: false, data: data.results });
        } catch (error) {
          this.setState({ loading: false, error: error });
        }
      };
      render() {
        if (this.state.loading === true) {
          return 'Loading...';
        }
        if (this.state.error) {
          return `Error: ${this.state.error.message}`;
        }
        return(
          <div>
          <h1>Api</h1>
          <ul>
          {
            this.state.data.map(item => (
              <li key={item.id} >{item.name}</li>
              ))
            }
            </ul>
            </div>
            );
            return(
              <div>
              <h1>Usuarios</h1>
              <ul>
                    {
                      equipo.map(item => (
                        <li key={item.id}>{item.name}</li>
                        ))
                      }
                </ul>
                </div>
                );
              }
            }
export default Postres;
*/
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createPostres } from '../actions'
import '../assets/styles/components/login.scss'

const Postres = (props) => {
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
    <section className='login'>
      <section className='login__container'>
        <h2>Ingresar un postre</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
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
  createPostres
}

export default connect(null, mapDispatchToProps)(Postres)
