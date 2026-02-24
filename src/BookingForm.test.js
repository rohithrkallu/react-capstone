import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './reducer';

// Mock the fetchAPI function
const mockFetchAPI = jest.fn();
global.fetchAPI = mockFetchAPI;

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
});

test('initializeTimes returns the correct initial times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    mockFetchAPI.mockReturnValue(expectedTimes);
    expect(initializeTimes()).toEqual(expectedTimes);
});

test('updateTimes returns the same value provided in the state', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    mockFetchAPI.mockReturnValue(expectedTimes);
    const action = { type: 'UPDATE_TIMES', date: '2023-01-01' };
    expect(updateTimes([], action)).toEqual(expectedTimes);
});