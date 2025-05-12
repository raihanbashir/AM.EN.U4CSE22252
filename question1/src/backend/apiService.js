const fetch = require('node-fetch');

const AUTH_URL = 'http://20.244.56.144/evaluation-service/auth';

const AUTH_PAYLOAD = {
  companyName: "Tiffin",
  clientID: "your-client-id",          // Replace with actual client ID
  clientSecret: "your-client-secret",  // Replace with actual secret
  ownerName: "Farzana Shajahan",
  ownerEmail: "farzana@tiffin.com",
  rollNo: "AB123"
};

let cachedToken = null;
let tokenExpiry = 0;

async function getAccessToken() {
  if (cachedToken && Date.now() < tokenExpiry) {
    return cachedToken;
  }

  const res = await fetch(AUTH_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(AUTH_PAYLOAD),
  });

  const data = await res.json();
  cachedToken = data.access_token;
  tokenExpiry = Date.now() + data.expires_in * 1000 - 5000;

  return cachedToken;
}

async function fetchAllStocks() {
  const token = await getAccessToken();

  const response = await fetch(`http://20.244.56.144/evaluation-service/stocks`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.json(); // { stocks: { "Apple Inc.": "AAPL", ... } }
}

async function fetchStockCurrent(ticker) {
  const token = await getAccessToken();

  const response = await fetch(`http://20.244.56.144/evaluation-service/stocks/${ticker}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.json(); // { stock: { price, lastUpdatedAt } }
}

async function fetchStockHistory(ticker, minutes) {
  const token = await getAccessToken();

  const response = await fetch(`http://20.244.56.144/evaluation-service/stocks/${ticker}?minutes=${minutes}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.json(); // Array of { price, lastUpdatedAt }
}

module.exports = {
  fetchAllStocks,
  fetchStockCurrent,
  fetchStockHistory
};
