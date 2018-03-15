const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('start')
  }, 2000)
})

p1.then (result => {
  console.log(result)
})
.then (result => {
  console.log(result)
})