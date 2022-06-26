import React from 'react'
import Playercard from './Playercard'
import ak1nash1 from '../../images/players/csgo/ak1nash1.png'
import JaykeS from '../../images/players/csgo/JaykeS.png'
import sh1den_ from '../../images/players/csgo/sh1den_.png'
import Szuti from '../../images/players/csgo/Szuti.png'
import zeusnity from '../../images/players/csgo/zeusnity.png'

const Playercards = () => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-40 justify-items-center mx-16'>
        <Playercard image={sh1den_} nickname='Oliwier "sh1den_" S.' position='In Game Leader'/>
        <Playercard image={ak1nash1} nickname='Grzegorz "ak1nash1" B.' position='AWP'/>
        <Playercard image={JaykeS} nickname='Jakub "JaykeS" Ś.' position='Entry, Rifler'/>
        <Playercard image={Szuti} nickname='Kacper "Szuti" S.' position='Rifler'/>
        <Playercard image={zeusnity} nickname='Michał "zeusnity" C.' position='AWP, Rifler'/>
    </div>
  )
}

export default Playercards