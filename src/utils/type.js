import { PropTypes } from 'prop-types';

export const fetchContractType = (valueType) => PropTypes.shape({
  error: PropTypes.object,
  isLoaded: PropTypes.bool,
  isLoading: PropTypes.bool,
  value: valueType,
}).isRequired;

export const sendContractType = PropTypes.shape({
  error: PropTypes.object,
  isLoading: PropTypes.bool,
  receipt: PropTypes.object,
}).isRequired;
