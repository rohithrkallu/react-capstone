export const fetchAPI = (date) => {
  // Mock API that returns different times based on day of week
  const day = date.getDay();
  if (day === 0) { // Sunday
    return ['18:00', '19:00', '20:00', '21:00'];
  } else if (day === 6) { // Saturday
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  } else {
    return ['17:00', '18:00', '19:00', '20:00', '21:00'];
  }
};

export const submitAPI = (formData) => {
  // Mock submit
  return true;
};