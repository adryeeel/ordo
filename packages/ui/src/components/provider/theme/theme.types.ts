import { THEMES } from './theme.const';

export type Theme = (typeof THEMES)[number];
export type SetTheme = (theme: Theme) => void;
