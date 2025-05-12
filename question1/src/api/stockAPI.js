import axios from 'axios';

const BASE = 'http://localhost:5000/api';

export const fetchStockList = async () => {
  const res = await axios.get(`${BASE}/stocks`);
  return res.data.stocks;
};

export const fetchStockCurrent = async (ticker) => {
  const res = await axios.get(`${BASE}/stocks/${ticker}`);
  return res.data;
};

export const fetchStockHistory = async (ticker, minutes) => {
  const res = await axios.get(`${BASE}/stocks/${ticker}?minutes=${minutes}`);
  return res.data;
};
