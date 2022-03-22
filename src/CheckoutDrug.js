import React from 'react';
import './CheckoutDrug.css';
import { useStateValue } from './StateProvider';

// the section containing items in cart on the Checkout page
function CheckoutDrug({ id, image, title, price, hideButton }) {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        // handles the event that an item is removed from cart
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
            {!hideButton && (
                <button onClick={removeFromCart}>Remove from Cart</button>
            )}
        </div>
    </div>
  )
}

export default CheckoutDrug