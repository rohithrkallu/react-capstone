import React from 'react';
import BookingForm from './BookingForm';

export default function BookingPage({ availableTimes, updateTimes, submitForm }) {
    return (
        <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />
    );
}
