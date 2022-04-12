import React from 'react';
import Sidebar from '../../components/Sidebar';
import HeaderContent from '../../components/HeaderContent';
import { ContainerCustom, Content } from './styles';
import { Container } from 'react-bootstrap';

function Layout({children}) {
  return (
    <ContainerCustom>
      <Content >
        <HeaderContent />
        <Container fluid>
        {children}
        </Container>
      </Content>
    </ContainerCustom>
  )
}

export default Layout;