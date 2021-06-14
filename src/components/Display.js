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

/* eslint-disable */
Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};
/* eslint-enable */

export default Display;
