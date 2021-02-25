import { categoryCapitalizer } from '../string';

test('capitalizes the value', () => {
  expect(categoryCapitalizer('ithing')).toBe('iThing');
  expect(categoryCapitalizer('test')).toBe('Test');
});
