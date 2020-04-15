import { PropTypes } from 'prop-types';

const propTypes = {
  classes: PropTypes.object.isRequired,
  languageList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    flag: PropTypes.node
  })).isRequired,
  onSetLanguage: PropTypes.func.isRequired,
};

export default propTypes;
