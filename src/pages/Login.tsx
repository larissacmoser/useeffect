import {
  Button,
  FormControlLabel,
  Checkbox,
  Avatar,
  Typography,
  TextField,
  Link,
  Box,
} from "@mui/material";
import React from "react";
import { Card } from "../components/Card";
import { Background } from "../components/Background";

const Login: React.FC = () => {
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
              Login
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Lembre-se de mim"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              window.location.href = "/recados";
            }}
          >
            Fazer login
          </Button>
          <Box sx={{ textAlign: "center" }}>
            <Link href="/criar-conta" variant="body2">
              {"Não tem uma conta ainda? Crie uma conta"}
            </Link>
          </Box>
        </Card>
      </Background>
    </>
  );
};

export { Login };
