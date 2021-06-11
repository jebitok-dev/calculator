import PropTypes from 'prop-types';

const Display = ({ total, next, operation }) => (
  <div className="is-display" data-testid="display-panel">
    <h2 className="display-heading">
      {total || '0'}
      {operation || ''}
      {next}
    </h2>
  </div>
);

Display.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default Display;
