module.exports ={
  promisify (fn) {
    return function () {
      var args = Array.from(arguments)
      return new Promise((resolve, reject) => {
        fn.apply(null, args.concat(function(err) {
          if (err){
            reject(err)
          } else {
            resolve(arguments[1])
          }
        }))
      })
    }
  }
}