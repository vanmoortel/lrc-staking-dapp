import { PropTypes } from 'prop-types';
import {fetchContractType, sendContractType} from "../../../utils/type";

const propTypes = {
  classes: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  maxAmount: PropTypes.number.isRequired,
  onApprove: PropTypes.func.isRequired,
  onStake: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  allowance: fetchContractType(PropTypes.number),
  approve: sendContractType,
  stake: sendContractType,
};

export default propTypes;