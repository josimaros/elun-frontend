import {styled} from '../../../stitches.config'
import Card from '../../components/Card'

export const Container = styled('div', {
  backgroundColor: '$blue9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  height: '100vh',
})

export const RowSB = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent:'space-between',
  padding: '$1 $2',
  marginBottom: '$2',
  '& div.lembrar': {
    color:'$blue9',
    fontSize:'$5'
  },
  '& div.recuperar': {
    color:'$blue9',
    fontSize:'$5'
  },
})

export const CardCustom = styled('div', {
  minWidth: '400px',
  '& div.nome-sistema': {
    textAlign: 'center',
    color: '$blue9',
    fontSize: '$9',
    fontWeight: '$700',
    },
    '& h3.entrar':{
      textAlign: 'center',
      color:'$gray9',
      marginTop: '$3',
      marginBottom: '$1',
    },
    '& p.messagem-login':{
      textAlign: 'center',
      fontSize: '$4',
      color:'$gray9',
      marginBottom: '$6',
    },
    '& div.nova-conta':{
      color:'$blue9',
      textAlign: 'center',
      fontSize: '$5',
      marginTop: '$4',
      marginBottom: '$2',
    }
})