import { InjectedConnector } from '@web3-react/injected-connector';
import { LedgerConnector } from '@web3-react/ledger-connector';
import { TrezorConnector } from '@web3-react/trezor-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { AuthereumConnector } from '@web3-react/authereum-connector';
import { FortmaticConnector } from '@web3-react/fortmatic-connector';
import { PortisConnector } from '@web3-react/portis-connector';
import { SquarelinkConnector } from '@web3-react/squarelink-connector';
import { TorusConnector } from '@web3-react/torus-connector';
import { NetworkConnector } from '@web3-react/network-connector';

// Activate wallet if not web3 hook not already active
export const tryToOpenWalletIfNotActive = (active, walletID, onActivate, onSetWalletID) => {
  if (!active) {
    switch (walletID) {
      case 1: // Read-only
        onActivate(new NetworkConnector({ urls: { 1: 'https://mainnet.infura.io/v3/740f8a307aa34141a298506577f063bc' } }))
          .catch(() => onSetWalletID(0));
        break;
      case 2: // Metamask
        onActivate(new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] }))
          .catch(() => onSetWalletID(0));
        break;
      case 3:
        onActivate(new LedgerConnector({ chainId: 1, url: 'https://mainnet.infura.io/v3/740f8a307aa34141a298506577f063bc' }))
          .catch(() => onSetWalletID(0));
        break;
      case 4:
        onActivate(new TrezorConnector({
          chainId: 1,
          manifestAppUrl: 'https://stake.o2b.dev',
          manifestEmail: 'nolan@o2b.dev',
          url: 'https://mainnet.infura.io/v3/740f8a307aa34141a298506577f063bc',
        }))
          .catch(() => onSetWalletID(0));
        break;
      case 5:
        onActivate(new WalletConnectConnector({ rpc: { 1: 'https://mainnet.infura.io/v3/740f8a307aa34141a298506577f063bc' } }))
          .catch(() => onSetWalletID(0));
        break;
      case 6:
        onActivate(new AuthereumConnector({ chainId: 1 }))
          .catch(() => onSetWalletID(0));
        break;
      case 7:
        onActivate(new FortmaticConnector({ apiKey: 'pk_live_01129497FC783931', chainId: 1 }))
          .catch(() => onSetWalletID(0));
        break;
      case 8:
        onActivate(new PortisConnector({ dAppId: '0e834d4c-cea9-4770-9c52-679fe5580bad', networks: [1] }))
          .catch(() => onSetWalletID(0));
        break;
      case 9:
        onActivate(new SquarelinkConnector({ clientId: '', networks: [1] }))
          .catch(() => onSetWalletID(0));
        break;
      case 10:
        onActivate(new TorusConnector({ chainId: 1 }))
          .catch(() => onSetWalletID(0));
        break;
      default: // No wallet
        onSetWalletID(0);
        break;
    }
  }
};

// Set and save wallet address, if read-only resolve ENS
export const saveAddressWalletOrENS = (library, walletAddress,
  account, onSetWalletAddress) => {
  if (!!library && !walletAddress.isLoading
    && !!account && walletAddress.value !== account) onSetWalletAddress(account);
};
