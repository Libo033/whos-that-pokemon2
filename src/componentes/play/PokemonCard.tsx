import React, { ChangeEvent } from "react";
import styles from "./page.module.css";
import { TextField } from "@mui/material";
import Image from "next/image";
import { IPokemon } from "@/libs/interfaces";

interface IPokemonCard {
  pokemon: IPokemon;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  input: string;
  show: boolean;
  saltar: () => void;
}

const PokemonCard: React.FC<IPokemonCard> = ({
  pokemon,
  input,
  handleChange,
  show,
  saltar
}) => {
  return (
    <div className={styles.PokemonCard}>
      <div className={styles.PokemonCard_BattleZone}>
        <Image
          className={
            show ? styles.PokemonCard_PokemonTrue : styles.PokemonCard_Pokemon
          }
          src={pokemon.image}
          alt="pokemon"
          width={475}
          height={475}
        />
      </div>
      <div className={styles.PokemonCard_TextField}>
        <TextField
          fullWidth
          placeholder="Pokemon"
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          id="pokInp"
          autoComplete="off"
        />
      </div>
      <span onClick={() => saltar()} className={styles.PokemonCard_Saltar}>Saltar</span>
    </div>
  );
};

export default PokemonCard;
