import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux'

import store from './store'
import SinglePage from './pages'
import reactStyles from './globalStyles/reactStyles'
import { useTranslation } from 'react-i18next';
import { Fallback } from './components/Fallback';

function App() {
  const { i18n } = useTranslation()
  const [isFallbackDelayOn, setIsFallbackDelayOn] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsFallbackDelayOn(false), 500)
  }, [])

  if (!i18n.resolvedLanguage || isFallbackDelayOn)
    return (
      <Fallback />
    )

  return (
    <Provider store={store}>
      <div style={reactStyles}>
        <SinglePage />
      </div>
    </Provider>
  );
}

export default App;
