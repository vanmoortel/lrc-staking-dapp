import { PropTypes } from 'prop-types';
import { fetchContractType, sendContractType } from '../../utils/type';

const propTypes = {
  allowance: fetchContractType(PropTypes.string),
  approve: sendContractType,
  balance: fetchContractType(PropTypes.string),
  claim: sendContractType,
  claimTime: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  isLocked: PropTypes.bool.isRequired,
  messages: PropTypes.object.isRequired,
  onApprove: PropTypes.func.isRequired,
  onClaim: PropTypes.func.isRequired,
  onStake: PropTypes.func.isRequired,
  onWithdraw: PropTypes.func.isRequired,
  pendingReward: PropTypes.string.isRequired,
  stake: sendContractType,
  withdraw: sendContractType,
  withdrawTime: PropTypes.number.isRequired,
  yourStake: PropTypes.string.isRequired,
};

export default propTypes;
