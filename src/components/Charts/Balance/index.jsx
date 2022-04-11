import React, { useState } from 'react'
import { theme, styled } from '../../../../stitches.config'
import { Col } from 'react-bootstrap'
import Card from '../../Card'
import { useSidebar } from '../../../providers/sideBarContext'
import {
  BarChart,
  LineChart,
  Line,
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
import closestIndexTo from 'date-fns/esm/fp/closestIndexTo/index'

const Header = styled('div', {
  color: theme.colors.blue1,
  marginLeft: '$3',
  '& h3': {
    marginBottom: 0
  },
  '& p': {
    marginBottom: '$1'
  }
})
const Content = styled('div', {
  background: `linear-gradient(${theme.colors.blue9}, ${theme.colors.blue7})`,
  borderRadius: '$1',
})

const TooltipCustom = ({ ...rest }) => {
  return (
    <div>
      12
    </div>
  )
}

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
      <Content>
        <Card style={{ padding: 5, background: 'transparent' }}>
          <Header>
            <h3>{title}</h3>
            <p>Ultimos 7 dias</p>
          </Header>
          {/* <ResponsiveContainer> */}
          <LineChart
            width={sidebarConfig.isOpen ? 215 : 295}
            height={100} data={dataChart}>
            <Tooltip
              wrapperStyle={{ color: theme.colors.blue12 }}
              contentStyle={{
                background: theme.colors.gray1,
                borderRadius: theme.radii[3],
                color: theme.colors.gray12,
              }}
              labelStyle={{
                color: theme.colors.gray12,
              }}
              itemStyle={{
                color: theme.colors.gray12,
              }}
              formatter={(value, name, props) => [
                value,`R$`,
              ]}
              labelFormatter={(value, name, props) => dataChart[value].name}
            />

            <Line
              type="natural"
              dataKey="value"
              stroke={theme.colors.blue1}
              dot={false}
              strokeWidth={2}

            />
          </LineChart>
          {/* </ResponsiveContainer> */}
        </Card>
      </Content>
    </Col>
  );
}

export default Balance;


{/* <LineChart
          width={sidebarConfig.isOpen ? 215 : 295}//215 - 295
          height={150}
          data={dataChart}
          style={{transition: 'all 0.6s ease-out'}}
        >
          <YAxis dataKey="name" />
          <XAxis dataKey="name" />
          <Tooltip />
          <ReferenceLine y={0} stroke={theme.colors.grass12} />
          <Bar dataKey="value" fill={theme.colors.blue9}>
            {dataChart.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.value < 0 ? theme.colors.red9 : theme.colors.blue9} />
              )
            )}
          </Bar>
        </LineChart> */}