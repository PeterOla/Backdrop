import {COLORS} from '../constants/config';
import {ColorTheme, SpacingTheme, Theme} from './Theme.interface';

const DEFAULT_DARK_COLOR_THEME: ColorTheme = {
  bg: COLORS.dark_bg,
  text: COLORS.dark_text,
};

const DEFAULT_DARK_SPACING_THEME: SpacingTheme = {
  base: 8,
  double: 16,
};

export const DEFAULT_DARK_THEME_ID = 'default-dark';

export const DEFAULT_DARK_THEME: Theme = {
  id: DEFAULT_DARK_THEME_ID,
  color: DEFAULT_DARK_COLOR_THEME,
  spacing: DEFAULT_DARK_SPACING_THEME,
};
