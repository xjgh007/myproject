export default{
    buyVip({ commit }, e){
        return new Promise((resolve)=>{
            //mock api交互
            setTimeout(()=>{
                commit('setMemberInfo',{
                    userState:e.userState,
                    vipLevel:e.vipLevel
                })
                resolve('购买成功！')
            },1000)
        })
    },
    checkNum({commit},e){
        return new Promise((resolve)=>{
            commit('setNum',e);
            resolve("数据更新成功了！")
        },1000)
    }
}