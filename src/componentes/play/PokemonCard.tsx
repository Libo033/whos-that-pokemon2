import React from "react";
import styles from "./page.module.css";
import { TextField } from "@mui/material";
import Image from "next/image";

const PokemonCard = () => {
  return (
    <div className={styles.PokemonCard}>
      <div className={styles.PokemonCard_BattleZone}>
        <Image
          className={styles.PokemonCard_Pokemon}
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
          }
          alt="pokemon"
          width={475}
          height={475}
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
