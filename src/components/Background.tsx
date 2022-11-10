import React from "react";
import { Grid } from "@mui/material";
interface BackgroundProps {
  children: any;
}
const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <>
      <Grid
        container
        sx={{
          background: "linear-gradient(-135deg, #153794 11%, #f4e23d 79%)",
          height: "100vh",
          width: "100vw",
          padding: "0px",
          margin: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </Grid>
    </>
  );
};

export { Background };
