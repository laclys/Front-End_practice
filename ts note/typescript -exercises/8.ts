function swap<T, K>(v1: T, v2: K) {
  return [v2, v1] as const //
}


/* TypeScript默认我们在中间的元素是可变的，所以它会“悲观的”放置我们可能会改变元素的顺序。鼠标放到运行函数时的swap上，我们可以修剪类型被替换为了：
function swap<Admin, User>(v1: Admin, v2: User): (Admin | User)[]
复制代码要改变这一行为，我们加上as const来声明它为常量，严格保证顺序。
 */