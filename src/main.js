import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import layload from "./plugins/layzload";

import './assets/sass/index.scss'

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	layload,
	render: h => h(App)
}).$mount("#app");
