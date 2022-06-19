import React, { useState, useEffect } from 'react'
import NavItem from './NavItem'
import { HiMenu } from 'react-icons/hi'
import NavItems from './NavItems';

const Navigation = (props:any) => {

  const [mobileMenu, toggleMobileMenu] = useState(false);
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  const menuSwitch = () => {
    mobileMenu ? 
    toggleMobileMenu(false) :
    toggleMobileMenu(true);
  };

  const detectSize = () => {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [setWindowSize]);

  return (
    <>
      <div className='lg:flex lg:justify-around mr-10 overflow-hidden col-span-3 font-rightous hidden md:visible'>
        <NavItems />
      </div>
      <div onClick={menuSwitch} className='text-6xl top-10 right-10 absolute lg:invisible md:visible'>
        <HiMenu />
      </div>
      {(windowSize.width < 1024 && mobileMenu) &&
        <div className='w-screen h-screen fixed bg-black bg-opacity-50'>
          <div onClick={menuSwitch} className='z-10 text-6xl top-10 right-10 absolute lg:invisible md:visible'>
            <HiMenu />
          </div>
          <div className='flex text-center fixed w-screen h-screen items-center justify-center overflow-auto font-rightous'>
            <div>
              <NavItems />
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Navigation