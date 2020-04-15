import { PropTypes } from 'prop-types';
import {sendContractType} from "../../../utils/type";

const propTypes = {
  classes: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  pendingReward: PropTypes.number.isRequired,
  onClaim: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  claim: sendContractType,
};

export default propTypes;