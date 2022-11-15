/* eslint-disable jsx-a11y/alt-text */

import AppBar from "../components/AppBar";
import React from "react";
import { Grid, Typography, TextField, Box } from "@mui/material";
import { Card } from "../components/Card";
const Curso: React.FC = () => {
  return (
    <>
      <AppBar />
      <Grid
        container
        maxWidth="lg"
        sx={{
          minWidth: "100vw",
          minHeight: "100vh",
          background: `url(${"images/back.png"}) no-repeat`,
          display: "flex",
        }}
      >
        <div style={{ width: "50%" }}></div>
        <div
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card background="#1660D6">
              <Typography variant="h4" sx={{ color: "#fff" }}>
                Preencha os dados para saber mais sobre nossos cursos!
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              ></TextField>
            </Card>
          </Box>
        </div>
      </Grid>
    </>
  );
};

export default Curso;
