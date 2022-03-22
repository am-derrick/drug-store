import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

// computes the sub total when items are added to the cart
function Subtotal() {
  const navigate = useNavigate();
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>Subtotal ({cart.length} items):</p>
                    <p><strong>{value}</strong></p>
                </>
            )}
            decimalScale={2} // ensures 2 decimal places
            value={getCartTotal(cart)}
            displayType={'text'}
            thousandSeparator={true} // adds a comma after before the thousandthvalue
            prefix={'$'}
        />

        <button onClick={e => navigate('../payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal;