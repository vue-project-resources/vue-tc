import axios from 'axios';
import qs from 'qs';

// const instance = axios.create({
//     baseURL: 'https://some-domain.com/api/',
//     timeout: 1000,
//     headers: {'token': 'foobar'}
// });
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log('request:---------');
    console.log(config);
    //config.headers.token = "12233erwwsgehjt"
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

axios.interceptors.response.use(function (config) {
    console.log('response:+++++++++')
    console.log(config);
    return config;
},function(error){
    return Promise.reject(error)
});

export class LoginAxios {
    static login (url) {
        return axios.post(url);
    }
    static RegAbc (url) {
        return axios.post(url);
    }
}