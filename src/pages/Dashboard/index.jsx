import React from 'react';
import { Titles } from './styles';
import Card from '../../components/Card';
import Layout from '../Layout';
import { Col, Container, Row } from 'react-bootstrap';
import ChartBalance from '../../components/Charts/Balance'
import EstatisticasDeVendas from '../../components/Charts/Sales'

function Dashboard() {

  return (
    <Layout>
      <Container fluid>
        <Titles>
          <h3 className='title'>Dashboard</h3>
          <p className='description'>Visualização de estatisticas da empresa.</p>
        </Titles>

        <Row>
          <ChartBalance title="Balanço" />
          <ChartBalance title="Receita" />
          <ChartBalance title="Pedidos" />
        </Row>

        <Row style={{ marginTop: 16 }}>
          <Col md={8} sm={12}>
            <Card>
                <EstatisticasDeVendas />
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Dashboard;