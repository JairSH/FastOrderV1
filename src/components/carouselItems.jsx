import React from 'react';
import { connect } from 'react-redux';
import {setFavorite} from '../actions';
import {deleteFavorite} from '../actions';
import '../assets/styles/components/carouselItems.scss';
import plusIcon from '../assets/statics/plus-icon.png';
import removeIcon from '../assets/statics/remove-icon.png';


const CarouselItem = ( props ) => {
  const {id, name,price, description,title, isList} = props;
  const handleSetFavorite = () => {
    props.setFavorite({
     id, name,price, description, title});
     document.getElementById(id).style.display = 'none';
  }
  const handleDeleteFavorite = (itemid) => {
    props.deleteFavorite(itemid);
    document.getElementById(id).style.display = 'inline';
  };
  return(
    <div className="carousel-item">
    <img className="carousel-item__img" src="" alt={title}  />
    <div className="carousel-item__details">
      <div>

        {isList ? 
          <img className="carousel-item__details--img" 
            src={removeIcon} 
            alt="Remove Icon" 
            onClick={() => handleDeleteFavorite(id)}
          /> :
          <img className="carousel-item__details--img" 
            src={plusIcon} 
            alt="Plus Icon" 
            onClick={handleSetFavorite}
            id={id}
          />
        }
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">
        {`${name} ${price} ${description}`}
      </p>
    </div>
  </div>
);
}


const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null,mapDispatchToProps)(CarouselItem);