import React from 'react';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { theme } from '../../../stitches.config'
import Card from '../../components/Card';
import { Container, CardCustom, RowSB } from './styles';

function Register() {
  return (
    <Container>
      <Card shadowColor={theme.colors.blue11}>
        <CardCustom>
          <div className='nome-sistema'>Elun</div>
          <h3 className='entrar'>Entrar</h3>
          <p className='messagem-login'>Faça login para continuar para Elun.</p>
          <Form>
            <RowSB>
              <Input name="name" placeholder="Nome" label="Nome" />
              <Input name="lastname" placeholder="Sobrenome" label="Sobrenome" />
            </RowSB>
            <RowSB>
              <Input name="company" placeholder="Nome da empresa" label="Empresa" />
              <Input name="email" type="email" placeholder="E-mail" label="E-mail" />
            </RowSB>
            <RowSB>
              <Input name="country" placeholder="País" label="País" />
              <Input name="city" placeholder="Cidade" label="Cidade" />
            </RowSB>
            <RowSB>
              <div className='lembrar'>Já possui uma conta</div>
            </RowSB>
            <Button color="primary" block>Enviar</Button>
          </Form>
        </CardCustom>
      </Card>
    </Container>
  );
}

export default Register;