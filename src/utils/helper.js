export const arrayToCommaSeparatedString = (data) => {
  return data.map((subzone) => subzone.name).join(', ')
};
