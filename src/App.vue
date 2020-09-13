<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <axiosExample1></axiosExample1>
    <vuex></vuex>
    <router-view/>
    <!-- <view-router></view-router> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import axiosExample1 from './components/axios_example1.vue'
// import vuex from './components/vuex';
const path = require("path");
const files = require.context("./components", true, /\.vue$/);
let modules=[];
files.keys().forEach(key => {
   // console.log(key,"key");
   // console.log(files(key),"files(key)");
    const name = path.basename(key, ".vue");
    modules[name] = files(key).default || files(key);
});
 //console.log(modules,"modules");

export default {
  name: "App",
  // components: {
  //   HelloWorld,
  //   axiosExample1,
  //   vuex
  // }
  components: {...modules}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
