import React, { useState } from 'react'
import { theme, styled } from '../../../../stitches.config'
import { Col } from 'react-bootstrap'
import Card from '../../Card'
import {useSidebar} from '../../../providers/sideBarContext'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const Header = styled('div', {
  '& h3': {
    marginBottom: 0
  },
  '& p': {
    marginBottom: '$1'
  }
})

function Balance({ title, data }) {
  const { sidebarConfig, setSidebarConfig } = useSidebar()
  const [dataChart, setDataChart] = useState(data || [
    { name: '07/04', value: 4000 },
    { name: '06/04', value: 3000 },
    { name: '05/04', value: 2000 },
    { name: '04/04', value: 2780 },
    { name: '03/04', value: -1890 },
    { name: '02/04', value: 2390 },
    { name: '01/04', value: 3490 },
  ])

  return (
    <Col sm={12} md={4}>
      <Card style={{ padding: 5 }}>
        <Header>
          <h3>{title}</h3>
          <p>Ultimos 7 dias</p>
        </Header>
        {/* <ResponsiveContainer> */}
        <BarChart
          width={sidebarConfig.isOpen ? 215 : 295}//215 - 295
          height={150}
          data={dataChart}
          style={{transition: 'all 0.6s ease-out'}}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <ReferenceLine y={0} stroke={theme.colors.grass12} />
          <Bar dataKey="value" fill={theme.colors.blue9}>
            {dataChart.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.value < 0 ? theme.colors.red9 : theme.colors.blue9} />
              )
            )}
          </Bar>
        </BarChart>
        {/* </ResponsiveContainer> */}
      </Card>
    </Col>
  );
}

export default Balance;