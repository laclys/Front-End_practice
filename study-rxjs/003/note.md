### Tree-Shaking
- "摇🌲"

Tree-Shaking帮不上Rxjs什么忙。RXjs中任何一个操作符都挂在Observable类上或者Observable.prototype上的，赋值给Observable或者Observable.prototype上的某个属性在Tree-Shaking看来就是被引用。所以，所有操作符不管真实运行的时候是否被调用，都会被Tree Shaking认为是会用到的代码。