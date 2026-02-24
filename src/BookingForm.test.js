import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';
import { fetchAPI } from './api';
import { initializeTimes, updateTimes } from './bookingUtils';

// Mock the fetchAPI function
jest.mock('./api', () => ({
  fetchAPI: jest.fn(),
}));

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} updateTimes={() => {}} submitForm={() => {}} />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
});

test('initializeTimes returns the correct initial times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    fetchAPI.mockReturnValue(expectedTimes);
    expect(initializeTimes()).toEqual(expectedTimes);
    expect(fetchAPI).toHaveBeenCalledWith(new Date());
});

test('updateTimes updates availableTimes with the correct times for the selected date', () => {
    const expectedTimes = ['18:00', '19:00', '20:00', '21:00'];
    fetchAPI.mockReturnValue(expectedTimes);
    const setAvailableTimes = jest.fn();
    updateTimes('2023-01-01', setAvailableTimes);
    expect(fetchAPI).toHaveBeenCalledWith(new Date('2023-01-01'));
    expect(setAvailableTimes).toHaveBeenCalledWith(expectedTimes);
});

test('HTML5 validation attributes are applied correctly', () => {
    render(<BookingForm availableTimes={['17:00', '18:00']} updateTimes={() => {}} submitForm={() => {}} />);
    
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('min');
    
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toHaveAttribute('required');
    
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveAttribute('required');
    
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute('required');
});

test('Submit button is disabled when form is invalid', () => {
    render(<BookingForm availableTimes={['17:00', '18:00']} updateTimes={() => {}} submitForm={() => {}} />);
    
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).toBeDisabled();
});

test('Submit button is enabled when form is valid', () => {
    render(<BookingForm availableTimes={['17:00', '18:00']} updateTimes={() => {}} submitForm={() => {}} />);
    
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    
    // Fill valid data
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);
    const dateString = futureDate.toISOString().split('T')[0];
    
    fireEvent.change(dateInput, { target: { value: dateString } });
    fireEvent.change(timeSelect, { target: { value: '17:00' } });
    fireEvent.change(guestsInput, { target: { value: '2' } });
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
    
    expect(submitButton).toBeEnabled();
});