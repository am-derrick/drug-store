import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import CheckoutDrug from './CheckoutDrug';
import userEvent from '@testing-library/user-event';

// the Checkout page
function Checkout() {
  const [{ cart, user}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img
              className='checkout__ad'
              src='https://firebasestorage.googleapis.com/v0/b/drug-store-9dcfb.appspot.com/o/Checkout%20Ad%20Banner%20(970%20%C3%97%2090%20px).png?alt=media&token=514c2bb8-ac33-48c7-9668-94221b775f8a' alt=''/>

          <div>
              <h3>Hello {user?.email}</h3>
              <h2 className='checkout__title'>Your Cart</h2>

              {cart.map(item => ( 
                // creates an array and populates it with items added to the cart
                <CheckoutDrug
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              ))}
          </div>
        </div>

        <div className='checkout__right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout