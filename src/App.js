import React from 'react';
import { Provider } from 'react-redux'

import store from './store'
import SinglePage from './pages'
import reactStyles from './globalStyles/reactStyles'

import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation()

  return (
    <Provider store={store}>
      <div style={reactStyles}>
        <SinglePage />
      </div>
    </Provider>
  );
}

export default App;
