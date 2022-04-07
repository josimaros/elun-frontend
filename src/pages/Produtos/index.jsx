import React from 'react';
import { Row, Col, Table } from 'react-bootstrap'
import Layout from '../Layout';
import Card from '../../components/Card'
import { Form } from '@unform/web';
import Input from '../../components/Input';
import { Titles, ContainerForm,TableCustom } from './styles';
import Button from '../../components/Button';
import {FaEdit, FaRegWindowClose} from 'react-icons/fa'
import { theme } from '../../../stitches.config';

// import { Container } from './styles';

function Produtos() {
  function handleSubmit(data) {
    console.log(data)
  }
  
  return (
    <Layout>
      <Titles>
        <h3 className='title'>Produtos</h3>
        <p className='description'>Cadastro e edição de produtos</p>
      </Titles>
      <Card style={{ width: '100%' }}>
        <ContainerForm>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} sm={12}>
                <Input name="name" placeholder="Nome" label="Nome" className='col-md-6' />
              </Col>
              <Col md={3} sm={12}>
                <Input name="category" placeholder="Categoria" label="Categoria" className="col-md-2" />
              </Col>
              <Col md={3} sm={12}>
                <Input name="price" placeholder="Preço" label="Preço" className="col-2" />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Input name="description" placeholder="Descrição" label="Descrição" className="col" />
              </Col>
            </Row>
            <Row>
              <Col md={{span: 3, offset:9}} sm={12}>
              <Button color="primary" block type="submit">Cadastrar</Button>
              </Col>
            </Row>


          </Form>
        </ContainerForm>
      </Card>
      <Card style={{width:'100%', height:'100%', overflow:'auto', marginTop:theme.space[4]}}>
        <TableCustom size='sm' responsive>
          <thead>
            <tr>
              <th className='id-head'>#</th>
              <th className='name-head'>Nome</th>
              <th className='category-head'>Categoria</th>
              <th className='price-head'>Preço</th>
              <th className='status-head'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='id'>9999</td>
              <td className='name'>Coca-Cola</td>
              <td className='category'>Bebidas</td>
              <td className='price'>R$ 9999,00</td>
              <td className='status' style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
                <Button none><FaEdit /></Button>
                <Button none><FaRegWindowClose /></Button>
              </td>
            </tr>
            <tr>
              <td className='id'>9999</td>
              <td className='name'>Coca-Cola</td>
              <td className='category'>Bebidas</td>
              <td className='price'>R$ 9999,00</td>
              <td className='status' style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
                <Button none><FaEdit /></Button>
                <Button none><FaRegWindowClose /></Button>
              </td>
            </tr>
            <tr>
              <td className='id'>9999</td>
              <td className='name'>Coca-Cola</td>
              <td className='category'>Bebidas</td>
              <td className='price'>R$ 9999,00</td>
              <td className='status' style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
                <Button none><FaEdit /></Button>
                <Button none><FaRegWindowClose /></Button>
              </td>
            </tr>
            <tr>
              <td className='id'>9999</td>
              <td className='name'>Coca-Cola</td>
              <td className='category'>Bebidas</td>
              <td className='price'>R$ 9999,00</td>
              <td className='status' style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
                <Button none><FaEdit /></Button>
                <Button none><FaRegWindowClose /></Button>
              </td>
            </tr>
            <tr>
              <td className='id'>9999</td>
              <td className='name'>Coca-Cola</td>
              <td className='category'>Bebidas</td>
              <td className='price'>R$ 9999,00</td>
              <td className='status' style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
                <Button none><FaEdit /></Button>
                <Button none><FaRegWindowClose /></Button>
              </td>
            </tr>
          </tbody>
        </TableCustom>
      </Card>
    </Layout>
  );
}

export default Produtos;