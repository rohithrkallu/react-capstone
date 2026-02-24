import React from 'react';
import BookingForm from './BookingForm';

export default function BookingPage({ availableTimes, dispatch }) {
    return (
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    );
}
