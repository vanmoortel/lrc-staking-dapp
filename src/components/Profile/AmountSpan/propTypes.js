import { PropTypes } from 'prop-types';

const propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  format: PropTypes.string,
  isShowLoopring: PropTypes.bool,
  isXl: PropTypes.bool,
  isPercent: PropTypes.bool,
  isDay: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default propTypes;
