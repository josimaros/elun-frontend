import {styled} from '../../../../stitches.config'

export const Container = styled('div', {
  '& h2': {
    fontSize: '$7',
    fontWeight: '$5',
    color: '$gray12',
  },
  '& div.value': {
    fontSize: '$6',
    color: '$gray12',
    marginTop: '$5',
  },
  '& div.percent': {
    color: '$gray11',
    marginTop: '$1',
    marginBottom: '$2',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  '& div.legend': {
    
    '& div.text-ultmes': {
      '&:before': {
        content: '',
       display: 'inline-block',
       width: '$3',
       height: '$3',
       borderRadius: '$round',
       backgroundColor: '$blue11',
       marginRight: '$2',
      }
    },
    '& div.text-atumes': {
      '&:before': {
        content: '',
       display: 'inline-block',
       width: '$3',
       height: '$3',
       borderRadius: '$round',
       backgroundColor: '$blue8',
       marginRight: '$2',
      }
    },
  }
})