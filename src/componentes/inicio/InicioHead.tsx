import React from "react";
import styles from "./page.module.css";
import { Button, TextField } from "@mui/material";

const InicioHead = () => {
  return (
    <div className={styles.Inicio_Head}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Usuario123"
        label="Nombre"
      />
      <Button sx={{ width: "30%" }} variant="contained">
        jugar
      </Button>
    </div>
  );
};

export default InicioHead;
