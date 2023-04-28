import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';
import { BiMenu } from "react-icons/bi"; //boxIcons
import {BiX} from "react-icons/bi";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => (!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else {
      setButton(true)
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <>
    <nav className='navbar'>
        <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            NEXT NYC 
            </Link>
            <div className='menu-icon' onClick={handleClick} >
              {click ? (<BiX/>) : (<BiMenu/>)}
              </div> 
              <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/coaches' className='nav-links' onClick={closeMobileMenu}>
                    Coaches
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/lessons' className='nav-links' onClick={closeMobileMenu}>
                    Lessons
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/info' className='nav-links' onClick={closeMobileMenu}>
                    Info
                  </Link>
                </li>
              </ul>
              {button && <Button buttonStyle='btn--outline' to='./signup'>Sign Up</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar
