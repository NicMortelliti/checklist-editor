import { defineStyleConfig } from '@chakra-ui/react';

export const buttonStyle = defineStyleConfig({
  baseStyle: {
    _hover: {
      bg: 'reset',
    },
  },
  variants: {
    solid: {
      backgroundColor: '#202028',
      color: 'gray.300',
      border: 'none',
      filter:
        'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))',
      transitionProperty: 'transform',
      _hover: {
        bg: 'reset',
        transform: 'translateY(-0.25rem)',
        transitionDuration: '0.2s',
      },
    },
    blue: { bg: 'blue.400', color: 'blue.900', _hover: { bg: 'blue.200' } },
    gray: { bg: 'gray.700', color: 'gray.900', _hover: { bg: 'gray.500' } },
    green: { bg: 'green.400', color: 'green.900', _hover: { bg: 'green.200' } },
    red: { bg: 'red.400', color: 'red.800', _hover: { bg: 'red.200' } },
  },
  defaultProps: {
    variant: 'solid',
  },
});
