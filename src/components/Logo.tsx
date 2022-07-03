import React from 'react'
import logo from '../images/logo.png'

const Logo = () => {
  return (
    <div className='pl-20 w-2/12'>
        <img src={logo} alt="logo" className='min-w-[100px] w-[100px]'/>
    </div>
  )
}

export default Logo