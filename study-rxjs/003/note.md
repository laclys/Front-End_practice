### Tree-Shaking
- "摇🌲"

Tree-Shaking帮不上Rxjs什么忙。RXjs中任何一个操作符都挂在Observable类上或者Observable.prototype上的，赋值给Observable或者Observable.prototype上的某个属性在Tree-Shaking看来就是被引用。所以，所有操作符不管真实运行的时候是否被调用，都会被Tree Shaking认为是会用到的代码。


### Babel config
按照Babel官网的介绍，其实Preset和Stage-X都是归属到Plugin里面的，只不过所覆盖的范围不同而已。

举个例子，如果需要转换ES2015(ES6)的语法，那么你可以在.babelrc的plugins中按需引入check-es2015-constants、es2015-arrow-functions、es2015-block-scoped-functions等等几十个不同作用的plugin：

// .babelrc
```json
{
  "plugins": [
    "check-es2015-constants",
    "es2015-arrow-functions",
    "es2015-block-scoped-functions",
    // ...
  ]
}
```
但是Babel团队为了方便，将同属ES2015的几十个Transform Plugins集合到babel-preset-es2015一个Preset中，这样你只需要在.babelrc的presets加入es2015一个配置就可以完成全部ES2015语法的支持了：

// .babelrc
```json
{
  "presets": [
    "es2015"
  ]
}
```
另外，不论是Plugin还是Preset，有不少都有单独属于自己的配置项，具体如何操作的可以看一下官网的说明。

上面介绍了Plugin与Preset，那么Stage-X就很好理解了，stage-0、stage-1、stage-2、stage-3、stage-4分别对应的就是进入标准之前的5个阶段，不同stage-x之间存在依赖关系，数字越小，阶段越靠后，靠后阶段包含前面阶段所有的功能，简单理解就是stage-0包含stage-1/2/3的内容，所以如果你不知道需要哪个stage-x的话，直接引入stage-0就好了。

PS: `babel-preset-stage-4已经整合入Presets不单独发布了。`


plugins优先于presets进行编译；
plugins按照数组的index增序(从数组第一个到最后一个)进行编译；
presets按照数组的index倒序(从数组最后一个到第一个)进行编译，因为作者认为大部分会把presets写成["es2015", "stage-0"]，具体细节可以看这个。