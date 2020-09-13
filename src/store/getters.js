export default {
    memberInfo(state){
        switch(state.userState){
            case 0:
                return '普通会员';
            case 1:
                return `vip会员,会员级别${state.vipLevel}`;
            case 2:
                return `高级vip会员,会员级别${state.vipLevel}`;
            default:
                return '普通会员';
        }
    },
    newNum:state=>'目前的数据是：'+state.num
}