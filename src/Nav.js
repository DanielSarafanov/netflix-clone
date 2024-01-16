import React, { useEffect, useState } from 'react'
import '../src/Nav.css'
import HeaderLogo from '../src/public/NetflixHeaderLogo.png'
import ProfileImage from '../src/public/NetflixProfileImage.jpeg'

function Nav() {

const [show, handleShow] = useState(false);

const transitionNavBar = () => {
  if (window.scrollY > 100) {
    handleShow(true);
  }else{
    handleShow(false);
  }
}

useEffect(() => {
  window.addEventListener("scroll", transitionNavBar);
  return () => window.removeEventListener('scroll', transitionNavBar);
}, []);

  return (
    //only show background colour when the user scrolls though 100% of the screen
    <div className={`nav ${show && 'nav_black'}`}>

      <div className='nav_content'>
        <img 
        className='nav_logo'
        src={HeaderLogo} 
        alt='Logo For Header'
        />

        <img 
        className='nav_profile'
        src={ProfileImage}
        alt='Profile'
        />

      </div>
    </div>
  )
}

export default Nav
