### TS 高阶用法

#### 类的装饰器

- 装饰器本身是一个函数
- 类装饰器接收的参数是类的构造函数
- 装饰器还是实验性质的属性 需要在 tsconfig 打开 option

```json
    /* Experimental Options */
    "experimentalDecorators": true /* Enables experimental support for ES7 decorators. */,
    "emitDecoratorMetadata": true /* Enables experimental support for emitting type metadata for decorators. */,

```

```typescript
// 构造函数泛型：T extends new (...args: any[]) => any

// 用工厂模式返回装饰器函数，以函数调用的方式修饰class，达到给class装饰上可调用的属性&方法

function testDecorator() {
  return function <T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
      name = 'lee';
      getName() {
        return this.name;
      }
    };
  };
}

const Test = testDecorator()(
  class {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
);

const test = new Test('dell');
console.log(test.getName());
```
#### 方法的装饰器

```typescript
// 普通方法，target 对应的是类的 prototype
// 静态方法，target 对应的是类的构造函数

function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  descriptor.value = function() {
    return 'decorator';
  };
}

class Test {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @getNameDecorator
  getName() {
    return this.name;
  }
}

```