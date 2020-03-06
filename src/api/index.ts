import Axios from "axios";
import Qs from "qs";
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
if (process.env.NODE_ENV === 'production') {
  var baseURL = window.location.protocol + "//" + window.location.host;
} else {
  var baseURL = "http://test99.yunyikang.cn";
  // var baseURL = 'https://oa.api.yunyikang.cn'
}
/* 防止重复提交，利用axios的cancelToken */

let pending: any[] = []; // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
const CancelToken: any = Axios.CancelToken;

const removePending: any = (config: any, f: any) => {
  // 获取请求的url
  const flagUrl = config.url;
  // 判断该请求是否在请求队列中
  if (pending.indexOf(flagUrl) !== -1) {
    // 如果在请求中，并存在f,f即axios提供的取消函数
    if (f) {
      f("取消重复请求"); // 执行取消操作
    } else {
      pending.splice(pending.indexOf(flagUrl), 1); // 把这条记录从数组中移除
    }
  } else {
    // 如果不存在在请求队列中，加入队列
    if (f) {
      pending.push(flagUrl);
    }
  }
};

let http = Axios.create({
  baseURL: baseURL,
  timeout: 100000, // 请求超时时间
});

http.interceptors.request.use(
  (config: any) => {
    // neverCancel 配置项，允许多个请求
    if (!config.neverCancel) {
      // 生成cancelToken
      config.cancelToken = new CancelToken((c: any) => {
        removePending(config, c);
      });
    }
    // 在这里可以统一修改请求头，例如 加入 用户 token 等操作
    //   if (store.getters.sessionId) {
    //     config.headers['X-SessionId'] = getSessionId(); // 让每个请求携带token--['X-Token']为自定义key
    //   }
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
)
http.interceptors.response.use(
  (response: any) => {
      // 移除队列中的该请求，注意这时候没有传第二个参数f
    removePending(response.config);
    pending.length = 0
      return response;
    },
    (error: any) => {
      // 异常处理
      console.log(error);
      pending = [];
      if (error.message === "取消重复请求") {
        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
);
  
function request(urls: string, methods: string, params: any) {
    return new Promise((resolve: any, reject: any) => {
        var datas:object = {
            url: urls,
            method: methods,
            data: methods === 'post' ? Qs.stringify(params) : null,
            params: methods === 'get' ? Qs.stringify(params) : null,
        }
        http(datas).then((res:any) => {
            // console.log(res)
            resolve(res.data)
        }).catch((err:any) => {
            reject(err)
        })
    })
}

export default request