const fucArr = [
	next => {
		setTimeout(() => {
			console.log(1);
			next()
		}, 300)
	},
	next => {
		setTimeout(() => {
			console.log(2);
			next()
		}, 200)
	},
	next => {
		setTimeout(() => {
			console.log(3);
			next()
		}, 100)
	}
]
// // 实现一个run方法,使得run(fucArr)能顺序输出1、2、3.

// 1.递归
var run = arr => {
  if (arr.length === 0) return
  arr[0](() => run(arr.slice(1)))
}

// 2
var run2 = arr => {
	const trigger = () => {
		if (arr.length === 0) return
		arr.shift()()
	}
	arr = arr.map(val => {
		return () => val(trigger)
	})
	// trigger()
}