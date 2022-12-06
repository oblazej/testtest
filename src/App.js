import React, { Suspense } from 'react';
import Navbar from "./Components/Navbar";
import Main from './pages/Main/Main';
import About from './pages/About/About';
import Footer from './Components/Footer';
import Offer from './pages/Offer/Offer';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Suspense fallback="loading">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="offer" element={<Offer />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}