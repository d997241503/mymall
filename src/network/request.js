import axios from 'axios'

//用axios框架封装一个网络请求模块
export function request(config){
  //创建axios实例
  const instance = axios.create({
    baseURL:'http://152.136.185.210:8000/api/z8',
    timeout:5000
  })

  //请求拦截器
  instance.interceptors.request.use(config=>{
    return config
  },err=>{

  })
  //响应拦截器
  instance.interceptors.response.use(res=>{
    return res.data
  },err=>{

  })

  //发送网络请求，返回一个promise实例
  return instance(config)
}