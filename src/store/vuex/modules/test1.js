import Cookies from 'js-cookie';
const state={
    num:Cookies.get("num")?Cookies.get("num"):10
}

const mutations={
    addNum:state=>{
        state.num++;
        Cookies.set("num",state.num);
    }
}
const actions={
    toAddNum({commit}){
        commit('addNum');
    }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions
}