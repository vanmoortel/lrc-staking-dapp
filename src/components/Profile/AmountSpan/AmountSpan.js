import React from 'react';
import extProps from './propTypes';
import lrc from "../../../assets/images/loopring/loopring-small-blue.png";
import numeral from 'numeral';
import Skeleton from "@material-ui/lab/Skeleton";

const AmountSpan = React.memo(({ classes, title, number, format='(0.00a)',
                                 isShowLoopring, isXl, isPercent, isDay, isLoading}) => {

  const toPrint = numeral(number).format(format);

  return (
    <>
      <span className={`opacity-6 pb-2 ${isXl && 'font-size-lg'}`}>{title}</span>
      <div className="d-flex align-items-center justify-content-center">
        {
          isLoading ? (<Skeleton variant="text" width={100} height={35} />)
            : (
              <>
                { isShowLoopring && (
                  <img alt="Loopring logo" className={classes.loopringLogo} src={lrc} height="16px" />
                ) }
                <span className={`font-weight-bold 
              ${isXl ? 'font-size-xl' : 'font-size-lg'} 
              ${(!isPercent && !isDay) && classes.pr16}
              ${classes.amount}`} >
                { (!isPercent && !isDay) ? toPrint.slice(0, -1) : toPrint }
                { (!isPercent && number > 999) && (<small className="opacity-6 pl-1">{toPrint.slice(-1)}</small>)}
                { isPercent && (<small className="opacity-6 pl-1">%</small>)}
                { isDay && (<small className="opacity-6 pl-1">Day</small>)}
              </span>
            </>
            )
        }
      </div>
    </>
  );
});

AmountSpan.propTypes = extProps;

export default AmountSpan;
