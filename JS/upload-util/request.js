/*
 * @Author: Lac 
 * @Date: 2019-03-10 20:42:54 
 * @Last Modified by: Lac
 * @Last Modified time: 2019-03-10 20:43:14
 */

function getError(option, xhr) {
  const msg = `cannot post ${option.action} ${xhr.status}'`
  const err = new Error(msg)
  err.status = xhr.status
  err.method = 'post'
  err.url = option.action
  return err
}

function getBody(xhr) {
  const text = xhr.responseText || xhr.response
  if (!text) {
    return text
  }

  try {
    return JSON.parse(text)
  } catch (e) {
    return text
  }
}

/**
 * option shape:
 * action: '/api/upload'
 * headers: {}
 * data: {}
 * file: file obj
 * fielname: 'file'
 * proxy: (action) => { return new action }
 * onProgress: (e) => {}
 * onSuccess: (res) => {}
 * onError: () => {}
 * withCredentials: true/false
 * 
 */
function request(option) {
  const xhr = new XMLHttpRequest()

  if (option.onProgress && xhr.upload) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100
      }
      option.onProgress(e)
    };
  }


  const formData = new FormData()

  if (option.data) {
    Object.keys(option.data).map((key) => {
      formData.append(key, option.data[key])
    })
  }

  formData.append(option.filename || 'file', option.file);

  xhr.onerror = function error(e) {
    option.onError(e);
  };

  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(option, xhr), getBody(xhr));
    }

    option.onSuccess(getBody(xhr), xhr)
  };

  let _action = option.proxy ? option.proxy(option.action) : option.action
  xhr.open('post', _action, true)

  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true
  }

  const headers = option.headers || {}

  if (headers['X-Requested-With'] !== null) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  }

  for (const h in headers) {
    if (headers.hasOwnProperty(h) && headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h])
    }
  }
  xhr.send(formData);

  return {
    abort() {
      xhr.abort()
    },
  }
}

export default request