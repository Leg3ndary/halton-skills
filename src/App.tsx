import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Elementary from './Pages/Elementary';
import Secondary from './Pages/Secondary';
import Scopes from './Pages/Scopes';
import SponsorDonate from './Pages/SponsorDonate';
import News from './Pages/News';
import NavBar from './Components/NavBar';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/elementary-competitions" element={<Elementary />} />
          <Route path="/secondary-competitions" element={<Secondary />} />
          <Route path="/scopes" element={<Scopes />} />
          <Route path="/sponsors-donate" element={<SponsorDonate />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
