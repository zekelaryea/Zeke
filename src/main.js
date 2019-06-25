import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import SuiVue from 'semantic-ui-vue';
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'semantic-ui-css/semantic.min.css';


Vue.use(VueRouter)
Vue.use(SuiVue);
Vue.use(BootstrapVue)
Vue.config.productionTip = false


import Accounts from './components/Accounts.vue';
import Account from './components/Account.vue';
import Create from './components/Create.vue';

const routes = [
  { path: '/', component: Create },
  { path: '/accounts', component: Accounts },
  { path: '/view-account/:id', component: Account }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
