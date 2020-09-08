# Snowpack

### Bundleless
2020年的前端开发，提到项目构建打包工具，第一个想到的就是`Webpack`。`Webpack`问世这几年，生态越来越好，层出不穷的Plusin和Loader，能力也越来越强大。但是`Webpack`有什么痛点呢
> 我们都是知道使用Webpack打包构建，会将各个资源打包整合在一起形成bundle,当资源越来越多时，打包的过程也将越来越慢。项目不停迭代，每次的打包构建要等待几十秒甚至几分钟。然后呢，启动一轮构建优化，随着项目的进一步增大，构建速度又会降低，陷入不断优化的循环。现在CRM基本就陷入了这样的循环。

当项目达到一定规模，基于bundle的构建优化收益越来越有限，无法实质提升。

这里就扯出`Bundleless`如果我们不需要bundle打包的过程，直接让浏览器去加载对应的资源，
我们将有可能可以跳出这个循环，实现质的提升。 这就是Bundleless诞生的初衷。

在开发时，我们不需要构建完整的bundle，去掉这一层。同时在修改文件时，浏览器也只需要重新加载单个文件即可。

好处：
1. 极快的本地启动速度
2. 极快的代码编译速度，每次只需要处理单个文件

多个文件并行，项目开发构建的时间复杂度始终为 O(1)

这里社区利用 Web 标准的 ESModule，的能力让浏览器自主加载需要的模块，从而更加低成本同时面向未来实现 Bundleless。诞生了`snowpack`和`vite`

### 什么是`Snowpack`
> Snowpack is a modern, lightweight toolchain for web application development. Traditional dev bundlers like webpack or Parcel need to rebuild & rebundle entire chunks of your application every time you save a single file. This introduces lag between changing a file and seeing those changes reflected in the browser, sometimes as slow as several seconds.

> We call this new approach O(1) Build Tooling.

  简而言之就是利用原生`ES Modules`(几乎所有现代浏览器都支持这个特性，~~当然除了IE~~, 支持IE11),无需打包工具（Webpack，Parcel）便能将代码结果实时展现在浏览器中的`No build step needed!`构建工具。还有一个宣传点就是`Snowpack`是一个时间复杂度`O(1)`的构建系统。像webpack这种打包工具是一个时间复杂度`O(n)`的过程，一个文件变更，你不止重新构建这一个文件，而是多个相关文件甚至整体一整块，要经历`build -> bundle recompilation`这个过程。`Snowpack`呢，则是分别构建每一个文件 。在开发过程中，更改了某个文件，只需要重建这一个文件`build(file) => result`单个文件单个缓存(换言之，如果你不变更xx文件，那就永远不用重构它)。加载页面也是，它只会请求当前所需的那些文件。开发环境只要一次`Snowpack`，修改源码能够实时反馈在浏览器上，可以获得更快的开发体验。


### Snowpack和Vite
(`snowpack1.0`和`vite` 一开始还是有些区别的，`snowpack`现在是2.0两者差异越来越小，看了一下基于ESM的热更新、样式文件支持、vue、jsx、ts支持(底层使用了esbuild))

生产环境Swonnpack采用parcel和webpack打包，vite采用rollup

PS:`esbuild`是一个很强大的 ES 解析器、代码生成器是用Go语言写的（Go语言的优势就是并行）作为 tsc 和 babel 的对标速度非常快,可以看官网对比图(现在的痛点不支持插件和HMR) （rust语言也有一个相应的产物swc）

@umijs/plugin-esbuild 插件用于提升 Umi 构建速度，仅使用了其压缩（minifier）功能

https://github.com/evanw/esbuild



### 支持
- 框架： `React`、`Preact`、`Vue`、`Svelte`、`Tailwind CSS`(`snowpack2.0` 已经内置了 JSX 和 Typescript 文件的处理)
- Tooling: `Babel`、`TypeScript`、`PostCSS`
- 官方提供模板：`Create Snowpack App`
- HMR
- Dev Request Proxy
- Environment Variables
- HTTPS/HTTP2(**HTTP2的多路复用、合并请求就能解决`Snowpack`多构建文件的问题**)

### Start
Snowpack官方提供了创建项目的模板，这里使用`@snowpack/app-template-react`
> npx create-snowpack-app demo --template @snowpack/app-template-react


### web_modules

可以看一下 其实就是帮你把`node_modules`,整理了一下放到了`web_modules`文件夹
`import-map.json`

### 问题
1. 不完全的`bundleless`： 开发环境业务代码直接`bundleless`。对`node_modules`做了一层bundle处理。生产环境打包提供两套技术`module/nomodule`.官方维护了两套打包插件（`@snowpack/plugin-webpack` / `@snowpack/plugin-parcel`为生产环节打包。也算是一种渐进式 但是需要承担**开发与生产环境构建结果不一致的风险**
2. 对`sass`、`less`处理不够友好，需要手动处理.

(怎么处理css的)
```javascript
// 这种语法目前浏览器是不支持的
import './style.css'
```
`snowpack`将`css`文件变成一个注入样式的`js模块`

3. 对`ESM`强依赖,随之带来了很多 `CommonJS` 的模块依赖引入问题，组件必须支持ESM。
比如antd

