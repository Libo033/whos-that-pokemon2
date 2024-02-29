"use client";
import React from "react";
import Countdown from "./Countdown";
import styles from "./page.module.css";

const Play = () => {
  return (
    <div className={styles.Play}>
      <Countdown />
    </div>
  );
};

export default Play;
