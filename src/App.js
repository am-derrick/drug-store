import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

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
          <Route path='/' element={[<Header/>,<Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
