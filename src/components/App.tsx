import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import Logo from './Logo';
import Content from './Content';

function App() {
  return (
    <div className='h-full'>
      <div className='grid grid-cols-2 '>
        <Logo />
        <Navigation />
      </div>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
