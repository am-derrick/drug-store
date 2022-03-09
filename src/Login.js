import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/')
        })
        .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          console.log(auth);
          if (auth) {
              history.push('/')
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
          By sigining in you agree to ZOE HEALTH SERVICES Terms and Conditions.  
        </p>

        <button onClick={register}
        className='login__registerButton'>Create Account</button>  
      </div>
    </div>
  )
}

export default Login;
