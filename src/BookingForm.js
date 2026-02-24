import React, { useState } from 'react';

function BookingForm({ availableTimes, updateTimes, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = (currentDate, currentTime, currentGuests, currentOccasion) => {
    const today = new Date().toISOString().split('T')[0];
    const isDateValid = currentDate >= today && currentDate !== '';
    const isTimeValid = currentTime !== '';
    const isGuestsValid = currentGuests >= 1 && currentGuests <= 10;
    const isOccasionValid = currentOccasion !== '';
    setIsFormValid(isDateValid && isTimeValid && isGuestsValid && isOccasionValid);
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    updateTimes(newDate);
    validateForm(newDate, time, guests, occasion);
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    setTime(newTime);
    validateForm(date, newTime, guests, occasion);
  };

  const handleGuestsChange = (e) => {
    const newGuests = parseInt(e.target.value, 10);
    setGuests(newGuests);
    validateForm(date, time, newGuests, occasion);
  };

  const handleOccasionChange = (e) => {
    const newOccasion = e.target.value;
    setOccasion(newOccasion);
    validateForm(date, time, guests, newOccasion);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      const formData = { date, time, guests, occasion };
      submitForm(formData);
    }
  };

  return (
    <section aria-labelledby="booking-heading">
      <h2 id="booking-heading">Book a Table</h2>
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        min={new Date().toISOString().split('T')[0]}
        required
        onChange={handleDateChange}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        required
        onChange={handleTimeChange}
      >
        {availableTimes.map((timeOption) => (
          <option key={timeOption} value={timeOption}>
            {timeOption}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        required
        onChange={handleGuestsChange}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        required
        onChange={handleOccasionChange}
      >
        <option value="">Select occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" disabled={!isFormValid} aria-label="On Click" />
    </form>
    </section>
  );
}

export default BookingForm;