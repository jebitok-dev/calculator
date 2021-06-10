import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ name, handleClick }) => (
  <button type="button" className="button" data-testid="button" onClick={() => handleClick(name)}>{name}</button>
);

/* eslint-disable */
Button.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
};
 /* eslint-enable */

export default Button;
