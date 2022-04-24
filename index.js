import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import AddressForm from './AddressForm';
import Checkout from './Checkout';
import PaymentForm from './PaymentForm';
import reportWebVitals from './reportWebVitals';
import Review from './Review';

ReactDOM.render(
  <React.Fragment>
    <Checkout />
  </React.Fragment>,
  document.getElementById('root'),
);

reportWebVitals();
