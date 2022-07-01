import React from 'react';
import { Outlet } from "react-router-dom"; 
import Navigation from './Navigation/Navigation';
import Logo from './Logo';

function App() {
  return (
      <div className='flex-col h-screen'>
        <div className='w-full min-h-min grid grid-cols-4 mb-10'>
          <Logo />
          <Navigation />
        </div>
        <Outlet />
      </div>
      
  );
}

export default App;
