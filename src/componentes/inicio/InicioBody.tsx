import React from "react";
import styles from "./page.module.css";

const defaultTop = [
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

const InicioBody = () => {
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
          {defaultTop.slice(0, 10).map((d, i) => (
            <tr key={d._id}>
              <td>{i + 1}</td>
              <td>{d.nombre}</td>
              <td>{d.puntaje}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InicioBody;
