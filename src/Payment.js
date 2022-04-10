import React, { useEffect, useState }from 'react';
import CheckoutDrug from './CheckoutDrug';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { Link, useNavigate } from 'react-router-dom';
import { cardElement, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';

// the payment page of th web app
function Payment() {
    const [{ cart, user }, dispatch]= useStateValue();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // gets secret required for Stripe payment
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // multiply by 100 because Stripe accepts upto cents
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [cart])

    console.log('THE SECRET IS >>>', clientSecret)

    const handleSubmit = async (event) => {
        // When a user submits using Stripe
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent is how stripe confirms payment
            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  cart: cart,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              })

            setSucceeded(true);
            setError(null);
            setProcessing(false);
            
            dispatch({
                type: 'EMPTY_CART'
            })

            navigate('../orders')
        })
    }

    const handleChange = event => {
        // Listens for event changes and handles errors
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    }

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
                <div className='payment__items'>
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
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className='payment__priceContainer'>
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
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : 'Complete Order'}</span>
                            </button>
                        </div>

                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment