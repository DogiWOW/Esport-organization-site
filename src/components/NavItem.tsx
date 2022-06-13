import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom';

const NavItem = (props:any) => {
  return (
        <div className='mx-auto pt-16 text-3xl'>
            <div className='link-underline link-underline-black hover:text-red-500 whitespace-nowrap italic pb-3 cursor-pointer header-font'>
                <Link to={props.link}>
                    {props.children}
                </Link>
            </div>
        </div>
  )
}

export default NavItem