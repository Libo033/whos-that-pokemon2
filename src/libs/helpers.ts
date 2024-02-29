import React, { SetStateAction } from "react";

export const storeName = (name: string): void => {
  localStorage.setItem("Username", name);
};

export const deleteStoreName = (): void => {
  localStorage.removeItem("Username");
};

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export function countdown(
  time: number,
  setCountdown: React.Dispatch<SetStateAction<number>>
) {
  const inicio = Date.parse(new Date().getMilliseconds().toString());

  setInterval(() => {
    const total = Date.parse(new Date().getMilliseconds().toString());

    if (inicio / 1000 - total / 1000 + time >= 0) {
      setCountdown(inicio / 1000 - total / 1000 + time);
    } else {
      return;
    }
  }, 1000);
}
