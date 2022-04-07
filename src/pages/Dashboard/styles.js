import {styled} from '../../../stitches.config'

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