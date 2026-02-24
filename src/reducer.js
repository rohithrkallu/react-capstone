/* global fetchAPI */

export const initializeTimes = () => {
  const today = new Date();
  if (typeof fetchAPI === 'function') {
    return fetchAPI(today);
  } else {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }
};

export const updateTimes = (state, action) => {
  if (typeof fetchAPI === 'function') {
    return fetchAPI(new Date(action.date));
  } else {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }
};