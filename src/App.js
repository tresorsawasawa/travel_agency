import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import Contacts from './Pages/Contacts';
import Navbar from './Components/Navbar/Navbar';
import Travels from './Pages/Travels';
import Travel from './Pages/Travel';
import About from './Pages/About';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/travels" element={<Travels />} />
      <Route path="/travels/:id" element={<Travel />} />
    </Routes>
  </>
);

export default App;
