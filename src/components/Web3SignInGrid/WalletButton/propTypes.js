import { PropTypes } from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  isFake: PropTypes.bool,
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default propTypes;
