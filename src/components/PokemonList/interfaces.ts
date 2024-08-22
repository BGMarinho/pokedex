export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonList extends Array<IPokemon> {}

export interface ITypePokemon {
  pokemon: IPokemon;
}

export interface ITypePokemonList extends Array<ITypePokemon> {}
