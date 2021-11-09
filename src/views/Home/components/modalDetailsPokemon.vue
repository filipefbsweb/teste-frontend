<template>
	<div>
		<a @click="details()" class="btn-details">Ver detalhes</a>
		<div class="details" ref="details">
			<div class="box-details">
				<p class="close"><a @click="details()">X</a></p>
				<div class="img-modal-pokemon">
					<img
						:src="pokeInfo.sprites.other.dream_world.front_default"
						:alt="'Pokemom ' + pokeInfo.name"
						class="img-pokemon-details"
					/>
				</div>
				<p class="title-pokemon">{{ pokeInfo.name }}</p>
				<div class="info-pokemon">
					<span class="title-info">HP</span>
					<div class="progress-bar">
						<span class="number-power">{{ pokeInfo.stats[0].base_stat }}</span>
						<div
							class="progress-info"
							:style="{ width: pokeInfo.stats[0].base_stat + '%' }"
						></div>
					</div>
				</div>
				<div class="info-pokemon">
					<span class="title-info">Ataque</span>
					<div class="progress-bar">
						<span class="number-power">{{ pokeInfo.stats[1].base_stat }}</span>
						<div
							class="progress-info"
							:style="{ width: pokeInfo.stats[1].base_stat + '%' }"
						></div>
					</div>
				</div>
				<div class="info-pokemon">
					<span class="title-info">Defesa</span>
					<div class="progress-bar">
						<span class="number-power">{{ pokeInfo.stats[2].base_stat }}</span>
						<div
							class="progress-info"
							:style="{ width: pokeInfo.stats[2].base_stat + '%' }"
						></div>
					</div>
				</div>
				<div class="info-pokemon">
					<span class="title-info">Velocidade</span>
					<div class="progress-bar">
						<span class="number-power">{{ pokeInfo.stats[5].base_stat }}</span>
						<div
							class="progress-info"
							:style="{ width: pokeInfo.stats[5].base_stat > 100 ? '100%' : pokeInfo.stats[5].base_stat + '%' }"
						></div>
					</div>
				</div>
				<div class="info-pokemon">
					<span class="title-info">Ataque Special</span>
					<div class="progress-bar">
						<span class="number-power">{{ pokeInfo.stats[3].base_stat }}</span>
						<div
							class="progress-info"
							:style="{ width: pokeInfo.stats[3].base_stat + '%' }"
						></div>
					</div>
				</div>
				<div class="info-pokemon">
					<span class="title-info">Defesa Especial</span>
					<div class="progress-bar">
						<span class="number-power">{{ pokeInfo.stats[4].base_stat }}</span>
						<div
							class="progress-info"
							:style="{ width: pokeInfo.stats[4].base_stat > 100 ? '100%' :  pokeInfo.stats[4].base_stat + '%' }"
						></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		pokeInfo: Object
	},
	methods: {
		details() {
			this.$refs.details.classList.toggle("show");
		}
	}
};
</script>
