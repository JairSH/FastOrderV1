import React from 'react'
import { connect } from 'react-redux'
import Categories from '../components/categories'
import Carousel from '../components/carousel'
import CarouselItem from '../components/carouselItems'
import '../assets/styles/App.scss'
import {
  getFood,
  getBebidas
} from '../actions'

class Orden extends React.Component {
  componentDidMount () {
    this.props.getFoodAction()
    this.props.getBebidasAction()
  }

  render () {
    return (
      <>
        {this.props.myList.length > 0 &&
          <Categories title='Mi Orden'>
            <Carousel>
              {this.props.myList.map(item =>
                <CarouselItem key={item.id} {...item} isList />
              )}
            </Carousel>
          </Categories>}
        <Categories title='Comidas'>
          <Carousel>
            {this.props.comidas.map(item =>
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
    postres: state.food.postres,
    bebidas: state.food.bebidas,
    comidas: state.food.comidas
  }
}

const mapDispatchToProps = dispatch => ({
  getFoodAction: () => (
    dispatch(getFood())
  ),
  getBebidasAction: () => (
    dispatch(getBebidas())
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orden)
