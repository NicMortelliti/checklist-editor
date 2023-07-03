import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { buttonStyle, iconButtonStyle, textStyle } from '.';
import { global } from './global';
import { fonts } from './fonts';

export const theme = extendTheme({
  colors: colors,
  styles: { global: global },
  fonts: fonts,
  components: {
    Button: buttonStyle,
    IconButton: iconButtonStyle,
    Text: textStyle,
  },
});
