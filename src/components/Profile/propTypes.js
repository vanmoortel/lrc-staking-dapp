import { PropTypes } from 'prop-types';

const propTypes = {
  classes: PropTypes.object.isRequired,
  feesTotal: PropTypes.number.isRequired,
  isChartLoading: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isShowDollar: PropTypes.bool,
  loopringPrice: PropTypes.number.isRequired,
  messages: PropTypes.object.isRequired,
  onEditAddress: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onSetIsShowDollar: PropTypes.func.isRequired,
  pendingReward: PropTypes.number.isRequired,
  share: PropTypes.number.isRequired,
  stake: PropTypes.number.isRequired,
  stakeTotal: PropTypes.number.isRequired,
  tokenAge: PropTypes.number.isRequired,
  tokenAgeList: PropTypes.arrayOf(PropTypes.number).isRequired,
  walletAddress: PropTypes.string.isRequired,
};

export default propTypes;
