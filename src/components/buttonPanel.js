import React from 'react';
import PropTypes from 'prop-types';
import Button from './buttons';

const ButtonPanel = ({ clickHandler }) => {
  const renderButton = (i) => <Button name={i} handleClick={clickHandler} />;
  return (
    <div data-testid="button-panel">
      <div className="calculator-row">
        {renderButton('AC')}
        {renderButton('+/-')}
        {renderButton('%')}
        {renderButton('/')}
      </div>
      <div className="calculator-row">
        {renderButton('7')}
        {renderButton('8')}
        {renderButton('9')}
        {renderButton('x')}
      </div>
      <div className="calculator-row">
        {renderButton('4')}
        {renderButton('5')}
        {renderButton('6')}
        {renderButton('-')}
      </div>
      <div className="calculator-row">
        {renderButton('1')}
        {renderButton('2')}
        {renderButton('3')}
        {renderButton('+')}
      </div>
      <div className="calculator-row">
        {renderButton('0')}
        {renderButton('.')}
        {renderButton('=')}
      </div>
    </div>
  );
};

/* eslint-disable */
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};
/* eslint-enable */

export default ButtonPanel;
