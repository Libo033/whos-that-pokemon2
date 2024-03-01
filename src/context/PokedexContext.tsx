"use client";
import { IPokedexContext, IPokemon } from "@/libs/interfaces";
import { createContext, useState, useEffect } from "react";

interface PokeApiResponse1 {
  count: number;
  results: [{ name: string; url: string }];
}

interface PokeApiResponse2 {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

const defaultValue: IPokedexContext = {
  pokemon: [],
  load: false,
};

export const PokedexContext: React.Context<IPokedexContext> =
  createContext(defaultValue);

export const PokedexContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [pokemon, setPokemon] = useState<IPokemon[]>(defaultValue.pokemon);
  const [load, setLoad] = useState(false);

  const getPokemons = (url: string): IPokemon[] => {
    let allPok: IPokemon[] = [];

    fetch(url)
      .then((res) => res.json())
      .then((data: PokeApiResponse1) => {
        data.results.forEach((p) => {
          fetch(p.url)
            .then((res) => res.json())
            .then((data: PokeApiResponse2) => {
              let pok: IPokemon = {
                id: data.id,
                name: data.name,
                image: data.sprites.other["official-artwork"].front_default,
              };

              allPok.push(pok);
            })
            .catch((err) => {
              if (err instanceof Error) {
                console.log(err.message);
              }
            });
        });
      })
      .catch((err) => {
        if (err instanceof Error) {
          console.log(err.message);
        }
      });

    return allPok;
  };

  useEffect(() => {
    setPokemon(
      getPokemons("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
    );

    setLoad(true);
  }, []);

  return (
    <PokedexContext.Provider value={{ pokemon, load }}>
      {children}
    </PokedexContext.Provider>
  );
};
