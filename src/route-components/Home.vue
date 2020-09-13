<template>
<div style="border:1px solid red;">
    <div>这是首页</div>
    <p>会员信息：{{store.state.userState}}</p>
    <p>{{userState}}---{{isLoading}}</p>
    <p>{{store.getters.memberInfo}}</p>
    <p>{{memberInfo}}</p>
    <input type="button" value="调用action里的方法" @click="setMember">
    <p>{{store.state.num}}</p>
    <p>{{num}}</p>
    <p>{{newNum}}</p>
</div>
</template>

<script>
import {mapGetters,mapState} from 'vuex';
export default {
  computed:{
    ...mapGetters(['memberInfo','newNum']),
    ...mapState(['userState','isLoading','num'])
  },
  mounted(){
    console.log(this.memberInfo,this.userState,this.isLoading,"-----");
    this.store.commit('setNum',100);
    
    this.store.dispatch('checkNum',10001).then(res=>{
        console.log(res,"res222");
      })
  },
  methods:{
    setMember(){
      let params={
        userState:1,
        vipLevel:1
      }
      this.store.dispatch('buyVip',params).then(res=>{
        console.log(res,"res---");
      })
    }
  }
}
</script>

<style>

</style>