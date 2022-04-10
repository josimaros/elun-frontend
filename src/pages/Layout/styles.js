import {styled} from '../../../stitches.config'

export const Container = styled('div',{
  display:'row',  
  display:'flex',
  flex:1,
  height:'100%',
  alignItems:'center',
  justifyContent:'flex-start',

})
export const Content = styled('div',{
  display:'flex',
  flexDirection:'column',
  flex:1,
  alignItems:'flex-start',
  justifyContent:'flex-start',
  minHeight:'100vh',
  background:'$sand4',
  padding:'$1'
})