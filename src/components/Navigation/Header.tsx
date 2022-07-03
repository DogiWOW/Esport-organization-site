import React, { useState, useEffect } from 'react'
import { HiMenu } from 'react-icons/hi'
import Logo from '../Logo';
import NavItems from './NavItems';

const Header = (props:any) => {

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

  useEffect(() => {
    mobileMenu ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden')
  },[mobileMenu])

  return (
    <>
    <div className='flex flex-col w-screen'>
        <div className='overflow-hidden font-rightous bg-[#161617] w-screen h-24'>
            <div className='flex'>
                <Logo />
                <div className='flex justify-around invisible lg:visible w-10/12'>
                    <NavItems />
                </div>
            </div>
        </div>
        <div className='bg-[#161617] w-screen h-5 border-t-[0.5px] border-b-[0.5px]'></div>
    </div>
      <div onClick={menuSwitch} className='text-6xl top-5 right-10 absolute lg:invisible md:visible'>
        <HiMenu />
      </div>
      {(windowSize.width < 1024 && mobileMenu) &&
        <div className='z-50 w-screen h-screen fixed bg-black bg-opacity-50'>
          <div onClick={menuSwitch} className='z-50 text-6xl top-5 right-10 fixed lg:invisible md:visible'>
            <HiMenu />
          </div>
          <div className='flex flex-col justify-around text-center fixed w-screen h-screen items-center overflow-auto font-rightous'>
              <NavItems />
          </div>
        </div>
      }
    </>
  )
}

export default Header