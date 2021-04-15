import React from 'react'
import { connect } from 'react-redux'
import { getPlatillos } from '../actions'
import '../assets/styles/App.scss'
import '../assets/styles/components/platillos.css'

class Platillos extends React.Component {
  componentDidMount () {
    this.props.getPlatillosAction()
  }

  render () {
    return (
      <>
        <div className='menu-platillos'>
          <h1>Platillos</h1>
          <ul>
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
    platillos: state.food.platillos
  }
}

const mapDispatchToProps = dispatch => ({
  getPlatillosAction: () => (
    dispatch(getPlatillos())
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(Platillos)
