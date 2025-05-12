// src/components/Heatmap.jsx
import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { heatmapData } from "../utils/calculations";
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, Rectangle } from 'recharts';

const Heatmap = ({ data, onMouseOver }) => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="stock" />
          <YAxis />
          <Tooltip />
          <Legend />
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.correlation > 0 ? "green" : "red"}
              onMouseOver={() => onMouseOver(entry)}
            />
          ))}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Heatmap;
