import React from 'react';
import { Button } from '@material-ui/core';
import { PulseLoader } from 'react-spinners';

import extProps from './propTypes';

/*
 *
 * Button to try to sign in with web3 wallet
 *
 */

const WalletButton = React.memo(({
  name, img, color, isFake, onClick, isLoading,
}) => (
  <Button
    variant="outlined"
    className="p-0 m-2 h-100 w-100"
    style={{
      borderColor: color, color, cursor: isFake ? 'default' : 'pointer', opacity: isFake ? 0 : 1,
    }}
    onClick={onClick}
  >
    <div className="feature-box text-center m-4">
      <img
        src={img}
        className="w-50 mx-auto d-block img-fluid"
        alt={`${name} logo`}
      />
      <h3 className="font-size-lg font-weight-bold my-3">
        {isLoading ? (<PulseLoader size={12} color={color} loading />) : name}
      </h3>
    </div>
  </Button>
));

WalletButton.propTypes = extProps;

export default WalletButton;
