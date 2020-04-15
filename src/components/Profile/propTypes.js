import { PropTypes } from 'prop-types';

const propTypes = {
  classes: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  walletAddress: PropTypes.string.isRequired,
  stake: PropTypes.number.isRequired,
  pendingReward: PropTypes.number.isRequired,
  tokenAge: PropTypes.number.isRequired,
  stakeTotal: PropTypes.number.isRequired,
  feesTotal: PropTypes.number.isRequired,
  share: PropTypes.number.isRequired,
  tokenAgeList: PropTypes.arrayOf(PropTypes.number).isRequired,
  onEditAddress: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isChartLoading: PropTypes.bool.isRequired,
};

export default propTypes;
