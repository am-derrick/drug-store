import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckoutDrug from './CheckoutDrug';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
  return (
    <div className='order'>
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
        <p className='order__id'>
            <small>{order.id}</small>
        </p>
        {order.data.cart?.map(item => {
            <CheckoutDrug
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            hideButton
          />
        })}
        <CurrencyFormat
            renderText={(value) => (
                <h3>Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
        />
    </div>
  )
}

export default Order