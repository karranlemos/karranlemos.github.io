import { useTranslation } from "react-i18next"
import { ILink } from "../../../commons/interfaces/portfolio"
import { RelatedIconButton } from "./RelatedIconButton"

export const RelatedCodeButton = ({
  codeData = null
}: {
  codeData?: ILink | null
}) => {
  const { t } = useTranslation()
  
  if (!codeData)
    return null

  return (
    <RelatedIconButton
      link={codeData.link}
      text={t('general.sourceCode')}
      privateLink={codeData.privateLink}
    />
  )
}