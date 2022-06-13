import React from 'react'
import NavItem from './NavItem'

const Navigation = () => {
  return (
    <div className='flex justify-end pr-14'>
      <NavItem>HOME</NavItem>
      <NavItem>CS:GO</NavItem>
      <NavItem>DOTA 2</NavItem>
      <NavItem>LOL</NavItem>
      <NavItem>WoT</NavItem>
      <NavItem>KONTAKT</NavItem>
      <NavItem>O NAS</NavItem>
    </div>
  )
}

export default Navigation