import React from 'react';
import {Link} from 'react-router-dom'


import { Container,QtdNotifications } from './styles';

function IconNotifications({children,value,to,...rest}) {
  return (
    <Container {...rest}>
      {to 
      ? <Link to={to}>{children}<QtdNotifications>{value}</QtdNotifications></Link> 
      : <>{children}<QtdNotifications>{value}</QtdNotifications></>
      }
    </Container>
  );
}

export default IconNotifications;