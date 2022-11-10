import React from "react";
import { Paper, Grid } from "@mui/material";
interface CardProps {
  children: any;
}
const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <Grid xs={4}>
      <Paper elevation={3}>
        <Grid item sx={{ padding: "50px" }}>
          {children}
        </Grid>
      </Paper>
    </Grid>
  );
};

export { Card };
