// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/header";
import HeatmapPage from "./pages/HeatmapPage";
import StockPage from "./pages/Stockpage"; // Assuming you've created StockPage.jsx

const App = () => {
  return (
    <Router>
      {/* Header is included on every page */}
      <Header />
      
      {/* Main content area */}
      <Container>
        <Routes>
          {/* Define the routes for the pages */}
          <Route path="/" element={<StockPage />} /> {/* You can replace this with your StockPage component */}
          <Route path="/heatmap" element={<HeatmapPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
