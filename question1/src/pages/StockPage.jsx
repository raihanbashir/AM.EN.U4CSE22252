import React, { useEffect, useState } from 'react';
import { fetchStockList, fetchStockHistory } from '../api/stockAPI';
import StockChart from '../components/StockChart';
import { MenuItem, Select, Typography } from '@mui/material';

const StockPage = () => {
  const [stocks, setStocks] = useState({});
  const [selectedTicker, setSelectedTicker] = useState('AAPL');
  const [minutes, setMinutes] = useState(60);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchStockList();
      setStocks(data);
    };
    load();
  }, []);

  useEffect(() => {
    const load = async () => {
      const data = await fetchStockHistory(selectedTicker, minutes);
      setHistory(data);
    };
    if (selectedTicker) load();
  }, [selectedTicker, minutes]);

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4">Stock Page</Typography>
      <Select value={selectedTicker} onChange={e => setSelectedTicker(e.target.value)}>
        {Object.entries(stocks).map(([name, ticker]) => (
          <MenuItem key={ticker} value={ticker}>{name}</MenuItem>
        ))}
      </Select>
      <Select value={minutes} onChange={e => setMinutes(e.target.value)}>
        {[15, 30, 60, 120].map(m => (
          <MenuItem key={m} value={m}>{m} minutes</MenuItem>
        ))}
      </Select>
      <StockChart data={history} />
    </div>
  );
};

export default StockPage;
