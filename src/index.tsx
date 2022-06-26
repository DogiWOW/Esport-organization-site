import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Csgo from './components/navcontent/Csgo';
import Dota2 from './components/navcontent/Dota2';
import Lol from './components/navcontent/Lol';
import Wot from './components/navcontent/Wot';
import Kontakt from './components/navcontent/ContactUs';
import About from './components/navcontent/About';

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
