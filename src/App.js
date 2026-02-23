import './App.css';
import Header from './Header';
import React from 'react';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookingPage from './BookingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="page-grid">
        <Header />
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/booking" element={<BookingPage/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
