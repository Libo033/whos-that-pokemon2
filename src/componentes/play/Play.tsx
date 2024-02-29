"use client";
import React, { useEffect, useState } from "react";
import Countdown from "./Countdown";
import styles from "./page.module.css";
import { countdown } from "@/libs/helpers";

const Play = () => {
  const [puntaje, setPuntaje] = useState<number>(0);
  const [c, setC] = useState<number>(0);

  useEffect(() => {
    countdown(60, setC);
  }, []);

  return (
    <div className={styles.Play}>
      <div className={styles.Play_Top}>
        <div className={styles.Play_TopPuntaje}>
          <p>Puntaje: {puntaje}</p>
        </div>
        <Countdown c={c} />
      </div>
    </div>
  );
};

export default Play;
