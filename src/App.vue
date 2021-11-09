<template>
	<div id="app" class="container">
		<app-header />
		<router-view />
		<app-footer />
	</div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
	components: {
		AppHeader,
		AppFooter
	}
};
</script>
