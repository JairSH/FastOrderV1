import React from 'react'
import { connect } from 'react-redux'
import Categories from '../components/categories'
import Carousel from '../components/carousel'
import CarouselItem from '../components/carouselItems'
import '../assets/styles/App.scss'
import {
  getPlatillos,
  getBebidas,
  getPostres,
  deleteFavorite,
  cleanOrderList,
  saveOrder
} from '../actions'

class Orden extends React.Component {
  componentDidMount () {
    this.props.getPlatillosAction()
    this.props.getBebidasAction()
    this.props.getPostresAction()
  }

  handleCleanList = () => { 
    this.props.cleanOrderListAction()
  }

  handleSaveList = () => {
    /*
    {
      "bebida": [2, 1],
      "platillo": [2],
      "postre": [2]
    }
    */

    const myNewList = {}
    for (let i=0; i<this.props.myList.length; i++) {
      const item = this.props.myList[i]
      if (item.category in myNewList) {
        myNewList[item.category].push(item.pk)
      } else {
        myNewList[item.category] = [item.pk]
      }
    }

    this.props.saveOrderListAction(myNewList)
  }

  render () {
    return (
      <>
        {this.props.myList.length > 0 &&
          <Categories title='Mi Orden'>
            <Carousel>
              { this.props.myList.map(item =>
                <CarouselItem key={item.id} {...item} isList />
                )}
              <button onClick={this.handleSaveList} >Guardar</button>
              <button onClick={this.handleCleanList}>Limpiar lista</button>
            </Carousel>
          </Categories>}
        <Categories title='Platillos'>
          <Carousel>
            {this.props.platillos.map(item =>
              <CarouselItem key={item.id} {...item} category="platillo" />
            )}
          </Carousel>
        </Categories>
        <Categories title='Bebidas'>
          <Carousel>
            {this.props.bebidas.map(item =>
              <CarouselItem key={item.id} {...item} category="bebida" />
            )}
          </Carousel>
        </Categories>
        <Categories title='Postres'>
          <Carousel>
            {this.props.postres.map(item =>
              <CarouselItem key={item.id} {...item} category="postre" />
            )}
          </Carousel>
        </Categories>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    myList: state.food.myList,
    platillos: state.food.platillos,
    bebidas: state.food.bebidas,
    postres: state.food.postres
  }
}

const mapDispatchToProps = dispatch => ({
  getPlatillosAction: () => (
    dispatch(getPlatillos())
  ),
  getBebidasAction: () => (
    dispatch(getBebidas())
  ),
  getPostresAction: () => (
    dispatch(getPostres())
  ),
  DeleteAction: () => (
    dispatch(deleteFavorite())
  ),
  cleanOrderListAction: () => (
    dispatch(cleanOrderList())
  ),
  saveOrderListAction: (data) => (
    dispatch(saveOrder(data))
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orden)
