/**
 * 上传方法
 * config:
 * - proxy <func>: proxy action
 * - onProgress <func>: 上传过程中的回调
 * - onError <func>: 错误回调
 * - onSuccess <func>: 上传成功的回调
 * - action <string>: 上传地址
 * - withCredentials <bool>: 跨域设置
 * - data <object|func>: 随着 file 要上传什么
 */

import request from './request'

let DEFAULT_CONFIG = {
  file: null,
  filename: 'file',
  action: '',
  proxy: (action) => { return action },
  onError: (error) => { console.error(error) },
  onSuccess: (res) => { console.log(res) },
  onProgress: (file) => {},
  withCredentials: true,
  data: (file) => { return null }
}


export default (config) => {
  let _config = Object.assign({}, DEFAULT_CONFIG, config)
  let { file, filename, action, data, withCredentials,
        onProgress, onError, onSuccess } = _config
  
  if (!file) {
    console.error('没有传入 file')
    return false
  }

  if (!action) {
    console.error('没有指定上传的地址')
    return false
  }

  if (typeof(data) === 'function') {
    data = data(file)
  }

  let req = request({
    action,
    filename: filename,
    file,
    data,
    withCredentials,
    onProgress,
    onError,
    onSuccess
  })

  return req
}