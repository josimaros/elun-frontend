import React from 'react';
import { Titles } from './styles';
import Card from '../../components/Card';
import Layout from '../Layout';
import { Col, Row } from 'react-bootstrap';
import ChartBalance from '../../components/Charts/Balance'

function Dashboard() {

  return (
    <Layout>
      <Titles>
        <h3 className='title'>Dashboard</h3>
        <p className='description'>Visualização de estatisticas da empresa.</p>
      </Titles>

        <Row style={{width:'100%'}}>
          <ChartBalance title="Balanço"/>
          <ChartBalance title="Receita"/>
          <ChartBalance title="Pedidos"/>
        </Row>
    </Layout>
  )
}

export default Dashboard;