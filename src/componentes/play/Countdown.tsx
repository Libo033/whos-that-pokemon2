"use client";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const Countdown: React.FC<{c: number}> = ({c}) => {
  return (
    <div className={styles.Countdown}>
      <Image src={"/images/clock.gif"} alt="clock" width={498} height={498} />
      <p>{c}</p>
    </div>
  );
};

export default Countdown;
