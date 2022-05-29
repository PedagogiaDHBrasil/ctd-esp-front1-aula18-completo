import { FC, useEffect } from "react";
import PropTypes from "prop-types";
import { useQuery } from "react-query";
import { getPokemon } from "../queries/pokemon.queries";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../store/store";
import { Pokemon, PokemonWithProps } from "../types/pokemon.types";
import { adicionarRegistroPokemon } from "../actions/pokemonActions";

type VerPokemonDetalheProps = {
  pokemonSelecionado: Pokemon;
};

const VerPokemonDetalle: FC<VerPokemonDetalheProps> = ({
  pokemonSelecionado,
}: VerPokemonDetalheProps) => {
  const dispatch = useDispatch();
  const {
    data: pokemon,
    isLoading,
    refetch,
  } = useQuery<PokemonWithProps>(
    "obterPokemon",
    () => getPokemon(pokemonSelecionado.name),
    {
      onSuccess: (data) => {
        dispatch(adicionarRegistroPokemon(data));
      },
    }
  );

  useEffect(() => {
    if (pokemonSelecionado) {
      refetch();
    }
  }, [refetch, pokemonSelecionado, pokemonSelecionado?.name]);
  if (isLoading) return <div>Carregando pokémon...</div>;

  return pokemon ? (
    <div className="verPokemon">
      <h4>Pokemon: {pokemon.name}</h4>
      <h5>#{pokemon.id}</h5>
      <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
    </div>
  ) : null;
};

const VerPokemon = () => {
  // Usamos useQuery para pegar o pokemon que vem do redux
  // @ts-ignore
  const pokemonSelecionado = useSelector<IRootState, Pokemon | null>(
    (state) => state.pokemon.pokemonSelecionado
  );
  if (!pokemonSelecionado) return <div className="verPokemon" />;
  //
  return <VerPokemonDetalle pokemonSelecionado={pokemonSelecionado} />;
};

VerPokemon.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default VerPokemon;
