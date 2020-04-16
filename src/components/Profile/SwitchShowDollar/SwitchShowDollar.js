import React from 'react';
import { Switch } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import extProps from './propTypes';
import lrc from '../../../assets/images/loopring/loopring-small-blue.png';

/*
 *
 * Display switch to dollar value or loopring value
 *
 */

const SwitchShowDollar = React.memo(({ classes, isShowDollar, onSwitch }) => (
  <div className={classes.divTopRight}>
    { isShowDollar
      ? (<FontAwesomeIcon className={classes.iconDollar} size={16} icon={['fas', 'dollar-sign']} />)
      : (<img alt="Loopring logo" className={classes.loopringLogo} src={lrc} height="16px" />)}
    <Switch
      checked={isShowDollar}
      onChange={() => onSwitch(!isShowDollar)}
      value="checkedA"
      color="primary"
    />
  </div>
));

SwitchShowDollar.propTypes = extProps;

export default SwitchShowDollar;
