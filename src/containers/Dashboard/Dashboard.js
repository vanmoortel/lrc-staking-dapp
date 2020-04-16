import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import { FlagIcon } from 'react-flag-kit';

import { useWeb3React } from '@web3-react/core';
import extProps from './propTypes';
import { TranslationButton } from '../../components';
import LANGUAGES from '../../constants/language';
import { settingsSetLanguage } from '../../redux/features/settings/action';
import { makeAllSmartContract } from './logic';
import { stakingSetContract } from '../../redux/features/staking/action';
import { feeSetContract } from '../../redux/features/fee/action';
import { tokenSetContract } from '../../redux/features/token/action';
import DisplayError from './DisplayError';

const Dashboard = ({ classes, children }) => {
  const { library } = useWeb3React();
  const stakingContract = useSelector((state) => state.staking.contract);
  const feeContract = useSelector((state) => state.fee.contract);
  const tokenContract = useSelector((state) => state.token.contract);
  const dispatch = useDispatch();
  const setLanguage = (_language) => dispatch(settingsSetLanguage(_language));
  const setContractStaking = (_contract) => dispatch(stakingSetContract(_contract));
  const setContractFee = (_contract) => dispatch(feeSetContract(_contract));
  const setContractToken = (_contract) => dispatch(tokenSetContract(_contract));


  useEffect(() => {
    makeAllSmartContract(library, stakingContract, feeContract, tokenContract,
      setContractStaking, setContractFee, setContractToken);
  }, [library, stakingContract, feeContract, tokenContract,
    setContractStaking, setContractFee, setContractToken]);

  return (
    <div className="app-wrapper min-vh-100 bg-neutral-primary">
      <div className="app-main flex-column">
        <div className={classes.btnTranslate}>
          <TranslationButton
            languageList={[{ flag: (<FlagIcon code="US" size={45} />), name: LANGUAGES.english },
              { flag: (<FlagIcon code="FR" size={45} />), name: LANGUAGES.french }]}
            onSetLanguage={setLanguage}
          />
        </div>
        <div className="app-content p-0">
          <div className="app-content--inner d-flex align-items-center">
            <div className="flex-grow-1 w-100 d-flex align-items-center">
              <div className="bg-composed-wrapper--content py-5">
                <Container maxWidth="lg">
                  { children }
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DisplayError />
    </div>
  );
};

Dashboard.propTypes = extProps;

export default Dashboard;
