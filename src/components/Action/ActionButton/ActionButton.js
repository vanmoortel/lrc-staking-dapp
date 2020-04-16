import React from 'react';
import { Tooltip, Button } from '@material-ui/core';
import numeral from 'numeral';
import extProps from './propTypes';

/*
 *
 * Display a button to open step of a particular action with smart contract
 * can be isLocked if watch-only and waitingTime should be 0
 *
 */

const ActionButton = React.memo(({
  messages, image, title, description, onClick, isLocked, waitingTime,
}) => {
  const ActionContent = () => (
    <Button
      disabled={isLocked || waitingTime > 0}
      onClick={onClick}
      className="btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100 bg-white"
    >
      { isLocked && (
        <span className="ribbon-angle ribbon-angle--top-left ribbon-danger">
          <small className="font-size-xs">read-only</small>
        </span>
      )}
      {!isLocked && waitingTime > 0 && (
        <span className="ribbon-angle ribbon-angle--top-left ribbon-danger">
          <small className="font-size-xs">locked</small>
        </span>
      )}
      <div className="feature-box text-center">
        <img
          src={image}
          className="mx-auto d-block"
          height="80px"
          alt={title}
        />
        <h3 className="font-size-lg font-weight-bold my-3">{title}</h3>
        <p className="text-black-50 mb-0">
          {description}
        </p>
      </div>
    </Button>

  );
  if (!isLocked && waitingTime > 0) {
    return (
      <Tooltip
        arrow
        title={messages['Please wait $TIME before $TITLE !']
          .replace('$TIME', `${numeral(waitingTime / 60 / 60 / 24).format('(0.00a)')} day`)
          .replace('$TITLE', title)}
      >
        <div>
          <ActionContent />
        </div>
      </Tooltip>
    );
  }
  return (<ActionContent />);
});

ActionButton.propTypes = extProps;

export default ActionButton;
