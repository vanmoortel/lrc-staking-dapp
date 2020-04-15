import { PropTypes } from 'prop-types';
import {sendContractType} from "../../../utils/type";

const propTypes = {
  classes: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  maxAmount: PropTypes.number.isRequired,
  onWithdraw: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  withdraw: sendContractType,
};

export default propTypes;