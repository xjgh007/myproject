import Cookies from 'js-cookie';
export default {
    login(state,v){
        state.userinfo=v;
    },
    changeState(state,v){
        state.isLoading=v;
        Cookies.set('isLoading',v);
    },
    setMemberInfo(state,v){
        state.userState=v.userState,
        state.vipLevel=v.vipLevel
    },
    setNum(state,v){
        state.num=v;
    }
}