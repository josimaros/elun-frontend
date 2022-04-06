import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useSidebar } from '../../providers/sideBarContext'
import {
  Container,
  SidebarWrapper,
  SidebarHeader,
  SidebarMenu
} from './styles';

function Sidebar() {
  const { sidebarConfig, setSidebarConfig } = useSidebar()

  console.log(sidebarConfig.isOpen)
  return (
    <Container id="sidebar" className={sidebarConfig.isOpen ? 'active' : ''}>
      <SidebarWrapper className='sidebar-wrapper'>
        <SidebarHeader>Elun</SidebarHeader>
        <SidebarMenu>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <Link to="/dashboard" className="accordion-button" >
                  Dashboard
                </Link>
              </h2>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Produtos
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul className="list-group">
                  <Link to="/products"><li className="list-group-item">Produto</li></Link>
                  <Link to="/categories"><li className="list-group-item">Categoria</li></Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Relatorios
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul className="list-group">
                    <li className="list-group-item"><Link to="/" />Diario</li>
                    <li className="list-group-item"><Link to="/" />Mensal</li>
                    <li className="list-group-item"><Link to="/" />Anual</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Configurações
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul className="list-group">
                    <li className="list-group-item"><Link to="/" />Bot</li>
                    <li className="list-group-item"><Link to="/" />Tema</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </SidebarMenu>
      </SidebarWrapper>
    </Container>
  )
}

export default Sidebar;