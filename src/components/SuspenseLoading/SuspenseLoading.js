import React from 'react';
import { Typography } from '@material-ui/core';
import { PulseLoader } from 'react-spinners';

import extProps from './propTypes';
import theme from '../../theme';

const SuspenseLoading = ({ messages }) => (
  <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
    <div className="d-flex align-items-center flex-column px-4">
      <PulseLoader color={theme.palette.primary.main} loading />
      <Typography className="text-muted font-size-xl text-center pt-3">
        {messages['Please wait while the application is loading']}
        <Typography component="span" className="font-size-lg d-block text-dark">
          {messages['If you have any issues please contact']}
          {' '}
          <a href="https://twitter.com/NolanVanmoortel" target="_blank" rel="noopener noreferrer">@NolanVanmoortel</a>
        </Typography>
      </Typography>
    </div>
  </div>
);

SuspenseLoading.propTypes = extProps;

export default SuspenseLoading;
