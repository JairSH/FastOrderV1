import React from 'react'
import { connect } from 'react-redux'
import Categories from '../components/categories'
import Carousel from '../components/carousel'
import CarouselItem from '../components/carouselItems'
import NewClient from '../components/newClient'
import '../assets/styles/App.scss'
import {
  getPlatillos,
  getBebidas,
  getPostres
} from '../actions'

class Orden extends React.Component {
  componentDidMount () {
    this.props.getPlatillosAction()
    this.props.getBebidasAction()
    this.props.getPostresAction()
  }

  render () {
    return (
      <>
        <NewClient />
        {this.props.myList.length > 0 &&
          <Categories title='Mi Orden'>
            <Carousel>
              {this.props.myList.map(item =>
                <CarouselItem key={item.id} {...item} isList />
              )}
            </Carousel>
          </Categories>}
        <Categories title='Platillos'>
          <Carousel>
            {this.props.platillos.map(item =>
              <CarouselItem key={item.id} {...item} />
            )}
          </Carousel>
        </Categories>
        <Categories title='Bebidas'>
          <Carousel>
            {this.props.bebidas.map(item =>
              <CarouselItem key={item.id} {...item} />
            )}
          </Carousel>
        </Categories>
        <Categories title='Postres'>
          <Carousel>
            {this.props.postres.map(item =>
              <CarouselItem key={item.id} {...item} />
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
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orden)
