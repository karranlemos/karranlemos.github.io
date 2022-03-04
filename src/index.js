import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import config from './config'
import App from './App';
import { Fallback } from './components/Fallback';
import './globalStyles/';

config()

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Fallback />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);