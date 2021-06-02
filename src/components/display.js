import PropTypes from 'prop-types';

function Display({ answer }) {
  return (
    <div>
      <h1>{answer}</h1>
    </div>
  );
}

Display.defaultProps = {
  answer: '0',
};

Display.propTypes = { answer: PropTypes.string };

export default Display;
