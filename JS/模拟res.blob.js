/*
 * @Author: Lac 
 * @Date: 2019-03-18 17:34:02 
 * @Last Modified by: Lac
 * @Last Modified time: 2019-03-18 17:34:25
 */
// 模拟 res.blob()
fetch('example.zip')
.then((res) => {
    // 获取读取器
    const reader = res.body.getReader()
    const type = res.headers.get('Content-Type')
    const data = []

    return new Promise((resolve) => {
        // 读取所有数据
        function push() {
            reader.read().then(({done, value}) => {
                data.push(value)
                if (done) {
                    // 包装成 blob 对象并返回
                    resolve(new Blob(data, { type }))
                } else {
                    push()
                }
            })
        }
        push()
    })
})
.then(blob => {
    const url = URL.createObjectURL(blob)

    let a = document.createElement('a')
    a.download = 'example.zip'
    a.href = url
    document.body.appendChild(a)
    a.click()
    a.remove()
})