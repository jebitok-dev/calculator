import Big from 'big.js';

function operate(numberOne, numberTwo, operator) {
  if (!numberOne || !numberTwo || !operator) return '0';
  let ans = 0;
  const x = Big(numberOne);
  const y = Big(numberTwo);
  switch (operator) {
    case '+':
      ans = x.plus(y);
      break;
    case '-':
      ans = x - y;
      break;
    case 'x':
      ans = x * y;
      break;
    case '/':
      ans = x / y;
      break;
    case '%':
      ans = (x) / 100;
      break;
    default:
      ans = 0;
  }
  return ans.toString();
}

export default operate;
