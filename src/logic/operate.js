import Big from 'big.js';

function operate(numberOne, numberTwo, operator) {
  let ans = 0;
  const x = Big(numberOne);
  const y = Big(numberTwo);
  switch (operator) {
    case '+':
      ans = x + y;
      break;
    case '-':
      ans = x - y;
      break;
    case '*':
      ans = x * y;
      break;
    case '/':
      ans = x / y;
      break;
    case '%':
      ans = (x % y) / 100;
      break;
    default:
      ans = 0;
  }
  return ans.toString();
}

export default operate;
