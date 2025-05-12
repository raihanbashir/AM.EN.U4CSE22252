const express = require('express');
const cors = require('cors');
const {
  fetchAllStocks,
  fetchStockCurrent,
  fetchStockHistory
} = require('./apiService');

const app = express();
app.use(cors());
const PORT = 5000;

app.get('/api/stocks', async (req, res) => {
  try {
    const stocks = await fetchAllStocks();
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stocks list' });
  }
});

app.get('/api/stocks/:ticker', async (req, res) => {
  const { ticker } = req.params;
  const { minutes } = req.query;

  try {
    if (minutes) {
      const history = await fetchStockHistory(ticker, minutes);
      res.json(history);
    } else {
      const current = await fetchStockCurrent(ticker);
      res.json(current);
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
