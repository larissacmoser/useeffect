import React from "react";
import { Background } from "../components/Background";
import { Typography, Grid, Button } from "@mui/material";
import { Card } from "../components/Card";
import { BasicModal } from "../components/BasicModal";

const Recados: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <Background>
      <Card>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Lista de produtos
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          paragraph
        ></Typography>

        <Grid sx={{ display: "flex" }}>
          <Grid item sx={{ px: "25px" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOpen()}
            >
              Cadastrar Novo Produto
            </Button>
          </Grid>
          <Grid item sx={{ px: "25px" }}>
            <Button variant="outlined" color="primary">
              Deletar Estoque
            </Button>
          </Grid>
        </Grid>
      </Card>

      <BasicModal open={open}></BasicModal>
    </Background>
  );
};

export { Recados };
