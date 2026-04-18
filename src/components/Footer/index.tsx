import { useTranslation } from 'react-i18next';
import * as S from './styles';

export function Footer() {
  const { t } = useTranslation();
  return <S.FooterEl>Karran Lemos {t('footer.copy')}</S.FooterEl>;
}
