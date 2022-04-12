import React from 'react';
import { Form } from '@unform/web';
import TextArea from '../../../components/TextArea'
import { Col, Row } from 'react-bootstrap';
import Layout from '../../Layout';

import { Titles } from './styles';

function Mensagens() {

  function handleSubmit(data){
    console.log(data)
  }

  return (
    <Layout>
      <Titles>
        <h3 className='title'>Dashboard</h3>
        <p className='description'>Visualização de estatisticas da empresa.</p>
      </Titles>

    <Row>
      <Col md={12}>
        <Form onSubmit={handleSubmit}>
          <TextArea 
            name='mensagem' 
            label='Mensagem de boas vindas' 
            placeholder='Olá, Seja bem vindo eu sou o Elun, seu assistente virtual. irei lhe ajudar no seu atendimento. ' />
        </Form>
      </Col>
    </Row>

    </Layout>
  )
}

export default Mensagens;