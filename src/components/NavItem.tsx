import React from 'react'
import '../index.css';

const NavItem = (props:any) => {
  return (
    <div className='mx-10 pt-16 text-3xl'>
        <div className='link link-underline link-underline-black hover:text-red-500 whitespace-nowrap italic pb-3 cursor-pointer'>
            {props.children}
        </div>
    </div>
  )
}

export default NavItem