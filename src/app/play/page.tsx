"use client";
import React from "react";
import Image from "next/image";
import Play from "@/componentes/play/Play";

const page = () => {
  return (
    <main className="inicio">
      <Image
        className="inicio-background"
        src={
          "https://res.cloudinary.com/dsuydyqgz/image/upload/v1709129158/01-varios/oihosidf7lvq7fwjmv05.png"
        }
        alt="pokemon background"
        width={748}
        height={421}
      />
      <Play />
    </main>
  );
};

export default page;
