import React from 'react';
import { Outlet } from "react-router-dom"; 
import Navigation from './nav/Navigation';
import Logo from './Logo';

function App() {
  return (
     <div className='flex-col h-screen'>
        <div className='h-1/5 grid grid-cols-4'>
          <Logo />
          <Navigation />
        </div>
        <Outlet />
      </div>
  );
}

export default App;
