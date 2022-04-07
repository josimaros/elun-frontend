import { styled, theme } from '../../../stitches.config'

export const Container = styled('div', {
  transition: 'all .6s',
  width: '240px',
  height: '100vh',
  marginLeft: '-240px',
  background: '$gray1',
  '&.active': {
      marginLeft: 0
  },
  '&:not(.active)': {}
})
export const SidebarWrapper = styled('div', {
  width: '240px',
  height: '100%',
  borderRight: '1px solid $sand4',
  boxShadow: `0 0 10px ${theme.colors.sand3}`,
  transition: 'all 0.6s ease-out',
})

export const SidebarHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$blue9',
  fontweight: 'bold',
  padding: '$5',
  fontSize:'$8',
  marginBottom:'$6',
  borderBottom: '2px solid $sand7',
})
export const SidebarMenu = styled('div', {
  'div.accordion-item': {
    border: 0,
    'h2.accordion-header': {
      'a.accordion-button': {
        background:'$gray1',
        color: '$blue9',
        padding: '$2 $5',
        textTransform: 'uppercase',
        textDecoration: 'none',
        '&:focus': {
          boxShadow: 'none'
        },
        '&:hover': {
          color: '$blue11',
          background: '$blue3',
        },
        '&:after': {
          backgroundImage: 'none',
        }
      },
      
      'button.accordion-button': {
        background:'$gray1',
        color: '$blue9',
        padding: '$2 $5',
        textTransform: 'uppercase',
        '&:focus': {
          boxShadow: 'none'
        },
        '&:hover': {
          color: '$blue11',
          background: '$blue3',
        },
        '&:after': {
          backgroundImage: 'none',
        }
      },
      'button.accordion-button:not(.collapsed)': {
        backgroundColor: '$blue3',
        color: '$blue11',
      },
    },
    'div.accordion-collapse': {
      background: '$gray1',
      'div.accordion-body': {
        'ul.list-group': {
          background: '$gray1',
          'a':{
            textDecoration:'none',
          'li.list-group-item': {
            border: 0,
            cursor: 'pointer',
            color: '$gray10',
            background: '$gray1',
              'a':{
                textDecoration: 'none',
            },
            '&:hover': {
              marginLeft: '2px',
              color: '$blue11',
              fontweight: 'bold'
            }
          }
        },
        }
      }
    }
  }

})