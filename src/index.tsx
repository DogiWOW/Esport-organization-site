import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Csgo from './components/Sections/Csgo/Csgo';
import Dota2 from './components/Sections/Dota2/Dota2';
import Lol from './components/Sections/Lol/Lol';
import Wot from './components/Sections/Wot/Wot';
import Kontakt from './components/Sections/ContactUs/ContactUs';
import About from './components/Sections/About/About';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path="/csgo" element={<Csgo />} />
        <Route path="/dota2" element={<Dota2 />} />
        <Route path="/leagueoflegends" element={<Lol />} />
        <Route path="/worldoftanks" element={<Wot />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
