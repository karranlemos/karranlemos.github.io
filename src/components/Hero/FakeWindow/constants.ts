import type { VisibleLine } from "./types";

export enum PromptState {
	Start,
	AnalyzeType,
	Input,
	Output,
	End,
}

export const lines: VisibleLine[] = [
	{
		type: "input",
		text: "whoami",
	},
	{
		type: "output",
		text: "karran_lemos",
	},
	{
		type: "input",
		text: "cat role.txt",
	},
	{
		type: "output",
		text: "hero.terminal.role",
	},
	{
		type: "input",
		text: "echo $STATUS",
	},
	{
		type: "output",
		text: "hero.terminal.open",
		isGreen: true,
	},
];