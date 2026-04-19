import { useTranslation, Trans } from 'react-i18next';
import * as S from './styles';

export function Hero() {
  const { t } = useTranslation();

  return (
    <S.Section id="home">
      <S.Content>
        <S.Greeting>{t('hero.greeting')}</S.Greeting>
        <S.Name>Karran Lemos</S.Name>
        <S.Subtitle>
          <Trans i18nKey="hero.subtitle" components={{ strong: <S.Highlight /> }} />
        </S.Subtitle>
        <S.Actions>
          <S.ResumeButton onClick={() => console.log('Resume clicked')}>
            {t('hero.viewResume')}
          </S.ResumeButton>
          <S.SecondaryButton href="#contact">{t('hero.getInTouch')}</S.SecondaryButton>
        </S.Actions>
      </S.Content>

      <S.TerminalBox>
        <S.TerminalBar>
          <S.Dot color="#ff5f57" />
          <S.Dot color="#febc2e" />
          <S.Dot color="#28c840" />
        </S.TerminalBar>
        <S.TerminalBody>
          <S.Line><S.Prompt>~</S.Prompt> <S.Cmd>whoami</S.Cmd></S.Line>
          <S.Line>karran_lemos</S.Line>
          <S.Line><S.Prompt>~</S.Prompt> <S.Cmd>cat skills.txt</S.Cmd></S.Line>
          <S.Line>TypeScript · React · Node.js · Go</S.Line>
          <S.Line>PostgreSQL · Docker · AWS · Linux</S.Line>
          <S.Line><S.Prompt>~</S.Prompt> <S.Cmd>echo $STATUS</S.Cmd></S.Line>
          <S.Line><S.Green>{t('hero.terminal.open')}</S.Green></S.Line>
          <S.Cursor>█</S.Cursor>
        </S.TerminalBody>
      </S.TerminalBox>
    </S.Section>
  );
}
