<template>
	<section class="list-pokemons">
		
		<div class="filter-list-pokemons">
			<p>Faça um filtro pelo código</p>

			<div class="inputs">
				<div class="input-filter">
					<label for="codStart">Código Inicial </label
					><input
						type="text"
						v-model="codStart"
						id="codStart"
						class="input-cod"
					/>
				</div>

				<div class="input-filter">
					<label for="codEnd">Código Final </label
					><input type="text" v-model="codEnd" id="codEnd" class="input-cod" />
				</div>
			</div>
		</div>

		<div class="number-pokemons">
			<span class="title-filter">Quanto pokemons você quer ver na tela?</span>
			<select v-model="itemsPage" class="select-pokemons-page">
				<option value="10">10</option>
				<option value="20">20</option>
				<option value="30">30</option>
			</select>
			<button @click="loadList()" class="filter">Filtrar</button>
		</div>

		<div class="list-pokemons">
			<div class="load" v-if="load"></div>
			<div class="result" v-for="(item, index) in items" :key="index" v-else>
				<pokemon :url="item.url" />
			</div>
		</div>

		<div class="pages">
			<div class="button-page" v-if="previousPage != null">
				<a @click="loadPreviousPage(previousPage)">❮ Página Anterior</a>
			</div>
			<div class="button-page" v-if="nextPage != null">
				<a @click="loadNextPage(nextPage)">Próxima Página ❯</a>
			</div>
		</div>
	</section>
</template>

<script>
import {
	getListPokemons,
	getNextPage,
	getPreviousPage
} from "@/services/endpoints.js";
import pokemon from "./components/pokemon.vue";

export default {
	components: { pokemon },
	data() {
		return {
			codStart: "",
			codEnd: "",
			itemsPage: 20,
			pokeStart: "",
			pokeEnd: "",
			scrollPage: "",
			items: "",
			load: false,
			previousPage: "",
			nextPage: "",
			loadAutoList: true
		};
	},
	methods: {
		async loadList() {
			this.load = true;
			try {
				let { data } = await getListPokemons(this.itemsPage);
				this.previousPage = data.previous;
				this.nextPage = data.next;
				this.items = data.results;
			} catch (e) {
				console.log("Não foi possível carregar a lista de Pokemons" + e);
			} finally {
				this.load = false;
			}
		},
		async loadNextPage(url) {
			this.load = true;
			this.loadAutoList = false;
			try {
				let { data } = await getNextPage(url);
				this.previousPage = data.previous;
				this.nextPage = data.next;
				this.items = data.results;
			} catch (e) {
				console.log("Não foi possível carregar a lista de Pokemons" + e);
				console.log(this.nextPage);
			} finally {
				this.load = false;
			}
		},
		async loadPreviousPage(url) {
			this.load = true;
			this.loadAutoList = false;
			try {
				let { data } = await getPreviousPage(url);
				this.previousPage = data.previous;
				this.nextPage = data.next;
				this.items = data.results;
			} catch (e) {
				console.log("Não foi possível carregar a lista de Pokemons" + e);
				console.log(this.previousPage);
			} finally {
				this.load = false;
			}
		}
	},
	mounted() {
		if (this.loadAutoList) {
			this.loadList();
		}
	}
};
</script>
