import axios from 'axios'

axios.defaults.baseURL = 'http://t.zuul.xinchao.mobi/crm/api/';
axios.defaults.headers['content-type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.token = "eyJhbGciOiJIUzUxMiJ9.eyJjcmVhdGVkIjoxNTM2ODg3NzA1Njk3LCJleHAiOjE1Mzc0OTI1MDUsInVzZXJuYW1lIjoibGFuY2UifQ.PMkcgje5njB52Yf8ISQ8b4sik1IUcAG7sPP__jtt4r8oW0u1cBdOeolzr1oxsA9-nAT7UDYJjpzgX1wIClidsQ"

// 添加一个请求拦截器
/*axios.interceptors.request.use((config) => {

  if (localStorage.getItem("token")) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
    config.headers.token = localStorage.getItem("token");
  }
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});*/

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
})
export default axios;

