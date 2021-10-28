import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
// @ts-ignore
import { UALProvider } from 'ual-reactjs-renderer'
import { Wax } from "@eosdacio/ual-wax";
import { Anchor } from './utils/modifiedAnchor/Anchor';
import { loadParticipants } from './store/participants/participantsApi';
import './assets/fonts/fa5_pro/css/all.min.css';

const chain = {
  chainId: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",
  rpcEndpoints: [
    {
      protocol: "https",
      host: "wax.greymass.com",
      port: 443,
    },
  ],
};
const myAppName = "WaxArena.io";

// @ts-ignore
const wax = new Wax([chain], { appName: myAppName });
const anchor = new Anchor([chain], { appName: myAppName });

store.dispatch(loadParticipants());

ReactDOM.render(
  <React.StrictMode>
    <UALProvider chains={[chain]} authenticators={[wax, anchor]} appName={myAppName} >
      <Provider store={store}>
        <App />
      </Provider>
    </UALProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
