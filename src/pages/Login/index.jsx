import React from 'react';
import { Form } from '@unform/web';
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Container, RowSB, CardCustom } from './styles';
import Card from '../../components/Card';
import { theme } from '../../../stitches.config';

function Login() {
  return (
    <Container>
      <Card shadowColor={theme.colors.blue11}>
        <CardCustom>
          <div className='nome-sistema'>Elun</div>
          <h3 className='entrar'>Entrar</h3>
          <p className='messagem-login'>Faça login para continuar para Elun.</p>
          <Form>
            <Input name="email" type="email" placeholder="E-mail" label="Usuario" />
            <Input name="password" type="password" placeholder="Senha" label="Senha" />
            <RowSB>
              <div className='lembrar'>Lembrar-me</div>
              <div className='recuperar'>Recuperar a Senha</div>
            </RowSB>
            <Button color="primary" block>Entrar</Button>
            <div className='nova-conta'>Não possui uma conta?</div>
          </Form>
        </CardCustom>
      </Card>
    </Container>
  )
}

export default Login;