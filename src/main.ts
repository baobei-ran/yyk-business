// import 'babel-polyfill';
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './common/css/reset.css';
import './common/css/flex.css';
Vue.config.productionTip = false;
import './utils/rem.js';
import './utils/filters'
// import VueCookie from "vue-cookie";
// Vue.prototype.$cookie = VueCookie
import preview from 'vue-photo-preview';
import 'vue-photo-preview/dist/skin.css'
let options = {
  fullscreenEl: false
};
import common from './utils/common'
import { VERSION } from './utils/_utils'
Vue.use(common, {
    version: VERSION
})
Vue.use(preview, options)
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
