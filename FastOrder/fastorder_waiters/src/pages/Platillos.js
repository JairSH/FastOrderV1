import React from 'react'
import { connect } from 'react-redux'
import { getPlatillos } from '../actions'
import Spinner from '../components/General/Spinner'
import Fatal from '../components/General/Fatal'
import '../assets/styles/App.scss'
import '../assets/styles/components/platillos.css'

class Platillos extends React.Component {
  componentDidMount () {
    this.props.getPlatillosAction()
  }

  contenido = () => {
    if (this.props.loading){
      return <Spinner />
    }

    if (this.props.error){
      return <Fatal mensaje={this.props.error} />
    }
  }

  render () {
    console.log(this.props.loading)
    console.log(this.props.error)
    return (
      <>
        <div className='menu-platillos'>
          <h1>Platillos</h1>
          <ul>
            {this.contenido()}
            {
              this.props.platillos.map(item => (
                <li key={item.id}>
                  <a>
                    {item.name}
                  </a>
                  <a>
                    ${item.price}
                  </a>
                  <a>
                    {item.description}
                  </a>
                </li>
              ))
              }
          </ul>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    platillos: state.food.platillos,
    error: state.food.error,
    loading: state.food.loading
  }
}

const mapDispatchToProps = dispatch => ({
  getPlatillosAction: () => (
    dispatch(getPlatillos())
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(Platillos)
