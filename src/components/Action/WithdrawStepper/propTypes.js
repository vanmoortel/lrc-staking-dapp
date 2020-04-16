import { PropTypes } from 'prop-types';
import { sendContractType } from '../../../utils/type';

const propTypes = {
  classes: PropTypes.object.isRequired,
  maxAmount: PropTypes.number.isRequired,
  messages: PropTypes.object.isRequired,
  onDone: PropTypes.func.isRequired,
  onWithdraw: PropTypes.func.isRequired,
  withdraw: sendContractType,
};

export default propTypes;
