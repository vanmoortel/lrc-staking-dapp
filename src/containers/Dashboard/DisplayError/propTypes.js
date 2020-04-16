import { PropTypes } from 'prop-types';

const propTypes = {
  classes: PropTypes.object.isRequired,
};
export const AlertTwitterPropTypes = {
  errorMsg: PropTypes.string.isRequired,
  onSetError: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default propTypes;
