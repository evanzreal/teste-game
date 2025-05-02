import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#111',
        color: 'white',
        minH: '100vh',
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
        },
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            borderColor: 'whiteAlpha.300',
            bg: 'whiteAlpha.50',
            _focus: {
              borderColor: 'brand.primary',
              boxShadow: '0 0 0 1px #00FF9D',
            },
            _hover: {
              borderColor: 'whiteAlpha.400',
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
  },
});

export default theme; 