import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

/* the header of the web app's home and checkout page, it contains the
logo, search bar, navigation option with login details, orders and cart
*/
function Header() {
    const [{ cart, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        // if already signed in, show sign out option
        if (user) {
            auth.signOut();
        }
    }

  return (
    <div className='header'>
        <Link to='/'>
            <img 
            className="header__logo"
            src="https://firebasestorage.googleapis.com/v0/b/drug-store-9dcfb.appspot.com/o/Zoe%20Drug%20Store%20Logo.png?alt=media&token=73014720-31e0-4093-8f79-c5c690a33cd3" alt=''
            />
        </Link>

        <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchIcon className="header__searchIcon" />
        </div>

        <div className='header__nav'>
            <Link to={!user &&'/login'}>
                <div onClick={handleAuthentication}
                className='header__option'>
                    <span className='header__optionOne'>Hey {!user ? 'Guest' : user.email}</span>
                    <span className='header__optionTwo'>{user ? 'Sign Out': 'Sign In'}</span>
                </div>
            </Link>
            
            <Link to='/orders'>
                <div className='header__option'>
                    <span className='header__optionOne'>Your</span>
                    <span className='header__optionTwo'>Orders</span>
                </div>
            </Link>

            <Link to='/checkout'>
                <div className='header__optionCart'>
                    <ShoppingCartIcon />
                    <span className='header__optionTwo header__cartCount'>{cart?.length}</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Header;