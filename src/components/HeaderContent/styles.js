import { styled } from '../../../stitches.config'
import { Navbar } from 'react-bootstrap'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '$full',
  padding: '$3',
  marginBottom: '$5',
  borderBottom:'2px solid $gray7',
})

export const ContainerNotifications = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
})

export const NavbarCustom = styled(Navbar, {
  'div.me-auto.navbar-nav':{
    marginLeft:'$6',
    'div.nav-item.dropdown':{
      '& a#basic-nav-dropdown':{
        color: '$blue9',
        fontweight: '$5',
        fontSize: '$4',
        display: 'flex',
        alignItems: 'center',
        '&:after':{
          fontSize: '$5',
        }
      }
    },
  },

  'div.dropdown-menu.show': {
    background: 'transparent',
    border: 0,
    color: '$red8',
    'div.card': {
      'a.dropdown-item': {
        background: 'transparent',
        padding: '$1',
        '&:hover': {
          'a':{
            color: '$blue11',
            transition: 'all 0.3s ease-out',
          },
        },
        'a': {
          color: '$blue9',
        }
      }
    }
  }
})