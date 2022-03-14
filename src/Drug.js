import React from 'react';
import './Drug.css';
import { useStateValue } from './StateProvider';

function Drug({ id, title, image, price}) {
    const [{ cart }, dispatch]= useStateValue();
    
    const addToCart = () => {
        //pushes item to data layer
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
            },
        });
    };

  return (
    <div className='drug'>
        <div className='drug__info'>
            <p>{title}</p>
            <p className='drug__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
        </div>
        <img src={image} alt=''/>
        <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Drug;