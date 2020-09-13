<template>
<div>
     <div>这是登录页</div>
     <div>loading状态：{{store.state.isLoading}}</div>
     <input type="text" v-model="userName">
     <input type="button" @click="toLogin" value="登录">
     <input type="button" @click="toChangeLoading" value="改变loading的状态">
</div>
 
</template>

<script>
export default {
  data(){
    return {
      userName:''
    }
  },
  methods:{
    toLogin(){
      if(!this.userName){
        return false;
      }else{
        setTimeout(()=>{
            this.store.commit('login',{
             userName:this.userName
            })
            this.store.commit('setMemberInfo',{
              userState:2,
              vipLevel:2
            })
          this.$router.push({
            path:'/'
          })
        },500)
      }

    },
    toChangeLoading(){
       this.store.commit('changeState',true)
    }
  }
}
</script>

<style>

</style>