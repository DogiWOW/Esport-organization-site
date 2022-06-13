import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'
import Logo from './Logo'

const Page = () => {
  return (
    <div className='h-full'>
        <div className='grid grid-cols-2 '>
          <Logo />
          <Navigation />
        </div>
        <Footer />
      </div>
  )
}

export default Page