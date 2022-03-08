import { useEffect, useState } from 'react';

import { Sections } from './pages'
import reactStyles from './globalStyles/reactStyles'
import { useTranslation } from 'react-i18next';
import { Fallback } from './components/Fallback';

function App() {
  const { i18n } = useTranslation()
  const [shouldShowLoading, setShouldShowLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => setShouldShowLoading(true), 600)
  }, [])

  if (!i18n.resolvedLanguage)
    return (
      <Fallback showLoading={shouldShowLoading} />
    )

  return (
    <div style={reactStyles}>
      <Sections />
    </div>
  )
}

export default App
