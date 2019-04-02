/*
 * @Author: Lac 
 * @Date: 2019-04-02 15:53:53 
 * @Last Modified by: Lac
 * @Last Modified time: 2019-04-02 15:54:29
 */

let timer = null
let startTime = ''
let endTime = ''
const label = document.querySelector('.label')
const deleteBtn = document.querySelector('.delete_btn')

label.addEventListener('touchstart', function () {
  startTime = +new Date()
  timer = setTimeout(function () {
    deleteBtn.style.display = 'block'
  }, 700)
})

label.addEventListener('touchend', function () {
  endTime = +new Date()
  clearTimeout(timer)
  if (endTime - startTime < 700) {
    // 处理点击事件
    label.classList.add('selected')
  }
})