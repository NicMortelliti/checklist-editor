import { defineStyleConfig } from '@chakra-ui/react';

export const textStyle = defineStyleConfig({
  baseStyle: {
    color: 'white',
  },
  sizes: {},
  variants: {
    accent: {
      color: 'brand.accent',
      fontWeight: 'bold',
    },
  },
  defaultProps: {},
});
