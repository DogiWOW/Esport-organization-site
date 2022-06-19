import React from 'react'
import logo from '../images/logo.png'

const Logo = () => {
  return (
    <div className=' flex'>
        <img src={logo} alt="logo" className='min-w-fit w-6/12 block ml-auto mr-auto pl-5 pt-5'/>
    </div>
  )
}

export default Logo