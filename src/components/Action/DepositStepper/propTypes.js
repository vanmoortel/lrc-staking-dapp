import { PropTypes } from 'prop-types';
import { fetchContractType, sendContractType } from '../../../utils/type';

const propTypes = {
  allowance: fetchContractType(PropTypes.number),
  approve: sendContractType,
  classes: PropTypes.object.isRequired,
  maxAmount: PropTypes.number.isRequired,
  messages: PropTypes.object.isRequired,
  onApprove: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  onStake: PropTypes.func.isRequired,
  stake: sendContractType,
};

export default propTypes;
