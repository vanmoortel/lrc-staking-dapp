import { PropTypes } from 'prop-types';

const propTypes = {
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  messages: PropTypes.object.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default propTypes;
