<template>
	<div class="pokemon">
		<p class="name-pokemon">
			<span class="cod-pokemon">{{ pokeInfo.id }}</span>
			{{ pokeInfo.name }}
		</p>
		<p class="type-pokemon">
			{{ pokeInfo.types[0].type.name }}
			{{ pokeInfo.types[1] ? pokeInfo.types[1].type.name : "" }}
		</p>
		<img
			v-lazy="pokeInfo.sprites.other.dream_world.front_default"
			:alt="'Pokemom ' + pokeInfo.name"
			class="img-pokemon"
		/>

		<modal-details-pokemon :pokeInfo="pokeInfo" />
	</div>
</template>

<script>
import { getPokemon } from "@/services/endpoints.js";
import modalPokeInfo from "./modalDetailsPokemon.vue";
import modalDetailsPokemon from "./modalDetailsPokemon.vue";

export default {
	components: { modalDetailsPokemon },
	componentes: { modalPokeInfo },
	props: {
		url: String
	},
	data() {
		return {
			pokeInfo: {
				sprites: {
					other: {
						dream_world: {}
					}
				},
				types: [
					{
						type: {
							name: ""
						}
					}
				],
				stats: [
					{
						base_stat: '',
					},
					{
						base_stat: '',
					},
					{
						base_stat: '',
					},
					{
						base_stat: '',
					},
					{
						base_stat: '',
					},
					{
						base_stat: '',
					},
				]
			}
		};
	},
	methods: {
		async loadPokemonInfo(url) {
			try {
				let { data } = await getPokemon(url);
				this.pokeInfo = data;
			} catch (e) {
				console.log("Não foi possível carregar a informação. Erro: " + e);
			}
		}
	},
	mounted() {
		this.loadPokemonInfo(this.url);
	}
};
</script>
