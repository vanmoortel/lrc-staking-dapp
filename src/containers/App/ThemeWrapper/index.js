import { withTheme, withStyles } from '@material-ui/core/styles';
import ThemeWrapper from './ThemeWrapper';
import styles from './styles';

export default withTheme(withStyles(styles)(ThemeWrapper));
