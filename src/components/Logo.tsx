import React from 'react'
import logo from '../images/logo.png'

const Logo = () => {
  return (
    <div className='flex'>
        <img src={logo} alt="logo" className='w-6/12 block ml-auto mr-auto pt-5'/>
    </div>
  )
}

export default Logo