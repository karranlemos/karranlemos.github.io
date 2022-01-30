import React from 'react';
import { Provider } from 'react-redux'

import store from './store'
import SinglePage from './pages'
import reactStyles from './globalStyles/reactStyles'

function App() {
  return (
    <Provider store={store}>
      <div style={reactStyles}>
        <SinglePage />
      </div>
    </Provider>
  );
}

export default App;
