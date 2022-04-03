import { styled,theme } from '../../../stitches.config'
import { Alert } from 'react-bootstrap'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '$4',
  padding: '$2',
  borderRadius: '$1',
  variants: {
    color: {
      primary: {
        background: '$blueA7',
        color: 'White',
        boxShadow: `1px 2px 9px ${theme.colors.blueA5}`,
      },
      success: {
        background: '$greenA7',
        color: 'White',
        boxShadow: `1px 2px 9px ${theme.colors.greenA5}`,
      },
      warning: {
        background: '$yellowA7',
        color: 'White',
        boxShadow: `1px 2px 9px ${theme.colors.yellowA5}`,
      },
      danger: {
        background: '$redA7',
        color: 'White',
        boxShadow: `1px 2px 9px ${theme.colors.redA5}`,
      },
      info: {
        background: '$cyanA7',
        color: 'White',
        boxShadow: `1px 2px 9px ${theme.colors.cyanA5}`,
      },
    }
  }

})
export const ContainerText = styled('div', {
  width: '$full',
  marginLeft: '$3',
  marginRight: '$3',
  background: 'transparent',
  'p': { marginBottom: 0 }

})