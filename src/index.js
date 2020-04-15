import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import log from 'loglevel';
import App from './containers/App';
import configureStore from './redux/config';


// eslint-disable-next-line import/no-unassigned-import
import 'sanitize.css/sanitize.css';
import 'animate.css/animate.min.css';

if (process.env.NODE_ENV === 'develop') log.enableAll();

log.info('Start the webapp...');

log.trace('Configure redux store and sagas...');
const initialState = {};
const { store, persistor } = configureStore(initialState);
log.trace('Configure redux store and sagas done.');

log.trace('Render react app...');
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.querySelector('#root'),
);
log.trace('Render react app done.');


log.info('Start the webapp done.');
