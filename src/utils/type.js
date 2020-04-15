import {PropTypes} from "prop-types";

export const fetchContractType = (valueType) => PropTypes.shape({
  value: valueType,
  isLoading: PropTypes.bool,
  isLoaded: PropTypes.bool,
  error: PropTypes.object,
}).isRequired;

export const sendContractType = PropTypes.shape({
  receipt: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
}).isRequired;