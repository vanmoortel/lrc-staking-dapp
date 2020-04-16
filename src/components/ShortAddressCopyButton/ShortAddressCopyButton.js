import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ClickAwayListener, Tooltip } from '@material-ui/core';
import copy from 'clipboard-copy';
import extProps from './propTypes';

const ShortAddressCopyButton = React.memo(({
  classes, messages, walletAddress,
}) => {
  const [isShowCopy, setIsShowCopy] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setIsShowCopy(false)}>
      <Tooltip
        PopperProps={{ disablePortal: true }}
        onClose={() => setIsShowCopy(false)}
        open={isShowCopy}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        arrow
        title={messages['Address copied !']}
      >
        <Button
          variant="text"
          className={`font-size-sm font-weight-bold my-2 ${classes.btnWalletAddress}`}
          onClick={() => { copy(walletAddress); setIsShowCopy(true); }}
        >
          <span className="btn-wrapper--label">
            {`${walletAddress.slice(0, 8).toLowerCase()}...${walletAddress.slice(walletAddress.length - 6).toLowerCase()}`}
          </span>
          <span className={`btn-wrapper--icon ${classes.iconCopy}`}>
            <FontAwesomeIcon
              icon={['fas', 'copy']}
              className="font-size-xs small"
            />
          </span>
        </Button>
      </Tooltip>
    </ClickAwayListener>
  );
});

ShortAddressCopyButton.propTypes = extProps;

export default ShortAddressCopyButton;
