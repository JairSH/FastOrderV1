import React from 'react'
import { connect } from 'react-redux'

import Categories from '../components/categories'
import Carousel from '../components/carousel'
import CarouselItem from '../components/carouselItems'
import '../assets/styles/App.scss'

import API from '../api'

import {
  getFood
} from '../actions'

class Orden extends React.Component {
  componentDidMount() {
    this.props.getFoodAction()
  }

  render () {
    return (
      <>
        <div class="osvaldo">
          {
            this.props.comida_api.map(item => (
              <li key={item.id} >{item.name}</li>
            ))
          }
        </div>
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
    comidas: state.food.comidas,
    comida_api: state.food.comida_api
  }
}

const mapDispatchToProps = dispatch => ({
  getFoodAction: () => (
    dispatch(getFood())
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orden)
