import { PropTypes } from 'prop-types';
import { fetchContractType, sendContractType } from '../../utils/type';

const propTypes = {
  allowance: fetchContractType(PropTypes.number),
  approve: sendContractType,
  balance: fetchContractType(PropTypes.number),
  claim: sendContractType,
  claimTime: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  isLocked: PropTypes.bool.isRequired,
  messages: PropTypes.object.isRequired,
  onApprove: PropTypes.func.isRequired,
  onClaim: PropTypes.func.isRequired,
  onStake: PropTypes.func.isRequired,
  onWithdraw: PropTypes.func.isRequired,
  pendingReward: PropTypes.number.isRequired,
  stake: sendContractType,
  withdraw: sendContractType,
  withdrawTime: PropTypes.number.isRequired,
  yourStake: PropTypes.number.isRequired,
};

export default propTypes;
