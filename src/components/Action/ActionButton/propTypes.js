import { PropTypes } from 'prop-types';

const propTypes = {
  classes: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isLocked: PropTypes.bool.isRequired,
  messages: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  waitingTime: PropTypes.number.isRequired,
};

export default propTypes;
