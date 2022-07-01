import React from 'react'
import NavItem from './NavItem'

const NavItems = () => {
  return (
    <>
        <NavItem link='/'>Home</NavItem>
        <NavItem link='/csgo'>CS:GO</NavItem>
        <NavItem link='/dota2'>DOTA 2</NavItem>
        <NavItem link='/leagueoflegends'>LOL</NavItem>
        <NavItem link='/worldoftanks'>WoT</NavItem>
        <NavItem link='/kontakt'>Contact Us</NavItem>
        <NavItem link='/about'>About</NavItem>
    </>
  )
}

export default NavItems