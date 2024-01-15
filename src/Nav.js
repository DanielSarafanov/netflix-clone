import React from 'react'
import '../src/Nav.css'
import HeaderLogo from '../src/public/NetflixHeaderLogo.png'
import ProfileImage from '../src/public/NetflixProfileImage.jpeg'

function Nav() {
  return (
    <div className='nav nav_black'>

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
