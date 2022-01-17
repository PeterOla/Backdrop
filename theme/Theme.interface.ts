export interface ColorTheme {
  bg: string;
  text: string;
}

export interface SpacingTheme {
  base: number;
  double: number;
}

export interface Theme {
  id: string;
  color: ColorTheme;
  spacing: SpacingTheme;
}
