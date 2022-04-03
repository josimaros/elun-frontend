import { styled } from '../../../stitches.config'

export const Container = styled('button', {
  display: 'inline-block',
  fontWeight: '$4',
  lineHeight: 1.5,
  color: '#727E8C',
  textAlign: 'center',
  textDecoration: 'none',
  verticalAlign: 'middle',
  cursor: 'pointer',
  webkitUserSelect: 'none',
  mozUserSelect: 'none',
  msUserSelect: 'none',
  userSelect: 'none',
  backgroundColor: 'transparent',
  border: '1px solid transparent',
  borderTopColor: 'transparent',
  borderRightColor: 'transparent',
  borderBottomColor: 'transparent',
  borderLeftColor: 'transparent',
  padding: '$1 $3',
  fontSize: '$3',
  borderRadius: '$1',
  transition: 'color 0.15s ease-in -out, background - color 0.15s ease -in -out, border - color 0.15s ease -in -out, box - shadow 0.15s ease -in -out',
  variants: {
    rounded: {
      true: {
        borderRadius: '$6'
      }
    },
    color: {
      primary: {
        color: 'white',
        backgroundColor: '$blue8',
        borderColor: '$blue8',
        '&:hover': {
          backgroundColor: '$blue9',
          borderColor: '$blue9',
        }
      },
      secondary: {
        color: 'white',
        backgroundColor: '$violet8',
        borderColor: '$violet8',
        '&:hover': {
          backgroundColor: '$violet9',
          borderColor: '$violet9',
        }
      },
      success: {
        color: 'white',
        backgroundColor: '$green8',
        borderColor: '$green8',
        '&:hover': {
          backgroundColor: '$green9',
          borderColor: '$green9',
        }
      },
      info: {
        color: 'white',
        backgroundColor: '$cyan8',
        borderColor: '$cyan8',
        '&:hover': {
          backgroundColor: '$cyan9',
          borderColor: '$cyan9',
        }
      },
      warning: {
        color: 'white',
        backgroundColor: '$yellow8',
        borderColor: '$yellow8',
        '&:hover': {
          backgroundColor: '$yellow9',
          borderColor: '$yellow9',
        }
      },
      danger: {
        color: 'white',
        backgroundColor: '$red8',
        borderColor: '$red8',
        '&:hover': {
          backgroundColor: '$red9',
          borderColor: '$red9',
        }
      },
      light: {
        color: 'white',
        backgroundColor: '$gray7',
        borderColor: '$gray7',
        '&:hover': {
          backgroundColor: '$gray8',
          borderColor: '$gray8',
        }
      },
      dark: {
        color: 'white',
        backgroundColor: '$gray11',
        borderColor: '$gray11',
        '&:hover': {
          backgroundColor: '$gray12',
          borderColor: '$gray12',
        },
      },
      "out-primary": {
        color: '$blue8',
        backgroundColor: 'transparent',
        borderColor: '$blue8',
        '&:hover': {
          backgroundColor: 'transparent',
          borderColor: '$blue9',
          color: '$blue9',
        }
      },
      'out-secondary': {
        color: 'violet8',
        backgroundColor: 'transparent',
        borderColor: '$violet8',
        '&:hover': {
          backgroundColor: 'transparent',
          borderColor: '$violet9',
          color: '$violet9',
        }
      },
      'out-success': {
        color: '$green8',
        backgroundColor: 'transparent',
        borderColor: '$green8',
        '&:hover': {
          backgroundColor: 'transparent',
          borderColor: '$green9',
          color: '$green9',
        }
      },
      'out-info': {
        color: '$cyan8',
        backgroundColor: 'transparent',
        borderColor: '$cyan8',
        '&:hover': {
          backgroundColor: 'transparent',
          borderColor: '$cyan9',
          color: '$cyan9',
        }
      },
      'out-warning': {
        color: 'yellow8',
        backgroundColor: 'transparent',
        borderColor: '$yellow8',
        '&:hover': {
          backgroundColor: 'transparent',
          borderColor: '$yellow9',
          color: '$yellow9',
        }
      },
      'out-danger': {
        color: '$red8',
        backgroundColor: 'transparent',
        borderColor: '$red8',
        '&:hover': {
          backgroundColor: 'transparent',
          borderColor: '$red9',
          color: '$red9',
        }
      },
      'out-light': {
        color: '$gray7',
        backgroundColor: 'transparent',
        borderColor: '$gray7',
        '&:hover': {
          backgroundColor: 'transparent',
          borderColor: '$gray8',
          color: '$gray8',  
        }
      },
      'out-dark': {
        color: '$gray11',
        backgroundColor: 'transparent',
        borderColor: '$gray11',
        '&:hover': {
          backgroundColor: 'transparent',
          borderColor: '$gray12',
          color: '$gray12',
        },
      },
    },
  },
})
