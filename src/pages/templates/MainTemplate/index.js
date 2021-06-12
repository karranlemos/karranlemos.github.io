import React from 'react'

import Header from './Header'

export default function MainTemplate({
  homeItem,
  pagesItems,
  children,
}) {
  return (
    <>
      <Header
        homeItem={homeItem}
        pagesItems={pagesItems}
      />
      <main>
        {children}
      </main>
    </>
  )
}