import './App.css';
import Header from './Header';
import React, { useState } from 'react';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI, submitAPI } from './api';
import { initializeTimes, updateTimes } from './bookingUtils';

function AppContent() {
  const [availableTimes, setAvailableTimes] = useState(initializeTimes);
  const navigate = useNavigate();

  const handleUpdateTimes = (date) => {
    updateTimes(date, setAvailableTimes);
  };

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmed');
    }
  };

  return (
    <div className="page-grid">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} updateTimes={handleUpdateTimes} submitForm={submitForm} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
