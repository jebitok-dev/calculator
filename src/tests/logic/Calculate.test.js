import calculate from '../../logic/Calculate';

test('should clear display screen when "AC" is pressed', () => {
  const data = {
    total: 5,
    next: 8,
    operation: '+',
  };

  const clear = {
    total: '',
    next: '',
    operation: '',
  };

  const newData = calculate(data, 'AC');
  expect(newData).toEqual(clear);
});

test('should show buttonName of given operations', () => {
  const data = { total: 8, next: '', operation: '+' };
  const newData = calculate(data, '+');
  expect(newData.operation).toEqual('+');
  expect(newData.next).toEqual('');
});

test('should show minus or plus number when "+/-" is pressed', () => {
  const data = { total: 8, next: '', operation: 'x' };
  const newData = calculate(data, '+/-');
  expect(newData.total).toEqual(-8);
});

test('should display output when "=" is pressed', () => {
  const data = { total: 13, next: 8, operation: 'x' };
  const newData = calculate(data, '=');
  expect(newData.total).toEqual('104');
  expect(newData.next).toEqual('');
  expect(newData.operation).toEqual(null);
});

test('should display total is there is no operation', () => {
  const data = { total: 13, next: 8, operation: '' };
  const newData = calculate(data, '');
  expect(newData.total).toEqual('13');
});

test('should show next if there is operation', () => {
  const data = { total: 13, next: 8, operation: '/' };
  const newData = calculate(data, '/');
  expect(newData.next).toEqual(8);
});
