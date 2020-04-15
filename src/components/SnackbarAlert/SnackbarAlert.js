/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {Snackbar} from '@material-ui/core';
import extProps from './propTypes';
import MuiAlert from "@material-ui/lab/Alert";

const SnackbarAlert = ({ isOpen, children, severity, onClose }) => {

  return (
    <Snackbar open={!!isOpen}
              ClickAwayListenerProps={{onClickAway : onClose }}
              onClose={onClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
      <MuiAlert className="mb-4" severity={severity}>
        <div className="d-flex align-items-center align-content-center">
          <span>
            {children}
          </span>
        </div>
      </MuiAlert>
    </Snackbar>
  );
};

SnackbarAlert.propTypes = extProps;

export default SnackbarAlert;
