import { useTranslation } from 'react-i18next';
import * as S from './styles';
import { useEffect } from 'react';
import { lines, PromptState } from './constants';
import { useStateRef } from '../../hooks/useStateRef';
import { sleep } from '../../../helpers/sleep';
import { type VisibleLine } from './types';

export function FakeWindow() {
  const { t, i18n } = useTranslation();

  const [data, setData, dataRef] = useStateRef<VisibleLine[]>([]);

  useEffect(() => {
    const START_DELAY = 1000;
    const INPUT_CHAR_DELAY = 100;
    const INPUT_ENTER_DELAY = 700;
    const OUTPUT_ENTER_DELAY = 700;

    let lineIndex = -1;
    let firstLine = true;
    let mounted = true;

    const runLoopState = async (promptState: PromptState) => {
      if (!mounted) return;

      switch (promptState) {
      case PromptState.Start:
        setData([{ text: "", type: "input" }]);
        
        await sleep(START_DELAY);
        if (!mounted) return;

        runLoopState(PromptState.AnalyzeType);
        break;
        
      case PromptState.AnalyzeType:
        lineIndex++;
        
        if (lineIndex >= lines.length)
          runLoopState(PromptState.End);
        else if (lines[lineIndex].type === "input")
          runLoopState(PromptState.Input);
        else
          runLoopState(PromptState.Output);

        break;

      case PromptState.Input: {
        const line = lines[lineIndex];

        const oldData = firstLine ? [] : dataRef.current;
        const newItem: VisibleLine = { ...line, text: "" };
        firstLine = false;
        
        setData([...oldData, newItem]);

        const finalText = t(lines[lineIndex].text);
        for (const char of finalText) {
          await sleep(INPUT_CHAR_DELAY);
          if (!mounted) return;

          newItem.text += char;
          setData([...oldData, newItem]);
        }

        await sleep(INPUT_ENTER_DELAY);
        if (!mounted) return;

        runLoopState(PromptState.AnalyzeType);

        break;
      }
      case PromptState.Output: {
        const line = lines[lineIndex];

        const oldData = firstLine ? [] : dataRef.current;
        const newItem: VisibleLine = { ...line, text: "" };
        firstLine = false;

        setData([...oldData, newItem]);
        
        newItem.text = t(line.text);
        setData([...oldData, newItem]);
        
        await sleep(OUTPUT_ENTER_DELAY);
        if (!mounted) return;

        runLoopState(PromptState.AnalyzeType);

        break;
      }
      case PromptState.End:
        break;
      }
    }

    runLoopState(PromptState.Start);

    return () => {
      mounted = false;
    }
  }, [i18n.language])

  const renderInput = (item: VisibleLine, isLast: boolean) => (
    <S.Line>
      <S.Prompt>&gt; </S.Prompt>
      <S.Cmd>{item.text}</S.Cmd>
      {isLast && <S.Cursor>█</S.Cursor>}
    </S.Line>
  )

  const renderOutput = (item: VisibleLine) => (
    <S.Line>
      <S.Output isGreen={item.isGreen}>
        {item.text}
      </S.Output>
    </S.Line>
  )

  return (
    <S.Box>
      <S.Bar>
        <S.Dot color="#ff5f57" />
        <S.Dot color="#febc2e" />
        <S.Dot color="#28c840" />
      </S.Bar>
      <S.Body>
        {data.map((item, i) => item.type === "input"
          ? renderInput(item, i === data.length - 1)
          : renderOutput(item)
        )}
      </S.Body>
    </S.Box>
  );
}
