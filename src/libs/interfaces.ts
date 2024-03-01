export interface IPokemon {
  id: number;
  name: string;
  image: string;
}

export interface IPokedexContext {
  pokemon: IPokemon[];
  load: boolean;
}
