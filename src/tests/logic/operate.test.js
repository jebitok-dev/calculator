import operate from '../../logic/operate';

test('should add, minus, multiply, divide and give percentage of two numbers', () => {
  const add = operate('8', '5', '+');
  const minus = operate('8', '5', '-');
  const multiply = operate('8', '5', 'x');
  const divide = operate('10', '5', '/');
  const percent = operate('100', '40', '%');
  expect(add).toBe('13');
  expect(minus).toBe('3');
  expect(multiply).toBe('40');
  expect(divide).toBe('2');
  expect(percent).toBe('1');
});
