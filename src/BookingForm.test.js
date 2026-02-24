import { render, screen } from "@testing-library/react";
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