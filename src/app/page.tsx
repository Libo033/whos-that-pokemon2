import Image from "next/image";
import styles from "./page.module.css";
import Inicio from "@/componentes/inicio/Inicio";

export default function Home() {
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
      <Inicio />
    </main>
  );
}
