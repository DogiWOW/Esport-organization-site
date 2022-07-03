import React from 'react'
import NavItem from './NavItem'

const NavItems = () => {
  return (
    <>
        <NavItem link='/'>Home</NavItem>
        <NavItem link='/csgo'>CS:GO</NavItem>
        <NavItem link='/kontakt'>Contact Us</NavItem>
        <NavItem link='/about'>About</NavItem>
    </>
  )
}

export default NavItems