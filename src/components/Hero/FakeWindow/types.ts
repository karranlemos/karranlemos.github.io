export interface VisibleLine {
	type: "input" | "output",
	text: string;
	isGreen?: boolean;
}