import React from 'react'
import NavItem from './NavItem'

const Navigation = () => {
  return (
    <div className='flex justify-around pr-14 overflow-hidden col-span-3 font-rightous'>
      <NavItem link='/'>HOME</NavItem>
      <NavItem link='/csgo'>CS:GO</NavItem>
      <NavItem link='/dota2'>DOTA 2</NavItem>
      <NavItem link='/leagueoflegends'>LOL</NavItem>
      <NavItem link='/worldoftanks'>WoT</NavItem>
      <NavItem link='/kontakt'>KONTAKT</NavItem>
      <NavItem link='/about'>O NAS</NavItem>
    </div>
  )
}

export default Navigation