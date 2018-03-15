if (!Function.prototype.bind) {
  Function.prototype.bind123 = function () {
    var self = this
    var context = [].shift.call(arguments)
    var agrs = [].slice.call(arguments)
    return function () {
      self.apply(context, [].concat.call(args, [].slice.call(arguments)))
    }
  }
}

// Es6中call可以解耦传参
const fn1 = function (a, b, c) {
  console.log(a, b, c)
}
const arr = [1, 2, 3]
fn1.call(null, ...arr)