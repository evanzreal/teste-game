import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#111',
        color: 'white',
        minH: '100vh',
        WebkitTapHighlightColor: 'transparent',
      },
      '::-webkit-scrollbar': {
        width: '6px',
      },
      '::-webkit-scrollbar-track': {
        bg: 'whiteAlpha.100',
      },
      '::-webkit-scrollbar-thumb': {
        bg: 'brand.primary',
        borderRadius: 'full',
      },
    },
  },
  colors: {
    brand: {
      primary: '#00FF9D',
      dark: '#111',
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'full',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
        _active: {
          transform: 'scale(0.98)',
        },
        _focus: {
          boxShadow: 'none',
        },
      },
      variants: {
        primary: {
          bg: 'brand.primary',
          color: 'brand.dark',
          _hover: {
            bg: '#00CC7D',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0, 255, 157, 0.3)',
          },
          _active: {
            transform: 'scale(0.98) translateY(-2px)',
          },
        },
        outline: {
          border: '2px solid',
          borderColor: 'brand.primary',
          color: 'white',
          _hover: {
            bg: 'brand.primary',
            color: 'brand.dark',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0, 255, 157, 0.3)',
          },
          _active: {
            transform: 'scale(0.98) translateY(-2px)',
          },
        },
      },
      sizes: {
        md: {
          fontSize: { base: 'sm', md: 'md' },
          px: { base: 4, md: 6 },
          py: { base: 2, md: 3 },
        },
        lg: {
          fontSize: { base: 'md', md: 'lg' },
          px: { base: 6, md: 8 },
          py: { base: 3, md: 4 },
        },
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            borderColor: 'whiteAlpha.300',
            bg: 'whiteAlpha.50',
            fontSize: { base: 'sm', md: 'md' },
            _focus: {
              borderColor: 'brand.primary',
              boxShadow: '0 0 0 1px #00FF9D',
            },
            _hover: {
              borderColor: 'whiteAlpha.400',
            },
            _placeholder: {
              color: 'whiteAlpha.400',
            },
          },
        },
      },
    },
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: 'brand.primary',
          transition: 'all 0.3s ease',
        },
      },
    },
    Container: {
      baseStyle: {
        px: { base: 4, md: 6 },
      },
    },
  },
});

export default theme; 