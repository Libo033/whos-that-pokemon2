"use client";
import React, { useState } from "react";
import Countdown from "./Countdown";
import styles from "./page.module.css";

const Play = () => {
  const [puntaje, setPuntaje] = useState<number>(0);

  return (
    <div className={styles.Play}>
      <div className={styles.Play_Top}>
        <div className={styles.Play_TopPuntaje}>
          <p>Puntaje: {puntaje}</p>
        </div>
        <Countdown />
      </div>
    </div>
  );
};

export default Play;
