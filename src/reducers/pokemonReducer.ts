import {
  AdicionarRegistroPokemonType,
  BuscarPokemonType,
  SelecionarPokemonType,
} from "../actions/pokemonActions";
import { Pokemon, PokemonWithProps } from "../types/pokemon.types";

export type PokemonState = {
  procurar: string;
  pokemonSelecionado: Pokemon | null;
  registro: PokemonWithProps[];
};

const initialState: PokemonState = {
  procurar: "",
  registro: [],
  pokemonSelecionado: null,
};

const pokemonReducer = (
  state: PokemonState = initialState,
  action:
    | SelecionarPokemonType
    | BuscarPokemonType
    | AdicionarRegistroPokemonType
) => {
  switch (action.type) {
    case "BUSCAR_POKEMON":
      return { ...state, procurar: action.payload.name };
    case "SELECIONAR_POKEMON":
      return {
        ...state,
        pokemonSelecionado: action.payload.pokemon,
      };
    case "ADICIONAR_REGISTRO_POKEMON":
      return {
        ...state,
        registro: [
          action.payload.pokemon,
          ...state.registro.filter(
            (pokemon) => pokemon.name !== action.payload.pokemon.name
          ),
        ],
      };
    default:
      return state;
  }
};
export default pokemonReducer;
