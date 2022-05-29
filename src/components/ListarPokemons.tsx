import { useEffect } from "react";
import ListarPokemonsItem from "./ListarPokemonsItem";
import { buscarPokemons } from "../queries/pokemon.queries";
import { Pokemon } from "../types/pokemon.types";
import { extractPokemonId } from "../services/pokemon.services";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { selecionarPokemon } from "../actions/pokemonActions";
import { IRootState } from "../store/store";

/**
 * Visualizar uma lista de pokemons
 *
 * Ex:
 * <pre>
 *     <ListarPokemons />
 *
 * </pre>
 *
 * @author Digital House
 */
const ListarPokemons = () => {
  const procurar = useSelector<IRootState, string>(
    (state) => state.pokemon.procurar
  );
  const dispatch = useDispatch();

  // Usamos useQuery para encontrar os pokemons com a entrada vinda do redux
  const {
    data: pokemons,
    isLoading,
    refetch,
  } = useQuery("obterPokemons", () => buscarPokemons(procurar));
  useEffect(() => {
    if (procurar) {
      refetch();
    }
  }, [procurar, refetch]);

  const onSelecionarPokemon = (pokemon: Pokemon) => {
    dispatch(selecionarPokemon(pokemon));
  };

  if (isLoading) return <div>Cargando pokemons...</div>;
  return (
    <div className="listar">
      {pokemons &&
        pokemons.map((pokemon: Pokemon) => (
          <ListarPokemonsItem
            pokemon={pokemon}
            selecionarPokemon={onSelecionarPokemon}
            key={extractPokemonId(pokemon.url)}
          />
        ))}
    </div>
  );
};

export default ListarPokemons;
