import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage';
import Travel from './Pages/Travel';
import Travels from './Pages/Travels';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reservation" element={<HomePage />} />
      <Route path="/travels" element={<Travels />} />
      <Route path="/travels/:id" element={<Travel />} />
    </Routes>
  </>
);
export default App;
