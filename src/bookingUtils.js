import { fetchAPI } from './api';

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (date, setAvailableTimes) => {
  setAvailableTimes(fetchAPI(new Date(date)));
};