import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';

// The Login page of the web app
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // the sign in option for users with accounts
  const signIn = e => {
    // prevents default action by the user
    e.preventDefault();

    // handles authentication using firebase and navigates to home page
    auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            navigate('/')
        })
        .catch(error => alert(error.message))
  }

  // the register option for first time users
  const register = e => {
    // prevents default action
    e.preventDefault();

    // handles authentication with firebase
    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          console.log(auth);
          if (auth) {
              navigate('/')
          }
        })
        .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
        <Link to='/'>
          <img 
            className='login__logo'
            src='https://firebasestorage.googleapis.com/v0/b/drug-store-9dcfb.appspot.com/o/ZDS%20Logo%20with%20Bkgrnd.png?alt=media&token=579e3b18-b8c5-4723-bc57-d332ce5a4ecf' 
          />
        </Link>

      <div className='login__container'>
        <h1>Sign In</h1>
        <form>
          <h5>Email Address</h5>
          <input type='text' value={email}
          onChange={e => setEmail(e.target.value)} /> 

          <h5>Password</h5>
          <input type='password' value={password}
          onChange={e => setPassword(e.target.value)} />

          <button type='submit' onClick={signIn}
          className='login__signInButton'>Sign In</button>
        </form>

        <p>
          By sigining in you agree to ZOE HEALTH SERVICES Terms and Conditions. Welcome to Zoe Drug Store, your trusted online store. 
        </p>

        <button onClick={register}
        className='login__registerButton'>Create your Account</button>  
      </div>
    </div>
  )
}

export default Login;
