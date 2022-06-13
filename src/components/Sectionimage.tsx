import React from 'react'

const Sectionimage = (props:any) => {
  return (
    <div className='flex justify-center align-middle'>
        <img src={props.src} alt="" className='object-contain h-80 rounded-3xl'/>
    </div>
  )
}

export default Sectionimage