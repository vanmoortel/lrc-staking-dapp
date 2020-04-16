import { PropTypes } from 'prop-types';
import { sendContractType } from '../../../utils/type';

const propTypes = {
  claim: sendContractType,
  classes: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  onClaim: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  pendingReward: PropTypes.number.isRequired,
};

export default propTypes;
