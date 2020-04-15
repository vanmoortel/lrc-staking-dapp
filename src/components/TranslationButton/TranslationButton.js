/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import { Translate } from '@material-ui/icons';
import extProps from './propTypes';

const TranslationButton = React.memo(({
  classes, languageList, onSetLanguage,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SpeedDial
        ariaLabel="Translation"
        icon={<SpeedDialIcon icon={<Translate />} openIcon={<Translate />} />}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        className={classes.buttonTranslate}
        direction="left"
        open={isOpen}>
        {languageList.map(language => (
          <SpeedDialAction
            className={classes.flagAction}
            disableHoverListener
            title=""
            key={language.name}
            icon={language.flag}
            onClick={() => onSetLanguage(language.name)}
          />
        ))}
      </SpeedDial>
    </>
  );
});

TranslationButton.propTypes = extProps;

export default TranslationButton;
