import { PropTypes } from 'prop-types';

// PropType Type for read request to smart contract
export const fetchContractType = (valueType) => PropTypes.shape({
  error: PropTypes.object,
  isLoaded: PropTypes.bool,
  isLoading: PropTypes.bool,
  value: valueType,
}).isRequired;

// PropType Type for write request to smart contract
export const sendContractType = PropTypes.shape({
  error: PropTypes.object,
  isLoading: PropTypes.bool,
  receipt: PropTypes.object,
}).isRequired;
