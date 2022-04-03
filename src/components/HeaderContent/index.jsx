import React from 'react';
import {theme} from '../../../stitches.config'
import Button from '../Button';
import {FaBars} from 'react-icons/fa'
import { useSidebar } from '../../providers/sideBarContext'
import {FaBell, FaEnvelope} from 'react-icons/fa'
import IconNotifications from '../IconNotifications';
import { Container,ContainerNotifications } from './styles';

function HeaderContent() {
const {sidebarConfig,setSidebarConfig} = useSidebar();

  function handleClickSidebarStatusOpen() {
    setSidebarConfig({...sidebarConfig,isOpen:!sidebarConfig.isOpen} );
  }
  return (
    <Container>
      <Button onClick={handleClickSidebarStatusOpen} ><FaBars size={theme.sizes[5]} color={theme.colors.gray9}/></Button>
      <ContainerNotifications>
        <IconNotifications value={4} to="notifications"><FaBell size={theme.sizes[7]} color={theme.colors.gray9}/></IconNotifications>
        <IconNotifications value={10} to="messages"><FaEnvelope size={theme.sizes[7]} color={theme.colors.gray9}/></IconNotifications>
      </ContainerNotifications>
    </Container>
  )
}

export default HeaderContent;