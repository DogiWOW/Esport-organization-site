import React from 'react'
import Playercard from './Playercard'

const Playercards = () => {
  return (
    <div className='-z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-40 justify-items-center mx-16'>
        <Playercard rowspan={true}/>
        <Playercard />
        <Playercard />
        <Playercard />
        <Playercard />
    </div>
  )
}

export default Playercards