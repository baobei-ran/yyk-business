import request from './index'

if (process.env.NODE_ENV === 'production') {
   var baseURL = window.location.protocol + "//" + window.location.host;
 } else {
   // var baseURL = "http://test99.yunyikang.cn";
   var baseURL = 'https://oa.api.yunyikang.cn'
 }

class Product {
    post(url: string, params: any) {
       return request(url, 'post', params)
    }
    get(url: string, params: any) {
       return request(url, 'get', params)
    }
    baseURL: string = baseURL
}

export default Product