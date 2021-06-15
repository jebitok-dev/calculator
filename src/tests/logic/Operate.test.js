import operate from '../../logic/Operate';

test('should add, minus, multiply, divide and give percentage of two numbers', () => {
  const add = operate('8', '5', '+');
  const minus = operate('8', '5', '-');
  const multiply = operate('8', '5', 'x');
  const divide = operate('10', '5', '/');
  const percent = operate('100', '40', '%');
  const zero = operate('100', '0', '/');
  const percentage = operate('25', '%');
  const decimal = operate('3.3.3.3.3');
  expect(add).toBe('13');
  expect(minus).toBe('3');
  expect(multiply).toBe('40');
  expect(divide).toBe('2');
  expect(percent).toBe('1');
  expect(zero).toBe('Infinity');
  expect(percentage).toBe('0');
  expect(decimal).toBe('0');
});
