import { colors } from "../../../commons/colors"

export const stylesCallbacks = {
  getRelatedIconButton: (privateLink: boolean) => {
    const finalRelatedIconButton = {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
  
      textDecoration: 'none',
      color: privateLink
        ? colors.darkGray
        : colors.white,
  
      padding: '20px 15px',
  
      cursor: privateLink
        ? 'default'
        : 'pointer',
    }

    if (privateLink)
      Object.assign(finalRelatedIconButton, {
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        KhtmlUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
      })

    return finalRelatedIconButton
  },
}