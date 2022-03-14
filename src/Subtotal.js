import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';

function Subtotal() {
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
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
        />

        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal;