import React from "react";
import styles from "./page.module.css";
import { TextField } from "@mui/material";
import Image from "next/image";

const PokemonCard = () => {
  return (
    <div className={styles.PokemonCard}>
      <div className={styles.PokemonCard_BattleZone}>
        <Image
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          }
          alt="pokemon"
          width={96}
          height={96}
        />
      </div>
      <div className={styles.PokemonCard_TextField}>
        <TextField fullWidth placeholder="Pokemon" autoComplete="off" />
      </div>
      <span className={styles.PokemonCard_Saltar}>Saltar</span>
    </div>
  );
};

export default PokemonCard;
