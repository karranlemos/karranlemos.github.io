import { useTranslation } from "react-i18next"
import { ILink } from "../../../commons/interfaces/portfolio"
import { RelatedIconButton } from "./RelatedIconButton"

export const RelatedSiteButton = ({
  siteData
}: {
  siteData?: ILink | null
}) => {
  const { t } = useTranslation()

  if (!siteData)
    return null

  return (
    <RelatedIconButton
      link={siteData.link}
      text={t('general.site')}
      privateLink={siteData.privateLink}
    />
  )
}