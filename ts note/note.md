### TypeScript note

#### 基础类型
- JS的增强 添加可选择类型标注，提供不断发展的js特性

数组表示：
数据类型后 + [] or 数组泛型，Array<元素类型>

元组： 已知元素数量和类型的数组

void 类型像是与 any 类型相反，它表示没有任何类型。void 类型的变量没有什么大用，因为你只能为它赋予 undefined 和 null

never: 类型表示的是那些永不存在的值的类型。

never 类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是 never 的子类型或可以赋值给never 类型（除了 never 本身之外）。 即使 any 也不可以赋值给 never。

类型断言：

```typescript
let someValue: any = 'this is a string'

let strLength: number = (<string>someValue).length
// or
let strLength: number = (someValue as string).length
```
JSX 时，只有 as 语法断言是被允许的


#### 接口
TypeScript 的核心原则之一是对值所具有的结构进行类型检查。
鸭式辨型法


可选属性：的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。

只读属性： 属性名前用 readonly 来指定只读属性（TypeScript 具有 ReadonlyArray<T> 类型，它与 Array<T> 相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改）

函数接口类型：需要给接口定义一个调用签名。它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型

```typescript
interface SearchFunc {
  (source: string, subString: string): boolean
}
```

可索引的类型: 
```typescript
interface StringArray {
  [index: number]: string
}

let myArray: StringArray
myArray = ['Bob', 'Fred']

let myStr: string = myArray[0]
``` 