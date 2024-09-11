import React from 'react'
import logo from '../assets/logo/logo.webp'

const Header = () => {
  return (
    <div className='bg-black flex items-center justify-center p-2'>
        <img src={logo} alt="logo" width="150" height="auto" />
    </div>
  )
}

export default Header