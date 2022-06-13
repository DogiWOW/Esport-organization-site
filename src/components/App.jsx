import React from 'react';
import { BrowserRouter as Switch, Route, BrowserRouter, Router, Routes, Outlet } from "react-router-dom"; 
import Page from './Page';
import Navigation from './Navigation';
import Logo from './Logo';
import Footer from './Footer';

function App() {
  return (
    
     <div className='h-full'>
        <div className='grid grid-cols-4'>
          <Logo />
          <Navigation />
        </div>
        <Outlet />
        <Footer />
      </div>
  );
}

export default App;
