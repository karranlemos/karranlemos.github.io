import * as S from './styles';

export function Hero() {
  return (
    <S.Section id="home">
      <S.Content>
        <S.Greeting>Hello, world. I'm</S.Greeting>
        <S.Name>Karran Lemos</S.Name>
        <S.Subtitle>
          I turn <S.Highlight>coffee</S.Highlight> into{' '}
          <S.Highlight>code</S.Highlight> — full-stack developer crafting
          fast, scalable, and elegant software.
        </S.Subtitle>
        <S.Actions>
          <S.ResumeButton onClick={() => console.log('Resume clicked')}>
            View Resume
          </S.ResumeButton>
          <S.SecondaryButton href="#contact">Get in touch</S.SecondaryButton>
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
          <S.Line><S.Green>Open to new opportunities ✓</S.Green></S.Line>
          <S.Cursor>█</S.Cursor>
        </S.TerminalBody>
      </S.TerminalBox>
    </S.Section>
  );
}
