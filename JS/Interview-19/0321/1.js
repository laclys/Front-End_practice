// 函数组合运行
// 说明：实现一个方法，可将多个函数方法按从左到右的方式组合运行。
// 如composeFunctions(fn1,fn2,fn3,fn4)等价于fn4(fn3(fn2(fn1))。 示例：
// const add = x => x + 1;
// const multiply = (x, y) => x * y;
// const multiplyAdd = composeFunctions(multiply, add);
// multiplyAdd(3, 4) // 返回 13


const composeFunctions = (...funcs) => {
  return funcs.reduce((a,b) => (...args) => b(a(...args)))
}

// 合并数组中相邻且重复的元素
// 说明：请实现一个函数 merge，传入一个数组，合并数组中【相邻且重复】的元素。
// 示例：
// merge([3,2,2,4,5,5,6,2,1]); // 输出[3,2,4,5,6,2,1]
// merge([3,2,3]); // 输出[3,2,3]
// merge([2,2,3]); // 输出[2,3]

const merge = (arr) => {
  return arr.filter((item, index, arr) => {
    return !index || item !== arr[index - 1]
  })
}

// 特定语法匹配替换
// 说明：匹配字符串中形如 =g文字文字= 的语法，并将相应部分转化为对应的标签文字文字
// 示例：
// transform('=g1.18 进入开发='); // <g>1.18 进入开发</g>
// transform('=g1.23 联调(-1)=，=g1.25 发布(+1)=')；// <g>1.23 联调(-1)</g>，<g>1.25 发布(+1)</g>
// transform('1.25 发布')； // 1.25 发布

const transform = (str) => str.replace(/=g([^=]*)=/g, `<g>$1</g>`)