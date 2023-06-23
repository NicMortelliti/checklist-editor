import { extendTheme } from '@chakra-ui/react';
import { Button } from './Button';
import { IconButton } from './IconButton';
import { Heading } from './Text';

export const theme = extendTheme({
  components: {
    Button,
    IconButton,
    Heading,
  },
  colors: {
    brand: {
      100: '#f7fafc',
    },
  },
  fonts: {
    heading: `'Space Grotesk Variable', sans-serif`,
    body: `'JetBrains Mono Variable', mono`,
  },
  styles: {
    global: {
      'html, body': {
        color: 'white',
        bg: '#111217',
      },
    },
  },
});
