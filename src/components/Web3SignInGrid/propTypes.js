import { PropTypes } from 'prop-types';

const propTypes = {
  classes: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  walletLoading: PropTypes.number.isRequired,
  onSelectWallet: PropTypes.func.isRequired,
  onUpdateWalletAddress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default propTypes;
