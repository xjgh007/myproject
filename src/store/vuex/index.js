import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
Vue.use(Vuex);
const path=require('path');
const modulesFiles = require.context('./modules',true,/\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    // set './app.js' => 'app'
    const moduleName=path.basename(modulePath,'.js');//文件名称
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    //console.log(modules,"modules-----");
    return modules
  }, {})
  
  const store=new Vuex.Store({
    modules,
    getters
  }) 
  export default store;

// export default new Vuex.Store({
//     state:{
//         isLoading:false,
//         num:Cookies.get("num")?Cookies.get("num"):10
//     },
//     mutations:{
//         startLoading(){
//             this.state.isLoading=true;
//         },
//         endLoading(){
//             this.state.isLoading=false;
//         },
//         addNum(){
//             this.state.num++;
//             Cookies.set("num",this.state.num);
//         },
//         reduce(){
//             this.state.num--;
//             Cookies.set("num",this.state.num);
//         }
//     },
//     actions:{},
//     modules:{}
// })