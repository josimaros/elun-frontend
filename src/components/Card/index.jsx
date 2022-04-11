import React from 'react';
import { styled, theme } from '../../../stitches.config'

const Container = styled('div', {
  background: '$sage1',
  padding: '$3',
  borderRadius: '$1',
  transition: 'all 0.6s ease-out',
  boxShadow: `-8px 12px 18px 0 ${theme.colors.gray6}`,
})

function Card({ children, shadowColor, css, ...rest }) {
  return (
    <Container {...rest}
      className='card'
      css={
        [
          { boxShadow: `0 5px 15px ${shadowColor ? shadowColor : theme.colors.gray5}` },
          css
        ]
      }>{children}</Container>
  )
}

export default Card;