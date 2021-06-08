import PropTypes from 'prop-types';

const Display = ({ total, next, operation }) => (
  <div>
    <h1>
      {total || '0'}
      {operation || ''}
      {next}
    </h1>
  </div>
);

Display.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default Display;
