import React, { useState } from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
import calculate from '../logic/calculate';
import '../styles/styles.css';

const App = () => {
  const [total, setTotal] = useState('');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState(null);

  const handleClick = (buttonName) => {
    const data = { total, next, operation };
    const calc = calculate(data, buttonName);
    setTotal(calc.total);
    setNext(calc.next);
    setOperation(calc.operation);
  };

  return (
    <div className="is-flex calculator">
      <Display next={next} total={total} operation={operation} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
