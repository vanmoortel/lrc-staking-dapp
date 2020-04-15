import React, {useState} from 'react';
import {Button, IconButton, Grid} from '@material-ui/core';
import extProps from './propTypes';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import loopringLogo from "../../assets/images/loopring/loopring-small-white.png";
import metmaskLogo from "../../assets/images/wallet/metmask.svg";
import ledgerLogo from "../../assets/images/wallet/ledger.png";
import trezorLogo from "../../assets/images/wallet/trezor.png";
import walletconnectLogo from "../../assets/images/wallet/walletconnect.png";
import authereumLogo from "../../assets/images/wallet/authereum.png";
import fortmaticLogo from "../../assets/images/wallet/fortmatic.png";
import portisLogo from "../../assets/images/wallet/portis.png";
import squarelinkLogo from "../../assets/images/wallet/squarelink.png";
import torusLogo from "../../assets/images/wallet/torus.png";
import WalletButton from "./WalletButton";
import WatchAddressForm from "./WatchAddressForm";

const Web3SignInGrid = React.memo(({ classes, messages, onSelectWallet, walletLoading, onUpdateWalletAddress, isLoading }) => {
  const [page, setPage] = useState(0);

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={5}>
        <div className="hero-wrapper bg-composed-wrapper bg-plum-plate h-100 rounded-left" style={{ minHeight: 504}}>
          <div className="flex-grow-1 w-100 h-100 d-flex align-items-center">
            <div
              className={"bg-composed-wrapper--image rounded-left " + classes.backgroundHero}
            />
            <div className="bg-composed-wrapper--bg bg-second opacity-5 rounded-left" />
            <div className="bg-composed-wrapper--content p-5">
              <div className="d-flex align-items-center">
                  <span className="px-4 h-auto py-1 badge badge-second badge-pill">
                    FAN-MADE
                  </span>
              </div>
              <div className="text-white mt-3">
                <h1 className="display-4 my-3 font-weight-bold">
                  <img
                    src={loopringLogo}
                    className={classes.loopringImg}
                    alt="Loopring logo"
                  /> {messages['Loopring Staking & Claiming manager']}
                </h1>
                <p className="font-size-md mb-0 text-white-50">
                  {messages['Please connect a wallet with your LRC holdings to start or use the Read only button to check the state of your stake.']}
                </p>
                <div className="divider border-2 my-5 border-light opacity-2 rounded w-25" />
                <div>
                  <Button color="secondary" variant="contained" onClick={() => onSelectWallet(1)}>
                        <span className="btn-wrapper--label">
                          {messages['Watch address']}
                        </span>
                    <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'book-reader']} />
                        </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} lg={7}>
        <div className="hero-wrapper bg-white h-100 rounded-right">
          <div className="flex-grow-1 w-100 h-100 d-flex align-items-center">
            {
              walletLoading === 1 && (
                <IconButton
                  variant="outlined"
                  color="primary"
                  className={classes.btnBack}
                  onClick={() => onSelectWallet(0)}
                >
                  <FontAwesomeIcon icon={['fas', 'arrow-left']} />
                </IconButton>
              )
            }
            <div className="bg-composed-wrapper--content p-5">
              <div className="d-flex align-items-center">
                {
                  walletLoading === 1 && (
                    <Grid container spacing={4} className={classes.pb40}>
                      <Grid item xs={12}>
                        <h1 className={`display-4 my-3 font-weight-bold ${classes.colorTitleWatch}`}>{messages['Watch-only wallet']}</h1>
                      </Grid>
                      <Grid item xs={12}>
                        <WatchAddressForm messages={messages} onConfirm={onUpdateWalletAddress} isLoading={isLoading}/>
                      </Grid>
                    </Grid>
                  )
                }
                {
                  walletLoading !== 1 && page === 0 && (
                    <Grid container spacing={4}>
                      <Grid item xs={12} sm={6} md={4}>
                        <WalletButton img={metmaskLogo} color="#E27625" name="Metamask" isLoading={walletLoading === 2} onClick={() => onSelectWallet(walletLoading === 2 ? 0 : 2)}/>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <WalletButton img={ledgerLogo} color="#1d2028" name="Ledger" isLoading={walletLoading === 3} onClick={() => onSelectWallet(walletLoading === 3 ? 0 : 3)}/>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <WalletButton img={trezorLogo} color="#000" name="Trezor" isLoading={walletLoading === 4} onClick={() => onSelectWallet(walletLoading === 4 ? 0 : 4)}/>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <WalletButton img={walletconnectLogo} color="#3B99FC" name="WalletConnect" isLoading={walletLoading === 5} onClick={() => onSelectWallet(walletLoading === 5 ? 0 : 5)}/>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <WalletButton img={authereumLogo} color="#FF4C2F" name="Authereum" isLoading={walletLoading === 6} onClick={() => onSelectWallet(walletLoading === 6 ? 0 : 6)}/>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <WalletButton img={fortmaticLogo} color="#617BFF" name="Fortmatic" isLoading={walletLoading === 7} onClick={() => onSelectWallet(walletLoading === 7 ? 0 : 7)}/>
                      </Grid>
                    </Grid>
                  )
                }
                {
                  walletLoading !== 1 && page === 1 && (
                    <Grid container spacing={4}>
                      <Grid item xs={12} sm={6} md={4}>
                        <WalletButton img={portisLogo} color="#6CB3DB" name="Portis" isLoading={walletLoading === 8} onClick={() => onSelectWallet(walletLoading === 8 ? 0 : 8)}/>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <WalletButton img={squarelinkLogo} color="#3964DF" name="Squarelink" isLoading={walletLoading === 9} onClick={() => onSelectWallet(walletLoading === 9 ? 0 : 9)}/>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <WalletButton img={torusLogo} color="#5396F7" name="Torus" isLoading={walletLoading === 10} onClick={() => onSelectWallet(walletLoading === 10 ? 0 : 10)}/>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <WalletButton img={torusLogo} color="#5396F7" name="Torus" isFake isLoading={false} onClick={() => {}} />
                      </Grid>
                    </Grid>
                  )
                }
                {
                  walletLoading !== 1 && page > 0 && (
                    <IconButton
                      variant="outlined"
                      color="primary"
                      className={classes.btnSwitchPrev}
                      onClick={() => setPage(page - 1)}
                    >
                      <FontAwesomeIcon icon={['fas', 'arrow-left']} />
                    </IconButton>
                  )
                }
                {
                  walletLoading !== 1 && page < 1 && (
                    <IconButton
                      variant="outlined"
                      color="primary"
                      className={classes.btnSwitchNext}
                      onClick={() => setPage(page + 1)}
                    >
                      <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </IconButton>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
});

Web3SignInGrid.propTypes = extProps;

export default Web3SignInGrid;
