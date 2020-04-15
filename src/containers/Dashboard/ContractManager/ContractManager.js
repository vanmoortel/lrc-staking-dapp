import React from 'react';
import {useSelector} from "react-redux";

import extProps from './propTypes';
import languageProvider from '../../../translations';
import {useWeb3React} from "@web3-react/core";
import { Card, Grid } from "@material-ui/core";
import {Redirect} from "react-router-dom";
import {SuspenseLoading} from "../../../components";
import ProfileContainer from "./ProfileContainer";
import Action from "./ActionContainer";


const ContractManager = () => {
  const language = useSelector(state => state.settings.language);
  const stakingContract = useSelector(state => state.staking.contract);
  const feeContract = useSelector(state => state.fee.contract);
  const tokenContract = useSelector(state => state.token.contract);
  const walletAddress = useSelector(state => state.settings.walletAddress);
  const { library } = useWeb3React();

  const messages = languageProvider[language];

  if (!walletAddress.value || !library)
    return (<Redirect exact from="/" to="/login" />);

  if (!stakingContract || !feeContract || !tokenContract) return (<SuspenseLoading messages={messages} />);

  return (
    <Card className="card-box mb-4">
      <span className="ribbon-angle ribbon-angle--top-left ribbon-primary">
        <small><a href="https://twitter.com/NolanVanmoortel" target="_blank" rel="noopener noreferrer" style={{ color: 'white'}}>twitter</a></small>
      </span>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={5}>
          <div className="p-4 text-center">
            <ProfileContainer />
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <div className="hero-wrapper bg-composed-wrapper h-100 rounded-right bg-secondary">
            <div className="flex-grow-1 w-100 d-flex align-items-center justify-content-center px-4">
              <Action />
            </div>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

ContractManager.propTypes = extProps;

export default ContractManager;