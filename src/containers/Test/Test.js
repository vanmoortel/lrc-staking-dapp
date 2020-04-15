import React, {useEffect, useState} from 'react';
import {useWeb3React} from "@web3-react/core";
import { InjectedConnector } from '@web3-react/injected-connector'

/*
 *
 * Root of the app, initialize theme, reset css(CssBaseline) and initialize router for navigation
 *
 */
const Test = () => {
  const { connector, library, chainId, account, activate, deactivate, active, error } = useWeb3React();
  const [balance, setBalance] = useState(-1);
  const [contract, setContract] = useState(null);
  // const [total, setTotal] = useState(null);
  const [approve, setApprove] = useState(null);
  const [isApproving, setIsApproving] = useState(false);
  const [transactionState, setTransactionState] = useState('');

  useEffect(() => {
    if(!active && !error) activate(new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] }));
  }, [active, error, activate]);

  useEffect(() => {
    if (!!active && balance === -1) library.eth.getBalance('0xce3696f3B57Db19e5EbE014aA2d5636E87f9f22D').then((_balance) => setBalance(_balance));
  }, [active, balance, library]);
  /*
  useEffect(() => {
    if (active && !contract) setContract(new library.eth.Contract([{"constant":true,"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserStaking","outputs":[{"internalType":"uint256","name":"withdrawalWaitTime","type":"uint256"},{"internalType":"uint256","name":"rewardWaitTime","type":"uint256"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"pendingReward","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"total","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint64","name":"depositedAt","type":"uint64"},{"internalType":"uint64","name":"claimedAt","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numAddresses","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lrcAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"claim","outputs":[{"internalType":"uint256","name":"claimedAmount","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getTotalStaking","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_CLAIM_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_protocolFeeVaultAddress","type":"address"}],"name":"setProtocolFeeVault","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MIN_WITHDRAW_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"protocolFeeVaultAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakings","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint64","name":"depositedAt","type":"uint64"},{"internalType":"uint64","name":"claimedAt","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_lrcAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"feeVaultAddress","type":"address"}],"name":"ProtocolFeeVaultChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LRCStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LRCWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LRCRewarded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}], '0xF4662bB1C4831fD411a95b8050B3A5998d8A4A5b'));
  }, [active, contract, library]);
  useEffect(() => {
    if (!!active && !!contract && !total) contract.methods.total().call({from: 0x0}).then((_total) => setTotal(_total));
  }, [active, contract, total]);
  */

  useEffect(() => {
    if (active && !contract) setContract(new library.eth.Contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"accounts","type":"address[]"},{"name":"amounts","type":"uint256[]"}],"name":"batchTransfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalBurned","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"burner","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"}], '0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD'));
  }, [active, contract, library]);

  useEffect(() => {
    if (!!active && !!account && !!contract && !approve && !isApproving) {
      setIsApproving(true);
      contract.methods.approve('0xF4662bB1C4831fD411a95b8050B3A5998d8A4A5b', 1).send({from: account})
        .on('transactionHash', () => setTransactionState('Hashed.'))
        .on('confirmation', (confirmationNumber, receipt) => setTransactionState(confirmationNumber + ' confirmations.'))
        .on('receipt', () => {
          setTransactionState('Done !');
          setApprove(true);
        })
        .on('error', (error) => {
          setTransactionState(`Error (${error.message}) !`);
        });
    }

  }, [active, account, contract, approve, isApproving]);

  return (
    <div className="app-wrapper min-vh-100 bg-white">
      <div className="app-main min-vh-100">
        <div className="app-content p-0">
          <h1>{active ? 'Ok' : 'Ko'}</h1>
          {balance > -1 && (
            <h1>{ balance }</h1>
          )}
          { !!isApproving && (<h1>Approving...</h1>)}
          {!!transactionState && (<h1>{transactionState}</h1>)}
        </div>
      </div>
    </div>
  );
};

export default Test;
