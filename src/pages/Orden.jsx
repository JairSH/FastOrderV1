import React from 'react';
import { connect } from 'react-redux';

import Categories from '../components/categories';
import Carousel from '../components/carousel';
import CarouselItem from '../components/carouselItems';
import '../assets/styles/App.scss';




const Orden = ({myList, postres, comidas , bebidas}) => {
  
  return (
    <>
      {myList.length > 0 &&
        <Categories title="Mi Orden">
          <Carousel>
            {myList.map(item =>
              <CarouselItem 
              key={item.id} 
              {...item} 
              isList />
            )}
          </Carousel>
        </Categories>
      }
      <Categories title="Comidas">
        <Carousel>
          {comidas.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Bebidas">
        <Carousel>
          {bebidas.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Postres">
        <Carousel>
          {postres.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
    </>
  );
}

const mapStateToProps = state => {
  return{
    myList : state.myList,
    postres : state.postres,
    bebidas : state.bebidas,
    comidas : state.comidas,
  }
}

export default connect(mapStateToProps,null)(Orden);
