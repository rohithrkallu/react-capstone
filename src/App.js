import './App.css';
import Header from './Header';
import React, { useReducer } from 'react';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookingPage from './BookingPage';
import { initializeTimes, updateTimes } from './reducer';

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <BrowserRouter>
      <div className="page-grid">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
