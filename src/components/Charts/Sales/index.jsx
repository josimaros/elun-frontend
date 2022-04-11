import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaChartBar } from 'react-icons/fa'
import { theme } from '../../../../stitches.config';
import { Container } from './styles';
import CurrencyFormat from 'react-currency-format';
import { useSidebar } from '../../../providers/sideBarContext'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

function Sales({ data }) {
  const { sidebarConfig, setSidebarConfig } = useSidebar()
  const [novaData, setNovaData] = useState(new Date())
  const [dataChart, setDataChart] = useState(data || [
    { name: novaData.setDate(11), value: 4000 },
    { name: novaData.setDate(10), value: -3000 },
    { name: novaData.setDate(9), value: 2000 },
    { name: novaData.setDate(8), value: 2780 },
    { name: novaData.setDate(7), value: 1890 },
    { name: novaData.setDate(6), value: -2390 },
    { name: novaData.setDate(5), value: 3490 },
  ])
  function setColorChart(entry) {
    let color = theme.colors.blue8
    if (entry.value > 0 && new Date(entry.name).getDate() === new Date().getDate()) {
      color = theme.colors.blue9
    }
    if (entry.value > 0 && new Date(entry.name).getDate() !== new Date().getDate()) {
      color = theme.colors.blue8
    }
    if (entry.value < 0 && new Date(entry.name).getDate() === new Date().getDate()) {
      color = theme.colors.red9
    }
    if (entry.value < 0 && new Date(entry.name).getDate() !== new Date().getDate()) {
      color = theme.colors.red8
    }

    return color
  }
  return (
    <Container>
      <h2>Vendas</h2>
      <Row>
        <Col md={5}>
          <div className='value'>
            <CurrencyFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'R$'} />
          </div>
          <div className='percent'>
            <FaChartBar color={theme.colors.gray11} size={14} /> +19% do Ultimo mês</div>
          <div className='legend'>
            <div className='text-ultmes'>Ultimo Mês</div>
            <div className='text-atumes'>Mês Atual</div>
          </div>
        </Col>
        <Col md={7} sm={12}>
          <div>
            <BarChart
              width={sidebarConfig.isOpen ? 270 : 360}//215 - 295
              height={150}
              data={dataChart}
              style={{ transition: 'all 0.6s ease-out' }}
            >
              <XAxis dataKey={ value => new Date(value.name).getDate()} />
              <Tooltip />
              <ReferenceLine y={0} stroke={theme.colors.grass12} />
              <Bar dataKey="value" fill={theme.colors.blue9}>
                {dataChart.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={setColorChart(entry)} />
                )
                )}
              </Bar>
            </BarChart>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Sales;