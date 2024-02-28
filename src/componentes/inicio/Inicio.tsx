import React from "react";
import styles from "./page.module.css";
import InicioHead from "./InicioHead";
import InicioBody from "./InicioBody";

const Inicio = () => {
  return (
    <div className={styles.Inicio}>
      <InicioHead />
      <InicioBody />
    </div>
  );
};

export default Inicio;
