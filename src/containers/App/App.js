import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Web3 from 'web3';
import { Web3ReactProvider } from '@web3-react/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fas,
  faBookReader,
  faArrowLeft,
  faArrowRight,
  faCopy,
  faSignOutAlt,
  faEdit,
  faAngleDown,
  faExternalLinkAlt,
  faUnlink,
  faSearch,
  faExchangeAlt,
  faChartPie,
  faGlobe,
  faDonate,
} from '@fortawesome/free-solid-svg-icons';
import { far, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import {
  fab, faEthereum, faTwitter, faDiscord, faFortAwesome,
} from '@fortawesome/free-brands-svg-icons';

import ThemeWrapper from './ThemeWrapper';
import Router from './Router';
import '../../assets/base.scss';

library.add(
  far,
  fas,
  faBookReader,
  faArrowLeft,
  faArrowRight,
  faQuestionCircle,
  faCopy,
  faSignOutAlt,
  faEdit,
  faAngleDown,
  faExternalLinkAlt,
  fab,
  faEthereum,
  faTwitter,
  faDiscord,
  faUnlink,
  faSearch,
  faFortAwesome,
  faExchangeAlt,
  faChartPie,
  faGlobe,
  faDonate,
);

/*
 *
 * Root of the app, initialize theme, reset css(CssBaseline),
 * initialize router for navigation and WEB3 hooks
 *
 */
const App = () => (
  <Web3ReactProvider getLibrary={(provider) => new Web3(provider)}>
    <ThemeWrapper>
      <CssBaseline />
      <Router />
    </ThemeWrapper>
  </Web3ReactProvider>
);

export default App;
