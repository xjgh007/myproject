<template>
    <div>
        <p>hello vuex</p>
        <p>{{this.$store.getters.num}}</p>
        <van-button type="warning" @click="addNum">add store.num</van-button>
        <p>{{memberInfo}}</p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    //   store,
    computed:{
       ...mapGetters(['memberInfo'])
    },
      methods:{
          addNum(){
              this.$store.commit('test1/addNum')
          }
      },
      mounted(){
        // console.log('-----');
        // console.log(this.$store,"this.$store");
        //  console.log('-----');
      }
}
</script>

<style>

</style>