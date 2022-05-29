import { useState } from "react";
import { useDispatch } from "react-redux";
import { buscarPokemon } from "../actions/pokemonActions";

const BuscarPokemon = () => {
  const [text, setText] = useState<string>("");
  // Não vamos esquecer de adicionar o hook redux para ter acesso ao objeto dispatch
  const dispatch = useDispatch();

  const onBuscarClick = () => {
    // Aqui devemos despachar uma ação usando o dispatch do hook redux
    dispatch(buscarPokemon(text));
  };

  return (
    <div id="buscarPokemon">
      <label>Buscar Pokémon</label>
      <input
        type="text"
        placeholder={"Pikachu, Charmander, Ditto, etc"}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => onBuscarClick()}>Buscar</button>
    </div>
  );
};

export default BuscarPokemon;
