"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import InicioHead from "./InicioHead";
import InicioBody from "./InicioBody";
import { deleteStoreName, storeName } from "@/libs/helpers";

const Inicio = () => {
  const [localName, setLocalName] = useState<string | null>(null);
  const [record, setRecord] = useState<number>(0);
  const [recordName, setRecordName] = useState<string | null>(null);

  const handleSetLocalName = (name: string) => {
    setLocalName(name);
    storeName(name);
  };

  const handleDelLocalName = () => {
    deleteStoreName();
    setLocalName(null);
  };

  useEffect(() => {
    setLocalName(localStorage.getItem("Username"));
    setRecord(parseInt(localStorage.getItem("Record") || "0"));
    setRecordName(localStorage.getItem("RecordUsername"));
  }, []);

  return (
    <div className={styles.Inicio}>
      <InicioHead
        localName={localName}
        handleDelLocalName={handleDelLocalName}
        handleSetLocalName={handleSetLocalName}
      />
      <InicioBody record={record} localName={localName} recordName={recordName} />
    </div>
  );
};

export default Inicio;
