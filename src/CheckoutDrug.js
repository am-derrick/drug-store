import React from 'react';
import './CheckoutDrug.css';
import { useStateValue } from './StateProvider';

function CheckoutDrug({ id, image, title, price }) {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id, 
        })
    }

    return (
    <div className='checkoutDrug'>
        <img className='checkoutDrug__image' src={image} />
        <div className='checkoutDrug__info'>
            <p className='checkoutDrug__title'>{title}</p>
            <p className='checkoutDrug__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <button onClick={removeFromCart}>Remove from Cart</button>
        </div>
    </div>
  )
}

export default CheckoutDrug