import React from 'react'
import { PlayercardProps } from '../../interfaces/interfaces'

const Playercard = ({image, nickname, position}:PlayercardProps) => {
  return (
    <div className={`h-72 w-56 bg-gradient-to-br from-blue-700 to-cyan-300 z-10 rounded-lg sm:first:col-span-2 lg:first:col-span-4 mx-6`}>
        <div className='h-72 w-56 bg-gradient-to-b from-purple-800 via-purple-500 to-purple-300 z-0 relative rounded-lg top-2 left-2 border-[3px] border-cyan-400 '>
            <div className='pt-3 flex flex-col justify-center items-center'>
              <img src={image} alt={image} className='p-[4px] rounded-[100vmax] border-4 border-cyan-400 mb-3'/>
              <div className='italic border-b-8 border-cyan-400 border-double w-full text-center text-xl'>{nickname}</div>
              <div className='italic text-center font-bold text-2xl tracking-wide mt-8'>{position}</div>
            </div>
        </div>
    </div>
  )
}

export default Playercard