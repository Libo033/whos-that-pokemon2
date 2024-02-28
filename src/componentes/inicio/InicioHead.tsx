"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Button, TextField } from "@mui/material";
import { deleteStoreName, storeName } from "@/libs/helpers";

const InicioHead = () => {
  const [localName, setLocalName] = useState<string | null>(null);
  const [nombre, setNombre] = useState<string>("");

  const handleSetLocalName = (name: string) => {
    setLocalName(name);
    storeName(name);
  };

  const handleDelLocalName = () => {
    deleteStoreName();
    setLocalName(null);
  };

  useEffect(() => {
    setLocalName(localStorage.getItem("Username"));
  }, []);

  return (
    <div className={styles.Inicio_Head}>
      {localName ? (
        <div className={styles.Inicio_HeadLocalName}>
          <p>Bienvenido {localName}</p>
          <span onClick={() => handleDelLocalName()}>Cambiar nombre</span>
        </div>
      ) : (
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Usuario123"
          label="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      )}

      <Button
        onClick={() => handleSetLocalName(nombre)}
        sx={{ width: "30%" }}
        variant="contained"
      >
        jugar
      </Button>
    </div>
  );
};

export default InicioHead;
