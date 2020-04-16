import { PropTypes } from 'prop-types';

const propTypes = {
  classes: PropTypes.object.isRequired,
  format: PropTypes.string,
  isDay: PropTypes.bool,
  isLoading: PropTypes.bool,
  isPercent: PropTypes.bool,
  isShowLoopring: PropTypes.bool,
  isXl: PropTypes.bool,
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default propTypes;
