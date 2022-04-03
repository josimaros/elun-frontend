import React from 'react';

import { Container,ContainerText } from './styles';

function Alerts({ title, subTitle, icon, close, light,...rest }) {
  return (
    <Container {...rest}>
      {icon && '&'}
      <ContainerText>
      {title && <h4>{title}</h4>}
      <p>{subTitle}</p>
      </ContainerText>
      {close && 'x'}
    </Container>
  )
}

export default Alerts;