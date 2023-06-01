import { useState } from 'react'
import { styles } from './styles'

import { MultiplicationSign } from '../../resources/images/icons/MultiplicationSign'

export const CloseButton = ({
  onClick=()=>{}
}) => {
  const [hover, setHover] = useState(false)

  const finalCloseButtonStyle = { ...styles.closeButton }
  if (hover)
    Object.assign(finalCloseButtonStyle, styles.closeButtonHover)

  const onMouseEnterHandler = () => setHover(true)
  const onMouseLeaveHandler = () => setHover(false)

  return (
    <div
      style={finalCloseButtonStyle}
      onClick={onClick}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <MultiplicationSign size={18} />
    </div>
  )
}