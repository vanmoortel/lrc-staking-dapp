import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import extProps from './propTypes';

/*
 *
 * Snackbar to display title with message(eg: to display error)
 *
 */

const SnackbarAlert = React.memo(({
  isOpen, children, severity, onClose,
}) => (
  <Snackbar
    open={!!isOpen}
    ClickAwayListenerProps={{ onClickAway: onClose }}
    onClose={onClose}
    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
  >
    <MuiAlert className="mb-4" severity={severity}>
      <div className="d-flex align-items-center align-content-center">
        <span>
          {children}
        </span>
      </div>
    </MuiAlert>
  </Snackbar>
));

SnackbarAlert.propTypes = extProps;

export default SnackbarAlert;
