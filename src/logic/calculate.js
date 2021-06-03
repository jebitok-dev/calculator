import operate from './operate';

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
        || buttonName === '*'
        || buttonName === '%'
  ) {
    operation = !next ? buttonName : null;
  } else if (buttonName === '=') {
    operate(total, next, operation);
  }
  return { total, next, operation };
}

export default calculate;
