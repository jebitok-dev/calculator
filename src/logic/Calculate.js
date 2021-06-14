import operate from './Operate';

function calculate(calculatorDataObj, buttonName) {
  let { total, next, operation } = calculatorDataObj;
  if (buttonName === 'AC') {
    total = '';
    next = '';
    operation = '';
  } else if (buttonName === '+/-') {
    return {
      ...calculatorDataObj,
      total: total * -1,
      next: next * -1,
    };
  } else if (buttonName === '+'
        || buttonName === '-'
        || buttonName === '/'
        || buttonName === 'x'
        || buttonName === '%'
  ) {
    operation = !next ? buttonName : null;
  } else if (buttonName === '=') {
    total = operate(total, next, operation);
    next = '';
    operation = null;
  } else if (!operation) {
    total += buttonName;
  } else {
    next += buttonName;
  }
  return { total, next, operation };
}

export default calculate;
