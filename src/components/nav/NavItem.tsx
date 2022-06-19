import React from 'react'
import '../../index.css';
import { NavLink } from 'react-router-dom';

const NavItem = (props:any) => {
  return (
        <div className='mx-auto pt-10 text-3xl'>
            <div className=''>
                <NavLink to={props.link} className={({ isActive }) => (isActive ? 'navlink-active' : 'navLink')}>
                    {props.children}
                </NavLink>
            </div>
        </div>
  )
}

export default NavItem