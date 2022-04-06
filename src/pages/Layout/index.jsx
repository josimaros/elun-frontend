import React from 'react';
import Sidebar from '../../components/Sidebar';
import HeaderContent from '../../components/HeaderContent';
import { Container, Content } from './styles';

function Layout({children}) {
  return (
    <Container>
      <Sidebar />
      <Content >
        <HeaderContent />
        {children}
      </Content>
    </Container>
  )
}

export default Layout;