"use client";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import Countdown from "./Countdown";
import styles from "./page.module.css";
import { countdown, getRandomInt } from "@/libs/helpers";
import PokemonCard from "./PokemonCard";
import { PokedexContext } from "@/context/PokedexContext";
import { useRouter } from "next/navigation";

const Play = () => {
  const { pokemon, load } = useContext(PokedexContext);
  const r = useRouter();
  const [puntaje, setPuntaje] = useState<number>(0);
  const [idPok, setIdPok] = useState<number | undefined>(undefined);
  const [c, setC] = useState<number>(180);
  const [inp, setInp] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInp(e.target.value);

    if (idPok) {
      if (e.target.value === pokemon[idPok].name) {
        setShow(true);
        setPuntaje((p) => p + 1);
        setInp("");
        setTimeout(() => {
          setShow(false);
          setIdPok(getRandomInt(0, 150));
        }, 1500);
      }
    }
  };

  const handleSaltar = () => {
    if (idPok) {
      setShow(true);
      setInp(pokemon[idPok].name);
      setTimeout(() => {
        setShow(false);
        setInp("");
        setIdPok(getRandomInt(0, 150));
      }, 750);
    }
  };

  useEffect(() => {
    if (c === 0) {
      const re = parseInt(localStorage.getItem("Record") || "0");
      const us = localStorage.getItem("Username") || "";

      if (puntaje > re) {
        localStorage.setItem("Record", puntaje.toString());
        localStorage.setItem("RecordUsername", us);
      }

      localStorage.setItem("Ultimo", puntaje.toString());
      r.push("/");
    } else if (c === 180) {
      setIdPok(getRandomInt(0, 150));
      countdown(180, setC);
    }
  }, [c]);

  return (
    <div className={styles.Play}>
      <div className={styles.Play_Top}>
        <div className={styles.Play_TopPuntaje}>
          <p>Puntaje: {puntaje}</p>
        </div>
        <Countdown c={c} />
      </div>
      {load && idPok && (
        <PokemonCard
          pokemon={pokemon[idPok]}
          handleChange={handleChangeInput}
          input={inp}
          show={show}
          saltar={handleSaltar}
        />
      )}
    </div>
  );
};

export default Play;
