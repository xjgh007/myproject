import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueRouter from 'vue-router'
import router from './router';
import Vant from 'vant';
import store from './store'
import 'vant/lib/index.css';
import { HttpClient } from "./service/http";
Vue.use(Vant);
Vue.use(VueRouter);

router.beforeEach((to,from,next)=>{
  if(store.state.userinfo||to.path==='/login'){
      next();
  }else{
      next({
        path:'/login'
      })
  }
})
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$axios=new HttpClient();
Vue.prototype.store=store;
new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount("#app");
