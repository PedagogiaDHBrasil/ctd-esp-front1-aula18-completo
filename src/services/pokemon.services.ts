/**
 * Obtenha o id do pokemon no url da poke API
 * @author Digital House
 * @param {string} url a url que aponta para um pokémon
 * @return {string} o id do pokémon
 */
export const extractPokemonId = (url: string): string => {
  return url.split("pokemon")[1].replace("/", "").replace("/", "");
};
