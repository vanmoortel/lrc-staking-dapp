import { PropTypes } from 'prop-types';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  severity: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default propTypes;
