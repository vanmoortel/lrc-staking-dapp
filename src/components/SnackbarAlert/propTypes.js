import { PropTypes } from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  severity: PropTypes.string.isRequired,
};

export default propTypes;
