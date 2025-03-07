import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Provider } from 'react-redux';
import { Auth0Provider } from "@auth0/auth0-react";
import { store } from './store/Mystore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-5vjgbn47jw4shym7.us.auth0.com"
  clientId="DTowuiA5hApJvDPD95gIn4mJlW5Ws1IL"
  authorizationParams={{
    redirect_uri: `${window.location.origin}/#/callback`,
  }}
>
  <Provider store={store}>
    <App />
  </Provider>
</Auth0Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
