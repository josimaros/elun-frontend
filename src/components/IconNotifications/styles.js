import {styled} from '../../../stitches.config'


export const Container = styled('div',{
  display:'flex',
  alignItems:'center',
  justifyItems:'center',
  flexDirection:'row',
  position:'relative',
  marginRight:'$3',
})

export const QtdNotifications = styled('div',{
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  width:'$4',
  height:'$4',
  background:'$red9',
  borderRadius:'$round',
  color:'$gray1',
  fontSize:'10px',
  position:'absolute',
  top:'-7px',
  right:'-7px',
})