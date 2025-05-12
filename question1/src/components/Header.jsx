// src/components/Header.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">Stock Price Analytics</Typography>
        </Box>
        <Button color="inherit" component={Link} to="/">Stock Page</Button>
        <Button color="inherit" component={Link} to="/heatmap">Correlation Heatmap</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
