import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import config from './config'
import App from './App';
import './globalStyles/';

config()

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);