import React from "react";
import { Background } from "../components/Background";
import {
  Box,
  Avatar,
  Typography,
  TextField,
  Link,
  Button,
} from "@mui/material";
import { Card } from "../components/Card";

const CriarConta: React.FC = () => {
  return (
    <>
      <Background>
        <Card>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                backgroundColor: "blue",
                width: "50px",
                height: "50px",
                marginBottom: "15px",
              }}
            ></Avatar>
            <Typography component="h1" variant="h5">
              Criar conta
            </Typography>
          </Box>
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
          <TextField
            required
            sx={{ marginBottom: "15px" }}
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <TextField
            required
            sx={{ marginBottom: "15px" }}
            fullWidth
            name="password"
            label="Confirme sua senha"
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Criar conta
          </Button>
          <Box sx={{ textAlign: "center" }}>
            <Link href="/" variant="body2">
              {"Já tem uma conta? Faça o login"}
            </Link>
          </Box>
        </Card>
      </Background>
    </>
  );
};

export { CriarConta };
