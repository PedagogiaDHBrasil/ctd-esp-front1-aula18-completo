import PropTypes from "prop-types";
import { Pokemon } from "../types/pokemon.types";
import { extractPokemonId } from "../services/pokemon.services";

interface ListarPokemonsItemProps {
  pokemon: Pokemon;
  selecionarPokemon: (pokemon: Pokemon) => void;
}

/**
 * Visualizar um pokemon com seu nome e url
 *
 * Ex:
 * <pre>
 *     <ListarPokemonsItem pokemon={pokemon}
 *                             selecionarPokemon={(pokemon) => {}}/>
 *
 * </pre>
 *
 * @author Digital House
 * @param pokemon o pokémon para mostrar
 * @param selecionarPokemon uma função que é executada quando você clica no pokemon
 */
const ListarPokemonsItem = ({
  pokemon,
  selecionarPokemon,
}: ListarPokemonsItemProps) => (
  <div onClick={() => selecionarPokemon(pokemon)}>
    <strong>{pokemon.name}</strong>
    <small> #{extractPokemonId(pokemon.url)}</small>
  </div>
);

ListarPokemonsItem.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default ListarPokemonsItem;
