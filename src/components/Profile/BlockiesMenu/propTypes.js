import { PropTypes } from 'prop-types';

const propTypes = {
  classes: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  onEditAddress: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  walletAddress: PropTypes.string.isRequired,
};

export default propTypes;
