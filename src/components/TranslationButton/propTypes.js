import { PropTypes } from 'prop-types';

const propTypes = {
  classes: PropTypes.object.isRequired,
  languageList: PropTypes.arrayOf(PropTypes.shape({
    flag: PropTypes.node,
    name: PropTypes.string,
  })).isRequired,
  onSetLanguage: PropTypes.func.isRequired,
};

export default propTypes;
