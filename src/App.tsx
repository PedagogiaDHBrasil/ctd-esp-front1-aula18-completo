import ListarPokemons from "./components/ListarPokemons";
import VerPokemon from "./components/VerPokemon";

import "./styles.css";
import BuscarPokemon from "./components/BuscarPokemon";
import { QueryClient, QueryClientProvider } from "react-query";

import { Provider } from "react-redux";
import { store } from "./store/store";
import RegistroPokemon from "./components/RegistroPokemon";

export default function App() {
  // Precisaremos criar a store, com o estado inicial e configurar o provider para que todos
  // nosso aplicativo tem acesso ao estado Redux
  const client = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <div className="App">
          <h1>Pokédex</h1>
          <div id="caixaDeEntrada">
            <div
              style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
            >
              <BuscarPokemon />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <ListarPokemons />
                <VerPokemon />
                <RegistroPokemon />
              </div>
            </div>
          </div>
        </div>
      </QueryClientProvider>
    </Provider>
  );
}
