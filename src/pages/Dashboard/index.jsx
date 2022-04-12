import React, { useState } from 'react';
import { Titles, TableCustom } from './styles';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { FaEdit, FaRegWindowClose } from 'react-icons/fa';
import Layout from '../Layout';
import { Col, Container, Row } from 'react-bootstrap';
import ChartBalance from '../../components/Charts/Balance'
import { theme } from '../../../stitches.config'
import {format} from 'date-fns'

function Dashboard() {
  const [pedidos, setPedidos] = useState([
    { id: 1, name: 'Pedido 1', dateTime: new Date(), price: 'R$ 100,00', status: 0 },
    { id: 2, name: 'Pedido 2', dateTime: new Date(), price: 'R$ 200,00', status: 1 },
    { id: 3, name: 'Pedido 3', dateTime: new Date(), price: 'R$ 300,00', status: 2 },
    { id: 4, name: 'Pedido 4', dateTime: new Date(), price: 'R$ 400,00', status: 3 },
    { id: 5, name: 'Pedido 5', dateTime: new Date(), price: 'R$ 500,00', status: 4 },
    { id: 6, name: 'Pedido 6', dateTime: new Date(), price: 'R$ 600,00', status: 5 },
  ])

  function handleShowStatus(value){
    switch (value) {
      case 0: return 'Aguardando'
      case 1: return 'Aceito'
      case 2: return 'Em andamento'
      case 3: return 'Enviado'
      case 4: return 'Entregue'
      case 5: return 'Finalizado'
      case 6: return 'Cancelado'
      default: return 'Não definido'

    }
  }

  return (
    <Layout>
      <Titles>
        <h3 className='title'>Dashboard</h3>
        <p className='description'>Visualização de estatisticas da empresa.</p>
      </Titles>

      <Row>
        <ChartBalance title="Balanço" />
        <ChartBalance title="Receita" />
        <ChartBalance title="Despesas" />
        <ChartBalance title="Pedidos" />
      </Row>

      <Row style={{ marginTop: 16 }}>
        <Col sm={12}>
          <Card style={{ width: '100%', height: '100%', overflow: 'auto', marginTop: theme.space[4] }}>
            <TableCustom size='sm' responsive>
              <thead>
                <tr>
                  <th className='id-head'>#</th>
                  <th className='name-head'>Nome</th>
                  <th className='category-head'>Horario</th>
                  <th className='price-head'>Valor</th>
                  <th className='status-head'>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  pedidos.map(pedido => {
                    return (
                      <tr>
                        <td className='id'>{pedido.id}</td>
                        <td className='name'>{pedido.name}</td>
                        <td className='category'>{format( new Date(pedido.dateTime), 'P - HH:mm' )}</td>
                        <td className='price'>{pedido.price}</td>
                        <td className='status' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Button none>{handleShowStatus(pedido.status)}</Button>
                        </td>
                      </tr>
                    )
                  }
                  )
                }

              </tbody>
            </TableCustom>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default Dashboard;