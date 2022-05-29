import { Pokemon, PokemonWithProps } from "../types/pokemon.types";

export type SelecionarPokemonType = {
  type: "SELECIONAR_POKEMON";
  payload: { pokemon: Pokemon };
};

export type BuscarPokemonType = {
  type: "BUSCAR_POKEMON";
  payload: { name: string };
};

export type AdicionarRegistroPokemonType = {
  type: "ADICIONAR_REGISTRO_POKEMON";
  payload: { pokemon: PokemonWithProps };
};

export const selecionarPokemon = (pokemon: Pokemon): SelecionarPokemonType => {
  return {
    type: "SELECIONAR_POKEMON",
    payload: { pokemon: pokemon },
  };
};

export const buscarPokemon = (name: string): BuscarPokemonType => {
  return {
    type: "BUSCAR_POKEMON",
    payload: { name: name },
  };
};

export const adicionarRegistroPokemon = (
  pokemon: PokemonWithProps
): AdicionarRegistroPokemonType => {
  return {
    type: "ADICIONAR_REGISTRO_POKEMON",
    payload: { pokemon: pokemon },
  };
};
