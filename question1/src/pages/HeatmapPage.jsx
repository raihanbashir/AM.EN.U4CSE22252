// src/pages/HeatmapPage.jsx
import React, { useState, useEffect } from "react";
import { Container, Typography, Box, CircularProgress } from "@mui/material";
import Heatmap from "../components/Heatmap";
import { fetchStockCorrelation } from "../api/stockAPI";

const HeatmapPage = () => {
  const [correlationData, setCorrelationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCorrelation = async () => {
      try {
        const response = await fetchStockCorrelation();
        setCorrelationData(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching correlation data:", error);
        setLoading(false);
      }
    };
    fetchCorrelation();
  }, []);

  const handleMouseOver = (data) => {
    // Display details on hover (or make it interactive as needed)
    console.log("Hovered data:", data);
  };

  return (
    <Container>
      <Box mt={4} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4">Stock Correlation Heatmap</Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          <Heatmap data={correlationData} onMouseOver={handleMouseOver} />
        )}
      </Box>
    </Container>
  );
};

export default HeatmapPage;
