"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
interface IPuntaje {
  _id: string;
  nombre: string;
  puntaje: number;
}

interface IInicioBody {
  record: number;
  ultimo: number;
  localName: string | null;
  recordName: string | null;
}

const defaultTop: IPuntaje[] = [
  {
    _id: "1",
    nombre: "",
    puntaje: 0,
  },
  {
    _id: "2",
    nombre: "",
    puntaje: 0,
  },
  {
    _id: "3",
    nombre: "",
    puntaje: 0,
  },
  {
    _id: "4",
    nombre: "",
    puntaje: 0,
  },
  {
    _id: "5",
    nombre: "",
    puntaje: 0,
  },
  {
    _id: "6",
    nombre: "",
    puntaje: 0,
  },
  {
    _id: "7",
    nombre: "",
    puntaje: 0,
  },
  {
    _id: "8",
    nombre: "",
    puntaje: 0,
  },
  {
    _id: "9",
    nombre: "",
    puntaje: 0,
  },
  {
    _id: "10",
    nombre: "",
    puntaje: 0,
  },
];

const InicioBody: React.FC<IInicioBody> = ({
  record,
  localName,
  recordName,
}) => {
  const [puntaje, setPuntaje] = useState<IPuntaje[]>([]);

  useEffect(() => {
    fetch("/api/v1/puntaje", { headers: { authorization: "Bearer 2024" } })
      .then((res) => res.json())
      .then((data: { code: number; puntaje: IPuntaje[] }) => {
        if (data.puntaje.length > 10) {
          setPuntaje(data.puntaje);
        } else {
          let p = data.puntaje;
          defaultTop.forEach((d) => p.push(d));
          setPuntaje(p.toSorted((a, b) => b.puntaje - a.puntaje));
        }
      })
      .catch((error) => {
        if (error instanceof Error) console.log(error);
      });
  }, []);

  return (
    <div className={styles.InicioBody}>
      <h2>TOP 10</h2>
      <table className={styles.InicioBody_Table}>
        <thead>
          <tr>
            <th>POS</th>
            <th>NOMBRE</th>
            <th>PUNTAJE</th>
          </tr>
        </thead>
        <tbody>
          {puntaje.slice(0, 10).map((d, i) => (
            <tr key={d._id}>
              <td>{i + 1}</td>
              <td>{d.nombre}</td>
              <td>{d.puntaje}</td>
            </tr>
          ))}
          <tr>
            <td>Mi record</td>
            <td>{recordName || localName}</td>
            <td>{record || 0}</td>
          </tr>
          <tr>
            <td>Ultimo</td>
            <td>{localName}</td>
            <td>{record || 0}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InicioBody;
