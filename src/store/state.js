import Cookies from 'js-cookie';
export default {
    userinfo:'',
    isLoading:Cookies.get('isLoading')?Cookies.get('isLoading'):false,
    userState:'',//0 --> 普通  1--->vip  2--->高级vip
    vipLevel:'',
    num:10
}