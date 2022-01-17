import Vue from "vue";
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload);

const loadimage = require("../assets/images/load.gif");
const errorimage = require("../assets/images/error-image.png");

export const lazyload = Vue.use(VueLazyload, {
	preLoad: 1.3,
	error: errorimage,
	loading: loadimage,
	attempt: 1,
	listenEvents: [ 'scroll' ]
});
