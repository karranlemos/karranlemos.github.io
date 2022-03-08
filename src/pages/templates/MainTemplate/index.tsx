import { Header } from './Header'
import { Footer } from './Footer'
import { IButtonData } from './interfaces'
import { FC } from 'react'

interface IOwnProps {
  homeItem: IButtonData
  pagesItems: IButtonData[]
}

export const MainTemplate: FC<IOwnProps> = ({
  homeItem,
  pagesItems,
  children,
}) => {
  return (
    <>
      <Header
        homeItem={homeItem}
        pagesItems={pagesItems}
      />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}