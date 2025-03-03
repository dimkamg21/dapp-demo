import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MoralisProvider } from 'react-moralis';
import './index.css';
import { MoralisDappProvider } from './providers/MoralisDappProvider/MoralisDappProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';
import CustomThemeProvider from './config/CustomThemeProvider.jsx';

const POLLING_INTERVAL = 12000;

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};

// const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
// const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const APP_ID = 'DYFU90AwvC6Ktjxrr31VdJNhAV5UadWBr97duwex';

const SERVER_URL = 'https://gq7x7ofh7pyg.usemoralis.com:2053/server';

const Application = () => {
  return (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <MoralisDappProvider>
          <CustomThemeProvider>
            <CssBaseline />
            <App />
          </CustomThemeProvider>
        </MoralisDappProvider>
      </Web3ReactProvider>
    </MoralisProvider>
  );
};

ReactDOM.render(
  // <React.StrictMode>
  <Application />,
  // </React.StrictMode>,
  document.getElementById('root')
);
