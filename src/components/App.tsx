import React from 'react';
import { Outlet } from "react-router-dom"; 
import Header from './Navigation/Header';

function App() {
  return (
      <div className='flex-col h-screen'>
        <div className='w-full min-h-min grid grid-cols-4 mb-10'>
          <Header />
        </div>
        <Outlet />
      </div>
      
  );
}

export default App;
