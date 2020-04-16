import { PropTypes } from 'prop-types';

const propTypes = {
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  isFake: PropTypes.bool,
  isLoading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default propTypes;
