import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine
} from 'recharts';
import { Typography } from '@mui/material';

const StockChart = ({ data }) => {
  const prices = data.map(d => d.price);
  const avg = prices.reduce((a, b) => a + b, 0) / prices.length;

  return (
    <div>
      <Typography variant="h6">Stock Price Chart</Typography>
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="lastUpdatedAt" tickFormatter={time => new Date(time).toLocaleTimeString()} />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <ReferenceLine y={avg} stroke="red" label="Average" />
      </LineChart>
    </div>
  );
};

export default StockChart;
