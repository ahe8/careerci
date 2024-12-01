export const getCurrentDate = () => {
  return new Date();
};

export const getFormattedDate = (date: Date) => {
  return date.toISOString().substring(0, 10);
};
