import { styles } from './styles'
import { SectionHeader } from './SectionHeader'
import { CSSProperties, ReactNode } from 'react'

interface IOwnProps {
  children?: ReactNode | null
  style?: CSSProperties
  title?: string | null
  sectionAnchorId?: string | null
  containerStyle?: CSSProperties | null
}

interface ISectionAnchorProps {
  id: string | null
}

export const Section = ({
  children=null,
  style: externalStyle={},
  title=null,
  sectionAnchorId=null,
  containerStyle=null
}: IOwnProps) => {

  const finalStyle = {
    ...styles.section,
    ...externalStyle,
  }

  const finalContainerStyle = {
    ...styles.container,
    ...containerStyle
  }
  
  return (
    <section style={finalStyle}>
      <SectionAnchor id={sectionAnchorId} />
      <div style={finalContainerStyle}>
        <SectionHeader
          title={title ?? ''}
        />
        {children}
      </div>
    </section>
  )
}

function SectionAnchor({
  id
}: ISectionAnchorProps) {
  if (!id)
    return null

  return (
    <div
      id={id}
      style={styles.hashAnchor}
    />
  )
}