import api from "axios";

export const getListPokemons = (itemsPage) =>
	api.get(`https://pokeapi.co/api/v2/pokemon/?limit=${itemsPage}`);

export const getPokemon = urlPokeInfo => api.get(`${urlPokeInfo}`);

export const getNextPage = urlNextPage => api.get(`${urlNextPage}`);

export const getPreviousPage = urlPreviousPage => api.get(`${urlPreviousPage}`);