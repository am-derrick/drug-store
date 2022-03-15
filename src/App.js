import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import { loadStorage } from '@stripe/react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  'pk_test_51KdXbYKeW4rZEkPG8z4BOjNODjQC1RlyqfHKnh8QusXUQWfoQWXDDdQ0xtqdLL6cCRqC19Hr4KvuFOczLLSZZtIf00BBJYHcVw'
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // listener runs once when app launched
    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // if user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user was logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/login' element={[<Login /> ]} />
          <Route path='/checkout' element={[<Header />,<Checkout />]} />
          <Route path='/payment' element={[<Header />,<Elements stripe={promise}><Payment /></Elements>]} />
          <Route path='/' element={[<Header/>,<Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
