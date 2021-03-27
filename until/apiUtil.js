import axios from 'axios'
import { Message } from 'element-ui'
// import mJs from '../assets/comm.js'

let generateApiMap = (map) => {
  let facade = {}
  for (let el in map) {
    facade[el] = toMethod(map[el]);
  }
  return facade
};
let toMethod = (options) => {
  options.method = options.method || 'post'
  return (params = {}, attachedParams, config = {}) => {
    return sendApiInstance(options.method, options.url, params, config, options.isType)
  }
}
// 创建axios实例
let createApiInstance = (config = {}) => {
  let basrurl = 'http://172.168.16.92:8088';
  window.basrurl = basrurl;
  let _config = {
    withCredentials: true, // 跨域
    baseURL: basrurl,
    headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
  }
  config = Object.assign(_config, config);
  return axios.create(config)
}
let sendApiInstance = (method, url, params, config = {}, isType = {}) => {
  if (!url) { return }
  console.log(url)
  let instance = createApiInstance(config);
  instance.interceptors.response.use(res => {
    //console.log(res)
    let { data } = res;
    ////console.log(data.code,data)
    if (data.code == 0) {
      if (isType.suktip) {
        Message({ message: '操作成功', type: 'success' });
      }
      return data;
    } else {
      Message({ message: data.message, type: 'error' });
    }
  }, error => {
    Message({ message: '服务器故障', type: 'warning' });
    return Promise.reject(error).catch(() => {
    })
  });
  //console.log(method)
  if (method === 'get') {
    //console.log('params:',params)
    // params = {
    //   params: params
    // }
    //console.log('params:',params)
  }
  return instance[method](url, params, config)
}


export default {
  generateApiMap
}
