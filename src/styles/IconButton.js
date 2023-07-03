import { defineStyleConfig } from '@chakra-ui/react';

export const iconButtonStyle = defineStyleConfig({
  baseStyle: {
    borderRadius: '50%',
    fontSize: 'lg',
    bg: 'red.600',
    color: 'red.800',
  },
  colorScheme: {
    red: {
      bg: 'red.400',
      _hover: {
        transform: 'reset',
      },
    },
  },
  defaultProps: {
    colorScheme: 'red',
  },
});
