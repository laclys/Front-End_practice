- Tree-Shaking对Rxjs不起作用。这是由Rxjs架构决定的。Rxjs大部分功能都是围绕Observable这个类而创建的。这些函数都要挂在这个类上


最好按需导入模块。（用一个专用的文件导入Rxjs相关功能进行管理）


Rxjs：观察者模式：

1.如何产生事件，这是发布者的责任，在Rxjs中是Observable对象的工作
2.如何响应事件，这是观察者的责任，在Rxjs中是subscribe参数决定的
3.什么样的发布者关联什么样的观察者，也就是合适调用subscribe

Rxjs实现的是“推”迭代器，并不需要主动去从Observable中“拉数据”，而是只要subscribe上Observable对象之后，自然就能收到消息推送。~


这就是Rxjs观察者模式 + 迭代器模式 二者结合的强大~
