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
		text: "devfetch --all",
	},
	{
		type: "output",
		text: "hero.terminal.line1",
		isGreen: true,
	},
	{
		type: "output",
		text: "hero.terminal.line2",
		isGreen: true,
	},
	{
		type: "output",
		text: "hero.terminal.line3",
		isGreen: true,
	},
	{
		type: "output",
		text: "hero.terminal.line4",
		isGreen: true,
	},
];