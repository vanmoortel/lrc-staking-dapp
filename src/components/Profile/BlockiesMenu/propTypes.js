import { PropTypes } from 'prop-types';

const propTypes = {
  classes: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  walletAddress: PropTypes.string.isRequired,
  onEditAddress: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default propTypes;
