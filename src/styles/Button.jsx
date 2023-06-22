import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    borderRadius: '0.75rem', // <-- border radius is same for all variants and sizes
    fontWeight: 'normal',
    filter:
      'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))',
    transitionProperty: 'transform',
    _hover: {
      transform: 'translateY(-0.25rem)',
      transitionDuration: '0.2s',
    },
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: 'sm',
      px: 5, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    solid: {
      backgroundColor: '#202028',
      color: '#C3C3D1',
      border: 'none',
    },
    outline: {
      border: '2px solid',
      backgroundColor: 'gray.600',
      color: 'gray.100',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
});
