import React from 'react'
import { connect } from 'react-redux'
import { getBebidas } from '../actions'
import '../assets/styles/App.scss'
import '../assets/styles/components/bebidas.css'

class Bebidas extends React.Component {
  componentDidMount () {
    this.props.getBebidasAction()
  }

  render () {
    return (
      <>
        <div className='menu-bebidas'>
          <h1>Bebidas</h1>
          <ul>
            {
              this.props.bebidas.map(item => (
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
    bebidas: state.food.bebidas
  }
}

const mapDispatchToProps = dispatch => ({
  getBebidasAction: () => (
    dispatch(getBebidas())
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(Bebidas)
