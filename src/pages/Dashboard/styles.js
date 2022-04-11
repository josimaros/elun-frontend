import {styled} from '../../../stitches.config'
import {Table} from 'react-bootstrap'

export const Container = styled('div',{

})
export const Titles = styled('div', {
  marginBottom: '$4',
  '& h3.title': {
    marginTop: '0',
    margbginBottom: '$1',
    fontWeight: '$5',
    lineHeight: 1.2,
    color: '$gray11',
  },
  '& p.description': {
    color: '$sand10',
    fontSize: '$4',
  }
})

export const TableCustom = styled(Table, {
  '& thead': {
    '& tr': {
      color: '$gray12',
      textTransform: 'uppercase',
      '& th.id-head': {
        width: '5 0px',
      },
      '& th.name-head': {
      },
      '& th.category-head': {
      },
      '& th.price-head': {
      },
      '& th.status-head': {
        textAlign: 'center',
      },
    }
  },
  '& tbody': {
    borderTopColor: '$gray9 !important',
    color:'$gray11',
    '& tr': {
      '& td.id': {},
      '& td.name': {},
      '& td.category': {},
      '& td.price': {},
      '& td.status': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around !important',
        flexDirection: 'row',
          '& button:first-child': {
            '& svg': {
              color: '$blue10',
          }
        },
        '& button:last-child': {
          '& svg': {
            color: '$red10',
          }
        }

      }
    }
  }
})