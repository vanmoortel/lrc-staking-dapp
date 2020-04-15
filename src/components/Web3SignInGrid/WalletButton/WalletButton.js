/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {Button} from '@material-ui/core';
import extProps from './propTypes';
import {PulseLoader} from "react-spinners";

const WalletButton = ({ name, img, color, isFake, onClick, isLoading }) => {

  return (
    <Button
      variant="outlined"
      className="p-0 m-2 h-100 w-100"
      style={{ color, borderColor: color, opacity: isFake ? 0 : 1, cursor: isFake ? 'default' : 'pointer' }}
      onClick={onClick}
    >
      <div className="feature-box text-center m-4">
        <img
          src={img}
          className="w-50 mx-auto d-block img-fluid"
          alt={`${name} logo`}
        />
        <h3 className="font-size-lg font-weight-bold my-3">
          {isLoading ? (<PulseLoader size={12} color={color} loading={true} />) : name}
        </h3>
      </div>
    </Button>
  );
};

WalletButton.propTypes = extProps;

export default WalletButton;
