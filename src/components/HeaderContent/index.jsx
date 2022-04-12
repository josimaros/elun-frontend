import React from 'react';
import { theme } from '../../../stitches.config'
import Button from '../Button';
import { FaBars } from 'react-icons/fa'
import { useSidebar } from '../../providers/sideBarContext'
import { useTheme } from '../../providers/themeContext'
import { FaBell, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa'
import IconNotifications from '../IconNotifications';
import { Container, ContainerNotifications, NavbarCustom } from './styles';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Card from '../Card'


function HeaderContent() {
  const { sidebarConfig, setSidebarConfig } = useSidebar();
  const { isDark, setIsDark } = useTheme();

  function handleClickSidebarStatusOpen() {
    setSidebarConfig({ ...sidebarConfig, isOpen: !sidebarConfig.isOpen });
  }

  function handleClickTheme() {
    setIsDark(!isDark);
  }

  return (
    <Container>
      <NavbarCustom>
        <Navbar.Brand><Link to="/dashboard">Elun</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Produtos" id="basic-nav-dropdown">
              <Card>
                <NavDropdown.Item ><Link to="/products">Produto</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/categories">Categoria</Link></NavDropdown.Item>
              </Card>
            </NavDropdown>
            <NavDropdown title="Financeiro" id="basic-nav-dropdown">
              <Card>
                <NavDropdown.Item ><Link to="/products">Action</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/categories">Another action</Link></NavDropdown.Item>
              </Card>
            </NavDropdown>
            <NavDropdown title="Bot" id="basic-nav-dropdown">
              <Card>
                <NavDropdown.Item ><Link to="/bot/messages">Menssagens</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/bot/menu-produtocts">Modelo de envio</Link></NavDropdown.Item>
              </Card>
            </NavDropdown>
            <NavDropdown title="Configurações" id="basic-nav-dropdown">
              <Card>
                <NavDropdown.Item ><Link to="/config/company">Estabelecimento</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/config/license">Licensa</Link></NavDropdown.Item>
              </Card>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </NavbarCustom>
      <ContainerNotifications>
        <Button onClick={handleClickTheme}>{isDark ? <FaSun size={theme.sizes[5]} color={theme.colors.gray9} /> : <FaMoon size={theme.sizes[5]} color={theme.colors.gray9} />}</Button>
        <IconNotifications value={4} to="notifications"><FaBell size={theme.sizes[5]} color={theme.colors.gray9} /></IconNotifications>
        <IconNotifications value={10} to="messages"><FaEnvelope size={theme.sizes[5]} color={theme.colors.gray9} /></IconNotifications>
      </ContainerNotifications>
    </Container>
  )
}

export default HeaderContent;