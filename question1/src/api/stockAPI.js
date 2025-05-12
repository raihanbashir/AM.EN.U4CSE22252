// src/services/stockAPI.js

const BASE_URL = "http://20.244.56.144/evaluation-service";

// Fetch Stock List
export const fetchStockList = async () => {
  const response = await fetch(`${BASE_URL}/stocks`);
  const data = await response.json();
  return data.stocks;
};

// Fetch Current Stock Price
export const fetchStockCurrent = async (ticker) => {
  const response = await fetch(`${BASE_URL}/stocks/${ticker}`);
  const data = await response.json();
  return data.stock;
};

// Fetch Stock Price History
export const fetchStockHistory = async (ticker, minutes) => {
  const response = await fetch(`${BASE_URL}/stocks/${ticker}?minutes=${minutes}`);
  const data = await response.json();
  return data;
};

// **Fix for the fetchStockCorrelation function**
export const fetchStockCorrelation = async (tickers, minutes) => {
  const url = `${BASE_URL}/correlation?tickers=${tickers.join(",")}&minutes=${minutes}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data; // Assuming this is the correct response format
  } catch (error) {
    console.error('Error fetching correlation:', error);
    throw error; // It's important to propagate the error so the calling component can handle it
  }
};
