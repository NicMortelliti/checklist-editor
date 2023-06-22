import { extendTheme } from '@chakra-ui/react';
import { Button } from './Button';

export const theme = extendTheme({
  components: {
    Button,
  },
  fonts: {
    heading: `'Space Grotesk Variable', sans-serif`,
    body: `'JetBrains Mono Variable', sans-serif`,
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
