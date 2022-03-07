import React from 'react';
import ReactDOM from 'react-dom';

import config from './config'
import App from './App';
import './globalStyles';

config()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);