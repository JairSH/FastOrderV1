/* import React from 'react'
import { connect } from 'react-redux'
import '../assets/styles/App.scss'
import {
  getClientes
} from '../actions'

class Orden extends React.Component {
  componentDidMount () {
    this.props.getClientesAction()
  }

  render () {
    return (
      <>
        <div>
          {this.props.clientes.map(item =>
            <li key={item.id}>{item.name}</li>
          )}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    clientes: state.food.clientes
  }
}

const mapDispatchToProps = dispatch => ({
  getClientesAction: () => (
    dispatch(getClientes())
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orden)
*/