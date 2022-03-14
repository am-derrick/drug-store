import React from 'react';
import CheckoutDrug from './CheckoutDrug';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutDrug from './CheckoutDrug';
import { Link } from 'react-router-dom';

function Payment() {
    const [{ cart, user }, dispatch]= useStateValue();

  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (<Link to='/checkout'>{cart?.length} items</Link>)
            </h1>

            <div className='payment__section'>
               <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>553 Buruburu Phase 3</p>
                    <p>Nairobi, KE</p>
                </div>
            </div>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Confirm your cart and address</h3>
                </div>
                <div className='payment__title'>
                    {cart.map(item => (
                        <CheckoutDrug
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                        />
                    ))}    
                </div>
            </div>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Method of Payment</h3>
                </div>
                <div className='payment__details'>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment