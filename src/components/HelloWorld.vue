<template>
    <div>
        <div class="hello">hello word</div>
        <!-- <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button> -->
        <p>{{isShow}}</p>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      isShow:true
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      //1，请求代理的接口
      // const URL =
      //   "/pjyy-deepexi-aggregation/api/v1/advertisingAssistant/findByCondition";
      // const result = this.$http.get(URL);
      // console.log(result, "result");
      // this.$http
      //   .get(URL)
      //   .then(res => {
      //     console.log(res, "res----");
      //   })
      //   .catch(err => {
      //     console.log(err, "err----");
      //   });
      //2，请求本地的接口
      // this.$http.get("/data.json").then(res2=>{
      //   console.log(res2,"res2");
      // })
      //3,请求axios实例接口
      // let instance=axios.create({
      //   baseURL:'http://localhost:8080',
      //   timeout:1000
      // })
      //  let instance2=axios.create({
      //   baseURL:'http://localhost:8080',
      //   timeout:1000
      // })
      // instance.get('/data.json').then(res=>{
      //   console.log(res,"res------");
      // })

      //4.axios创建的实例中的配置
      // this.$http.defaults.timeout = 1500;
      // let instance = this.$http.create({
      //   baseURL: "http://localhost:8080",
      //  // timeout: 1000,
      //   url: "/data.json",
      //   method: "get",
      //   headers: {
      //     token: ""
      //   }, //请求头
      //   params: {}, //请求参数拼接在URL
      //   data: {} //请求参数放在请求体中
      // });
      // instance.get('/data.json').then(res=>{
      //   console.log(res,"res9999");
      // })
    //  console.log(instance, "instance1");
      //1,axios 全局配置
      // this.$http.defaults.timeout = 1500;
      // this.$http.defaults.baseURL = "http://localhost:8080";
      // //2,axios 实例配置
      // let instance = this.$http.create();
      // this.$http.defaults.timeout = 3000;
      // //3,axios 请求配置
      // instance.get("/data.json", {
      //   timeout: 5000
      // });
      //5.创建拦截器 
      //在请求或者处理前拦截他们：请求拦截器   响应拦截器
      //请求到了后端叫响应 请求没到后端叫请求
      // let instance = this.$http.create({

      // });

      //请求时的拦截器
      // let interceptors=this.$http.interceptors.request.use(config=>{
      //   const token = 'token123456';
      //   config.headers={
      //     auth:true,
      //     authorization:token
      //   }
      //   console.log("hello1",config);
      //   return config;
      // },err=>{
      //   return Promise.reject(err);
      // })

      //响应时的拦截器
      // this.$http.interceptors.response.use(res=>{
      //   const result={};
      //   result.data=res.data;
      //   result.status=res.status;
      //   result.msg=res.statusText;
      //   console.log("hello2",res);
      //   return result;
      // },err=>{
      //   return Promise.reject(err);
      // })
      // this.$http.get('/data.json').then(res=>{
      //   console.log("res---------------",res);
      // })

      //取消拦截器
      //this.$http.interceptors.request.eject(interceptors)

    //实例 登录之后获取token  在请求其他接口时添加token
    // let instance=this.$http.create({
    //   baseURL: "http://localhost:8080"
    // })
    // let _this=this;
    // instance.interceptors.request.use(config=>{
    //   config.headers.token="xxxxxx";
    //   _this.isShow=true;
    //   return config;
    // })
    // instance.interceptors.response.use(res=>{
    //   _this.isShow=false
    //   return res;
    // })
    // instance.get("/data.json").then(res=>{
    //   console.log(res,"res-----");
    // })


    //错误处理
    let instance = this.$http.create({});
    instance.interceptors.request.use(config=>{
      return config;
    },err=>{
      //请求错误处理 一般以4开头的，如：401 404...请求还没到达后端
      return Promise.reject(err);
    })
    instance.interceptors.response.use(res=>{
      return res;
    },
    err=>{
      //请求错误处理 一般以5开头的，如500 系统错误 502 系统重启... 请求已到达后端
      return Promise.reject(err);
    })
    instance.get('/data.json').then(res=>{
      console.log(res,"res");
    }).catch(err=>{
      console.log(err,"err");
    })
    }
  }
};
</script>
<style scoped lang="less">
</style>
