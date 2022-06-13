import React from 'react'
import logo from '../images/Logo.jpg'

const Logo = () => {
  return (
    <div className='flex justify-left pt-10 pl-10'>
        <img src={logo} alt="logo" className='logo-size rounded-full'/>
    </div>
  )
}

export default Logo