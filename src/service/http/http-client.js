import axios from "axios";
// 统一状态码
export class HttpClient{
    // _msgObj = {
    //     401: '登录失效，请重新登陆！',
    //     404: '请求超时，请联系管理员！'
    //   }
    _instance=axios.create({
        baseURL:'',
        timeout:1000
    })
    _interceptorsRequest=this._instance.interceptors.request.use(config=>{
        // console.log(config,"config-----");
        return config;
    },err=>{
        // console.log(err,"err1");
        return Promise.reject(err);
    })
    _interceptorsResponse=this._instance.interceptors.response.use(res=>{
        //  console.log(res,"res------");
         if(res.status.toString()==='200'){
             return Promise.resolve(res.data);
         }
    },err=>{
        // console.log(err,"err2");
        return Promise.reject(err);
    })
    get(url){
        const result=this._instance.get(url);
        // console.log(result,"result----");
        return result;

    }
}
