import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import themeLRC from '../../../theme/';
import extProps from './propTypes';

/*
 *
 * Material-Design theme wrapper loaded with LRC theme
 *
 */
const ThemeWrapper = ({ children }) => {
  const [theme] = useState(themeLRC);

  return (
    <ThemeProvider theme={theme}>
        { children }
    </ThemeProvider>
  );
};

ThemeWrapper.propTypes = extProps;

export default ThemeWrapper;
