import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import './Navbar.css';

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu} >
          <div >
            <h2 className='vcname'>VCICM</h2>
          </div>          
            <Avatar className="vclogo"alt="Remy Sharp" src="/images/img-11.png"   sx={{ width: 50, height: 50 }} /> 
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/youth'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Youth
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/churches'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Churches
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='signup'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default NavBar;
//<Avatar alt="Remy Sharp" src="./images/vc.png" />