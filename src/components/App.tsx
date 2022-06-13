import React from 'react';
import { Outlet } from "react-router-dom"; 
import Navigation from './Navigation';
import Logo from './Logo';

function App() {
  return (
    
     <div className='h-full'>
        <div className='grid grid-cols-4'>
          <Logo />
          <Navigation />
        </div>
        <Outlet />
      </div>
  );
}

export default App;
