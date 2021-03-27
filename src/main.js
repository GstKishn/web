import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import animate from 'animate.css'
import api from '../until/index'
import axios from 'axios'


Vue.use(animate)
Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.prototype.$ajax = axios;
Vue.prototype.api = api;

axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('token');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


document.title = store.state.webTitle