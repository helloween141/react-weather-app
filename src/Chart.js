import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts'

export const Chart = ({ data }) => {

const renderLineChart = (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid stroke="#eee" strokeDasharray="2 2"/>
      <Tooltip formatter={value => (value > 0 ? '+' + value : '') + '°C'}/>
      <Line type="monotone" name='Temperature' dataKey="uv" stroke="#8884d8"/>
    </LineChart>
  </ResponsiveContainer>
)
  return renderLineChart
}