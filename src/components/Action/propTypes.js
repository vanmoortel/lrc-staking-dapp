import { PropTypes } from 'prop-types';
import {fetchContractType, sendContractType} from "../../utils/type";

const propTypes = {
  classes: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  onApprove: PropTypes.func.isRequired,
  onStake: PropTypes.func.isRequired,
  onClaim: PropTypes.func.isRequired,
  onWithdraw: PropTypes.func.isRequired,
  allowance: fetchContractType(PropTypes.number),
  balance: fetchContractType(PropTypes.number),
  approve: sendContractType,
  stake: sendContractType,
  claim: sendContractType,
  withdraw: sendContractType,
  isLocked: PropTypes.bool.isRequired,
  pendingReward: PropTypes.number.isRequired,
  yourStake: PropTypes.number.isRequired,
  withdrawTime: PropTypes.number.isRequired,
  claimTime: PropTypes.number.isRequired,
};

export default propTypes;