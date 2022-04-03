import React from 'react';
import Sidebar from '../../components/Sidebar';
import HeaderContent from '../../components/HeaderContent';
import { Container,Content } from './styles';

function Dashboard() {
  
  return (
    <Container>
      <Sidebar />
      <Content >
        <HeaderContent />
      </Content>
    </Container>
  )
}

export default Dashboard;