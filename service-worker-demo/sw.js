let cacheName = 'indexTestCache'

self.addEventListener('install', (event) => {
  //waitUntil接受一个Promise，直到这个promise被resolve，安装阶段才算结束
  console.log('===========install=========')
  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => cache.addAll(['/style/style-1.css', '/image/demo.png']))
  )
})

//监听activate事件，可以在这个事件里情况上个sw缓存的内容
self.addEventListener('activate', (event) => {
  console.log('===========activate=========')
})

//监听fetch事件，可以拦截所有请求并处理
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      //1. 如果请求的资源已被缓存，则直接返回
      if (res) {
        console.log('fetch--have cache')
        return res
      }
      //2. 没有，则发起请求并缓存结果
      let requestClone = event.request.clone()
      return fetch(requestClone).then((netRes) => {
        if (!netRes || netRes.status !== 200 || netRes.type !== 'basic') {
          return netRes
        }
        let responseClone = netRes.clone()
        caches
          .open(cacheName)
          .then((cache) => cache.put(event.request, responseClone))
        return netRes
      })
    })
  )
})
