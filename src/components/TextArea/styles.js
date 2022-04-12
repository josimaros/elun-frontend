import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  flexDirection: 'column',
  borderRadius: '$2',
  display: 'flex',
  width: '$full',
  '&+div': {
    marginTop: '$3',
  },
  'label': {
    textTransform: 'uppercase',
    fontSize: '$3',
    fontWeight: '$5',
    color: '$gray11',
  }
})
export const ContainerInput = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '$1',
  backgroundColor: '$gray1',
  borderRadius: '$2',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$gray7',
  variants: {
    isFocused: {
      true: {borderColor: '$blue8'},
    },
    isFilled: {
      true: {borderColor: '$blue8'},
    },
  }
})
export const InputCustom = styled('textarea', {
  width: '$full',
  padding: '$1 $1',
  fontSize: '$3',
  fontWeight: '$4',
  lineHeight: 1.5,
  color: '$gray11',
  backgroundColor: '$gray1',
  backgroundClip: 'padding-box',
  appearance: 'none',
  border: 0,
  '&:focus-visible': {
    outline: 'none'
  }
})