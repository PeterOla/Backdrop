import {COLORS} from '../constants/config';
import {ColorTheme, SpacingTheme, Theme} from './Theme.interface';

const DEFAULT_LIGHT_COLOR_THEME: ColorTheme = {
  bg: COLORS.light_bg,
  text: COLORS.light_text,
};

const DEFAULT_LIGHT_SPACING_THEME: SpacingTheme = {
  base: 8,
  double: 16,
};

export const DEFAULT_LIGHT_THEME_ID = 'default-light';

export const DEFAULT_LIGHT_THEME: Theme = {
  id: DEFAULT_LIGHT_THEME_ID,
  color: DEFAULT_LIGHT_COLOR_THEME,
  spacing: DEFAULT_LIGHT_SPACING_THEME,
};
