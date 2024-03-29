"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

interface IInicioHead {
  localName: string | null;
  handleDelLocalName: () => void;
  handleSetLocalName: (name: string) => void;
}

const InicioHead: React.FC<IInicioHead> = ({
  localName,
  handleDelLocalName,
  handleSetLocalName,
}) => {
  const [nombre, setNombre] = useState<string>("");
  const router = useRouter();

  const startPlaying = (name: string) => {
    if (!localName) handleSetLocalName(name);

    router.push("/play");
  };

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
        onClick={() => startPlaying(nombre)}
        sx={{ width: "30%" }}
        variant="contained"
      >
        jugar
      </Button>
    </div>
  );
};

export default InicioHead;
