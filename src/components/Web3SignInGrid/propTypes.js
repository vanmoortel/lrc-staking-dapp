import { PropTypes } from 'prop-types';

const propTypes = {
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  messages: PropTypes.object.isRequired,
  onSelectWallet: PropTypes.func.isRequired,
  onUpdateWalletAddress: PropTypes.func.isRequired,
  walletLoading: PropTypes.number.isRequired,
};

export default propTypes;
