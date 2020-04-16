import { createMuiTheme } from '@material-ui/core';
import typography from './typography';

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import vars from '!!sass-vars-to-js-loader!../assets/core/_variables-mui.scss';

const MuiTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      containedSizeSmall: {
        paddingLeft: '14px',
        paddingRight: '14px',
      },
      root: {
        fontWeight: 'normal',
        textTransform: 'none',
      },
      text: {
        paddingLeft: '14px',
        paddingRight: '14px',
      },
    },
    MuiTooltip: {
      arrow: {
        color: vars.second,
      },
      tooltip: {
        backgroundColor: vars.second,
        fontSize: '13px',
        padding: '8px 16px',
      },
    },
  },
  palette: {
    contrastThreshold: 3,
    error: {
      main: vars.red,
    },
    grey: {
      300: vars.inheritDefault1,
      A100: vars.inheritDefault2,
    },
    helpers: {
      main: 'rgba(25, 46, 91, .035)',
      primary: vars.blue,
    },
    primary: {
      main: vars.primary,
    },
    secondary: {
      main: vars.secondary,
    },
    success: {
      main: vars.green,
    },
    tonalOffset: 0.1,
    warning: {
      main: vars.orange,
    },
  },
  shape: {
    borderRadius: '0.5rem',
  },
  typography,
});

export default MuiTheme;
