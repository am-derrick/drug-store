import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/login' element={[<Login /> ]} />
          <Route path='/checkout' element={[<Header />,<Checkout />,<Footer />]} />
          <Route path='/' element={[<Header/>,<Home />,<Footer />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
