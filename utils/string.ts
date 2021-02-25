// eslint-disable-next-line import/prefer-default-export
export const categoryCapitalizer = (string: string) => {
  const [firstLetter, secondLetter, ...rest] = string;
  if (firstLetter === 'i') {
    return `i${secondLetter.toUpperCase()}${rest.join('')}`;
  }
  return firstLetter.toUpperCase() + secondLetter + rest.join('');
};
