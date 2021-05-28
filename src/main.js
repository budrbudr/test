import Vue from 'vue';
import * as bootstrap from 'bootstrap';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store';
import App from './App';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(bootstrap);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
