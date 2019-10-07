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

混合类型
```javascript
interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  let counter = (function (start: number) { }) as Counter
  counter.interval = 123
  counter.reset = function () { }
  return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 5.0

```

接口继承类

当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 接口同样会继承到类的 private 和 protected 成员。 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。

当你有一个庞大的继承结构时这很有用，但要指出的是你的代码只在子类拥有特定属性时起作用。 这个子类除了继承至基类外与基类没有任何关系


#### 类
派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。 而且，在构造函数里访问 this 的属性之前 一定要调用 super()。

 在 TypeScript 里，成员都默认为 public

 protected 修饰符与 private 修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问。

 ```javascript
class Person {
  protected name: string
  constructor(name: string) { 
    this.name = name 
  }
}

class Employee extends Person {
  private department: string

  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }
  
  getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`
  }
}

let howard = new Employee('Howard', 'Sales')
console.log(howard.getElevatorPitch())
console.log(howard.name) // error

 ```

 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。


 readonly: 使用 readonly 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化


 #### func
- 重载：为了让编译器能够选择正确的检查类型，它与 JavaScript 里的处理流程相似。它查找重载列表，尝试使用第一个重载定义。 如果匹配的话就使用这个。因此，在定义重载的时候，一定要把最精确的定义放在最前面。

```javascript
let suits = ['hearts', 'spades', 'clubs', 'diamonds']

function pickCard(x: {suit: string; card: number }[]): number
function pickCard(x: number): {suit: string; card: number }

function pickCard(x): any {
  if (Array.isArray(x)) {
    let pickedCard = Math.floor(Math.random() * x.length)
    return pickedCard
  } else if (typeof x === 'number') {
    let pickedSuit = Math.floor(x / 13)
    return { suit: suits[pickedSuit], card: x % 13 }
  }
}

let myDeck = [
  { suit: 'diamonds', card: 2 },
  { suit: 'spades', card: 10 },
  { suit: 'hearts', card: 4 }
]
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit)

let pickedCard2 = pickCard(15)
console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit)
```

 #### 泛型
 - 我们需要一种方法使返回值的类型与传入参数的类型是相同的。这里，我们使用了类型变量，它是一种特殊的变量，只用于表示类型而不是值

- 泛型类型：
```javascript
function identity<T>(arg: T): T {
  return arg
}

let myIdentity: {<T>(arg: T): T} = identity

interface GenericIdentityFn {
  <T>(arg: T): T
}

function identity<T>(arg: T): T {
  return arg
}

let myIdentity: GenericIdentityFn = identity

// 我们甚至可以把泛型参数当作整个接口的一个参数。 这样我们就能清楚的知道使用的具体是哪个泛型类型（比如： Dictionary<string> 而不只是Dictionary）。这样接口里的其它成员也能知道这个参数的类型了。

interface GenericIdentityFn<T> {
  (arg: T): T
}

function identity<T>(arg: T): T {
  return arg
}

let myIdentity: GenericIdentityFn<number> = identity
```


#### 泛型约束
eg:
```javascript
interface Lengthwise {
  length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length) // OK
  return arg
}
```
- 在泛型约束中使用类型参数
```javascript
function getProperty<T, K extends keyof T> (obj: T, key: K ) {
  return obj[key]
}

let x = {a: 1, b: 2, c: 3, d: 4}

getProperty(x, 'a') // okay
getProperty(x, 'm') // error
```
