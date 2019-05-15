## 代码规范
包括四部分：命名规范、html规范、css规范、js规范

### 命名规范
- 项目命名:
全部采用小写方式，以中划线分隔。
> 例：my-project-name

- 目录命名:
参照项目命名规则；有复数结构时，要采用复数命名法。
> 例：scripts, styles, images, data-models

- JS, JSX文件命名:
.js 文件参照项目命名规则; React 项目中 .jsx 和 .js 文件，采用驼峰命名规则。

- CSS, SCSS 文件命名:
参照项目命名规则。
> 例：retina-sprites.css, index.scss, colors.scss, mixin.scss

- HTML 文件命名:
> 例：index.html，error-report.html

### HTML

#### 语法
- 缩进使用2个空格；
- 嵌套的节点应该缩进；
- 在属性上，使用双引号，不要使用单引号；
- 自动闭合的标签，结尾处不使用斜线
- 不要忽略可选的关闭标签

#### HTML5 doctype
在页面开头使用这个简单地doctype来启用标准模式，使其在每个浏览器中尽可能一致的展现；

虽然doctype不区分大小写，但是按照惯例，doctype大写 （关于html属性，大写还是小写）。
```html
<!DOCTYPE html>
<html>
	...
</html>
```

#### lang属性

根据HTML5规范：

应在html标签上加上lang属性。这会给语音工具和翻译工具帮助，告诉它们应当怎么去发音和翻译。

更多关于 lang 属性的[说明在这里][1]；

在sitepoint上可以查到语言列表；

但sitepoint只是给出了语言的大类，例如中文只给出了zh，但是没有区分香港，台湾，大陆。而微软给出了一份更加详细的语言列表，其中细分了zh-cn, zh-hk, zh-tw。
```html
<!DOCTYPE html>
<html lang="en-us">
    ...
</html>

```
#### 字符编码
通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式，通常指定为'utf-8'。

#### 引入CSS, JS
根据HTML5规范, 通常在引入CSS和JS时不需要指明 type，因为 text/css 和 text/javascript 分别是他们的默认值。
- [使用link][2]；
- [使用style][3]；
- [使用script][4]；

```html
<!-- External CSS -->
<link rel="stylesheet" href="hello-world.css">

<!-- In-document CSS -->
<style>
  ...
</style>

<!-- External JS -->
<script src="hello-world.js"></script>

<!-- In-document JS -->
<script>
  ...
</script>

```

#### 属性顺序
- class
- id
- name
- data-*
- src, for, type, href, value , max-length, max, min, pattern
- placeholder, title, alt
- aria-*, role
- required, readonly, disabled

class是为高可复用组件设计的，所以应处在第一位；

id更加具体且应该尽量少使用，所以将它放在第二位。

#### 性能相关
- 减少标签数量:
如果不是为了编写额外的样式，需要尽量避免多余的节点嵌套；

- 避免在 HTML 重设`img`大小:
重设图片大小会引发图片的多次重绘，影响性能

- 避免 img 和 iframe 等的空 src
在 img或 iframe 的 src 属性是空字符串的时候，某些浏览器会认为这是一个缺省值，值的内容为当前网页的路径。浏览器会用当前路径进行再一次载入，并把其内容作为图像的二进制内容并试图显示，导致当前页面被二次加载。参考 “避免空链接属性”

```html
<!-- not good -->
<span class="avatar">
  <img src="" width="200">
</span>

<!-- good -->
<img class="avatar" src="hello.png">
```
### css规范

#### 缩进
使用 2 个空格。

#### 分号
每个属性声明末尾都要加分号。
```css
.element {
  width: 20px;
  height: 20px;
  background-color: red;
}

```

#### 空格

以下几种情况不需要空格：

- 属性名后
- 多个规则的分隔符 , 前
- !important 的 ! 后
- 属性值中 ( 后和 ) 前
- 行末不要有多余的空格

以下几种情况需要空格:

- 属性值前
- 选择器 >, +, ~ 前后
- { 前
- !important ! 前
- @else 前后
- 属性值中的 , 后

```css
/* not good */
.element {
  color :red! important;
  background-color: rgba( 0,0,0,.5 );
}

/* good */
.element {
  color: red !important;
  background-color: rgba(0, 0, 0, .5);
}

/* not good */
.element ,
.dialog{
  color: #c00;
}

/* good */
.element,
.dialog {
  color: #c00;
}

/* not good */
.element>.dialog{
  color: #c00;
}

/* good */
.element > .dialog {
  
}

/* not good */
.element{
  
}

/* good */
.element {
  color: #c00;
}

/* not good */
@if{
  color: #c00;
}@else{
  color: #c00;
}

/* good */
@if {
  color: #c00;
} @else {
  color: #c00;
}

```

#### 换行

以下几种情况不需要换行：

- { 前

以下几种情况需要换行：

- { 后和 } 前
- 每个属性独占一行
- 多个规则的分隔符 , 后

```css
/* not good */
.element
{color: red; background-color: black;}

/* good */
.element {
  color: red;
  background-color: black;
}

/* not good */
.element, .dialog {
  color: #c00;
}

/* good */
.element,
.dialog {
  color: #c00;
}

```

#### 注释
.css 用 /* ... */，.scss 用 // ...。具体参照右边的写法；缩进与下一行代码保持一致；与下一行代码之前没有空行。可位于一个代码行的末尾，与代码间隔一个空格。无用的注释要清理掉。

```css
/* Modal header */
.modal-header {
  color: #c00;
}

.modal-header {
  width: 50px;
  color: red; /* color red */
}

/*
 * CSS 中连续的多行注释
 * 这是第二行
 * 这是第三行
 */
.modal-header {
  width: 50px;
  color: red;
}

/* ================== */

// Modal header
.modal-header {
  color: #c00;
}

.modal-header {
  width: 50px;
  color: red; // color red
}

// SCSS 中连续的多行注释
// 这是第二行
// 这是第三行
.modal-header {
  width: 50px;
  color: red;
}

```

#### 引号
- 最外层统一使用单引号；
- url 的内容要加引号；
- 属性选择器中的属性值需要加引号。
- font 使用双引号

```css
.element:after {
  content: '<i class="icon"></i>';
  background-image: url('logo.png');
}

li[data-type='single'] {
  color: #c00;
  font: normal 13px "Helvetica Neue", sans-serif;
}

```

#### 命名

- class 和 id 统一使用小写字母，以中划线分隔
- scss 中的变量、函数、混合(mixin)、placeholder 同上，统一使用小写字母，以中划线分隔

```scss
/* class */
.element-content {
  color: #c00;
}

/* id */
#my-dialog {
  color: #c00;
}

/* 变量 */
$color-black: #000;

/* 函数 */
@function px-to-rem($px) {
  color: #c00;
}

/* 混合 */
@mixin center-block {
  color: #c00;
}

/* placeholder */
%my-dialog {
  color: #c00;
}

```

#### 属性声明顺序
相关的属性声明按右边的顺序做分组处理。

```css
.declaration-order {
  display: block;
  float: right;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100px;
  height: 100px;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  text-align: center;
  color: #333;
  background-color: #f5f5f5;
  opacity: 1;
}

```

```javascript
// 下面是推荐的属性顺序
[
  [
    "display",
    "visibility",
    "float",
    "clear",
    "overflow",
    "overflow-x",
    "overflow-y",
    "clip",
    "zoom",
    "content"
  ],
  [
    "table-layout",
    "empty-cells",
    "caption-side",
    "border-spacing",
    "border-collapse",
    "list-style",
    "list-style-position",
    "list-style-type",
    "list-style-image"
  ],
  [
    "-webkit-box-orient",
    "-webkit-box-direction",
    "-webkit-box-decoration-break",
    "-webkit-box-pack",
    "-webkit-box-align",
    "-webkit-box-flex",
    "flex"
  ],
  [
    "position",
    "top",
    "right",
    "bottom",
    "left",
    "z-index"
  ],
  [
    "-webkit-box-sizing",
    "-moz-box-sizing",
    "box-sizing",

    "width",
    "min-width",
    "max-width",
    "height",
    "min-height",
    "max-height",

    "margin",
    "margin-top",
    "margin-right",
    "margin-bottom",
    "margin-left",

    "padding",
    "padding-top",
    "padding-right",
    "padding-bottom",
    "padding-left",

    "border",
    "border-width",
    "border-style",
    "border-color",
    "border-top",
    "border-top-width",
    "border-top-style",
    "border-top-color",
    "border-right",
    "border-right-width",
    "border-right-style",
    "border-right-color",
    "border-bottom",
    "border-bottom-width",
    "border-bottom-style",
    "border-bottom-color",
    "border-left",
    "border-left-width",
    "border-left-style",
    "border-left-color",

    "-webkit-border-radius",
    "-moz-border-radius",
    "border-radius",
    "-webkit-border-top-left-radius",
    "-moz-border-radius-topleft",
    "border-top-left-radius",
    "-webkit-border-top-right-radius",
    "-moz-border-radius-topright",
    "border-top-right-radius",
    "-webkit-border-bottom-right-radius",
    "-moz-border-radius-bottomright",
    "border-bottom-right-radius",
    "-webkit-border-bottom-left-radius",
    "-moz-border-radius-bottomleft",
    "border-bottom-left-radius",

    "-webkit-border-image",
    "-moz-border-image",
    "-o-border-image",
    "border-image",
    "-webkit-border-image-source",
    "-moz-border-image-source",
    "-o-border-image-source",
    "border-image-source",
    "-webkit-border-image-slice",
    "-moz-border-image-slice",
    "-o-border-image-slice",
    "border-image-slice",
    "-webkit-border-image-width",
    "-moz-border-image-width",
    "-o-border-image-width",
    "border-image-width",
    "-webkit-border-image-outset",
    "-moz-border-image-outset",
    "-o-border-image-outset",
    "border-image-outset",
    "-webkit-border-image-repeat",
    "-moz-border-image-repeat",
    "-o-border-image-repeat",
    "border-image-repeat",
  ],
  [
    "font",
    "font-family",
    "font-size",
    "font-weight",
    "font-style",
    "font-variant",
    "font-size-adjust",
    "font-stretch",
    "font-effect",
    "font-emphasize",
    "font-emphasize-position",
    "font-emphasize-style",
    "font-smooth",

    "line-height",
    "text-align",
    "-webkit-text-align-last",
    "-moz-text-align-last",
    "-ms-text-align-last",
    "text-align-last",
    "vertical-align",
    "white-space",
    "text-decoration",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-style",
    "text-emphasis-position",
    "text-indent",
    "-ms-text-justify",
    "text-justify",
    "letter-spacing",
    "word-spacing",
    "-ms-writing-mode",
    "text-outline",
    "text-transform",
    "text-wrap",
    "-ms-text-overflow",
    "text-overflow",
    "text-overflow-ellipsis",
    "text-overflow-mode",
    "-ms-word-wrap",
    "word-wrap",
    "-ms-word-break",
    "word-break"
  ],
  [
    "color",
    "background",
    "background-color",
    "background-image",
    "background-repeat",
    "background-attachment",
    "background-position",
    "-ms-background-position-x",
    "background-position-x",
    "-ms-background-position-y",
    "background-position-y",
    "-webkit-background-clip",
    "-moz-background-clip",
    "background-clip",
    "background-origin",
    "-webkit-background-size",
    "-moz-background-size",
    "-o-background-size",
    "background-size"
  ],
  [
    "outline",
    "outline-width",
    "outline-style",
    "outline-color",
    "outline-offset",
    "opacity",
    
    "-webkit-box-shadow",
    "-moz-box-shadow",
    "box-shadow",

    "text-shadow"
  ],
  [
    "-webkit-transition",
    "-moz-transition",
    "-ms-transition",
    "-o-transition",
    "transition",
    "-webkit-transition-delay",
    "-moz-transition-delay",
    "-ms-transition-delay",
    "-o-transition-delay",
    "transition-delay",
    "-webkit-transition-timing-function",
    "-moz-transition-timing-function",
    "-ms-transition-timing-function",
    "-o-transition-timing-function",
    "transition-timing-function",
    "-webkit-transition-duration",
    "-moz-transition-duration",
    "-ms-transition-duration",
    "-o-transition-duration",
    "transition-duration",
    "-webkit-transition-property",
    "-moz-transition-property",
    "-ms-transition-property",
    "-o-transition-property",
    "transition-property",
    "-webkit-transform",
    "-moz-transform",
    "-ms-transform",
    "-o-transform",
    "transform",
    "-webkit-transform-origin",
    "-moz-transform-origin",
    "-ms-transform-origin",
    "-o-transform-origin",
    "transform-origin",
    "-webkit-animation",
    "-moz-animation",
    "-ms-animation",
    "-o-animation",
    "animation",
    "-webkit-animation-name",
    "-moz-animation-name",
    "-ms-animation-name",
    "-o-animation-name",
    "animation-name",
    "-webkit-animation-duration",
    "-moz-animation-duration",
    "-ms-animation-duration",
    "-o-animation-duration",
    "animation-duration",
    "-webkit-animation-play-state",
    "-moz-animation-play-state",
    "-ms-animation-play-state",
    "-o-animation-play-state",
    "animation-play-state",
    "-webkit-animation-timing-function",
    "-moz-animation-timing-function",
    "-ms-animation-timing-function",
    "-o-animation-timing-function",
    "animation-timing-function",
    "-webkit-animation-delay",
    "-moz-animation-delay",
    "-ms-animation-delay",
    "-o-animation-delay",
    "animation-delay",
    "-webkit-animation-iteration-count",
    "-moz-animation-iteration-count",
    "-ms-animation-iteration-count",
    "-o-animation-iteration-count",
    "animation-iteration-count",
    "-webkit-animation-direction",
    "-moz-animation-direction",
    "-ms-animation-direction",
    "-o-animation-direction",
    "animation-direction"
  ],
  [
    "quotes",
    "counter-reset",
    "counter-increment",
    "resize",
    "cursor",
    "-webkit-user-select",
    "-moz-user-select",
    "-ms-user-select",
    "user-select",
    "nav-index",
    "nav-up",
    "nav-right",
    "nav-down",
    "nav-left",
    "-moz-tab-size",
    "-o-tab-size",
    "tab-size",
    "-webkit-hyphens",
    "-moz-hyphens",
    "hyphens",
    "pointer-events"
  ]
]

```

#### 颜色

颜色 16 进制用小写字母；

颜色 16 进制尽量用简写。

```css
/* not good */
.element {
  color: #ABCDEF;
  background-color: #001122;
}

/* good */
.element {
  color: #abcdef;
  background-color: #012;
}

```

#### 属性简写

能简写的属性，推荐简写

常见的属性简写包括：

- font
- background
- transition
- animation


#### 媒体查询

尽量将媒体查询的规则靠近与他们相关的规则，不要将他们一起放到一个独立的样式文件中，或者丢在文档的最底部，这样做只会让大家以后更容易忘记他们。

```css
.element {
  color: #c00;
}

.element-avatar{
  color: #c00;
}

@media (min-width: 480px) {
  .element {
    color: #c00;
  }

  .element-avatar {
    color: #c00;
  }
}

```

#### scss相关

声明顺序：

- @extend
- @include
- 自身属性
- 嵌套规则
- @import 引入的文件不需要开头的 _和结尾的 .scss ；

嵌套最多不能超过 5 层；

`@extend` 中使用 `placeholder` 选择器；

不要忘记父级引用符号 & 。

-webkit- 等前缀在可以不用人工添加，改为使用编译工具自动添加。

```scss
/* not good */
@import "_dialog.scss";

/* good */
@import "dialog";

/* not good */
.fatal {
  .sub {
    color: #c00;
  }
  text-align: center;
  @include border-radius(2);
  @extend .error;
  .memu {
    color: #c00;
  }
}

/* good */
.fatal {
  @extend %error;
  @include border-radius(2);
  text-align: center;

  .sub {
    color: #c00;
  }

  .memu {
    color: #c00;
  }
}

/* not good */
.element {
  > .dialog {
    color: #c00;
  }
}

/*  good */
.element {
  & > .dialog {
    color: #c00;
  }
}

```

#### 杂项

不允许有空的规则；

元素选择器用小写字母；

去掉小数点前面的 0 ；

去掉数字中不必要的小数点和末尾的 0；

属性值 0 后面不要加单位；

同个属性不同前缀的写法不需要在垂直方向保持对齐，具体参照右边的写法；

无前缀的标准属性应该写在有前缀的属性后面；

不要在同个规则里出现重复的属性，除非是为了降级兼容；

不要在一个文件里出现两个相同的规则；

用 border: 0; 代替 border: none;；

选择器不要超过 4 层（在 scss 中如果超过 4 层应该考虑用嵌套的方式来写）；

尽量少用 * 选择器。

正确使用 display 的属性。 display 属性会影响页面的渲染，因此请合理使用。

- display: inline 后不应该再使用 width 、height 、margin 、padding 以及 float ；
- display: inline-block 后不应该再使用 float；
- display: block 后不应该再使用 vertical-align；
- display: table-* 后不应该再使用 margin 或者 float；t


### Javascript

#### 缩进

使用 2 个空格。

```javascript
if (x < y) {
  x += 10
} else {
  x += 1
}

function hello() {
  console.log('heiheihei')
}

```

### 分号
大部分情况下，都不需要加分号。

但有几种情况是必须加的

```javascript
/* var declaration */
var x = 1
let str = 'xx'
const isFemale = true

/* expression statement */
x++

/* do-while */
do {
  x++
} while (x < 10)

/* case 1 */
for (var i = Things.length - 1; i >= 0; i--) {
  Things[i]
}

/* case 2 */
var a = function () {
...
};
[1,2,3].forEach(...)

/* case 3 */
a = b;
(function(){
...
})()


```

相关讨论：[知乎][5]

### 空格

以下几种情况不需要空格：
- 对象的属性名后
- 前缀一元运算符后
- 后缀一元运算符前
- 函数调用括号前
- 无论是函数声明还是函数表达式， ( 前不要空格
- 数组的 [ 后和 ] 前
- 对象的 { 后和 } 前
- 运算符 ( 后和 ) 前

以下几种情况需要空格：

- 二元运算符前后
- 三元运算符 ? 和 : 前后
- 代码块 { 前
- 下列关键字前：else, while, catch, finally
- 下列关键字后：if, else, for, while, do, switch, case, try, catch, finally, with, return, typeof
- 单行注释 // 后（若单行注释和代码同行，则 //前也需要），多行注释 * 后
- 对象的属性值前
- for 循环，分号后留有一个空格，前置条件如果有多个，逗号后留一个空格
- 无论是函数声明还是函数表达式， { 前一定要有空格
- 函数的参数之间

```javascript
// not good
var a = {
  b :1
}

// good
var a = {
  b: 1
}

// not good
++ x
y ++
z = x?1:2

// good
++x
y++
z = x ? 1 : 2

// not good
var a = [ 1, 2 ]

// good
var a = [1, 2]

// not good
var a = ( 1+2 )*3

// good
var a = (1 + 2) * 3

// no space before '(', one space before '{' , one space between function parameters
var doSomething = function(a, b, c) {
  // do something
}

// no space before '('
doSomething(item)

// not good
for(i=0;i<6;i++){
  x++
}

// good
for (i = 0; i < 6; i++) {
  x++
}

```
#### 空行

以下几种情况需要空行：

- 变量声明后（当变量声明在代码块的最后一行时，则无需空行）
- 注释前（当注释在代码块的第一行时，则无需空行）
- 代码块后（在函数调用、数组、对象中则无需空行）
- 文件最后保留一个空行

```javascript
// need blank line after variable declaration
var x = 1

// not need blank line when variable declaration is last expression in the current block
if (x >= 1) {
  var y = x + 1
}

var a = 2

// need blank line before line comment
a++

function b() {
  // not need blank line when comment is first line of block
  return a
}

// need blank line after blocks
for (var i = 0; i < 2; i++) {
  if (true) {
    return false
  }

  continue
}

var newline = 'd[-_-]b'

// not need blank line when in argument list, array, object
var obj = {
  foo: function() {
    return 1
  },
  bar: function() {
    return 2
  }
}

func(
  2,
  function() {
    a++
  },
  3
)

var foo = [
  2,
  function() {
    a++
  },
  3
]


var foo = {
  a: 2,
  b: function() {
    a++
  },
  c: 3
}

```

#### 换行

换行的地方，行末必须有 , 或者运算符；

以下几种情况不需要换行：
- 下列关键字后：else, catch, finally
- 代码块 { 前

以下几种情况需要换行：
- 代码块 { 后和 } 前
- 变量赋值后

```javascript
// not good
var a = {
  b: 1
  , c: 2
};

x = y
  ? 1 : 2

// good
var a = {
  b: 1,
  c: 2
}

x = y ? 1 : 2
x = y ?
    1 : 2

// no need line break with 'else', 'catch', 'finally'
if (condition) {
  ...
} else {
  ...
}

try {
  ...
} catch (e) {
  ...
} finally {
  ...
}

// not good
function test()
{
  ...
}

// good
function test() {
  ...
}

// not good
var a, foo = 7, b,
    c, bar = 8

// good
var a
var foo = 7
var b
var c
var bar = 8
var d = e = 9
var f = g = h = 10

const NUMB = 23
let username = 'test-user'

```

#### 单行注释
- 双斜线后，必须跟一个空格；

- 缩进与下一行代码保持一致；

- 可位于一个代码行的末尾，与代码间隔一个空格

#### 多行注释
最少三行, '*'后跟一个空格，具体参照右边的写法；

建议在以下情况下使用：
- 难于理解的代码段
- 可能存在错误的代码段
- 浏览器特殊的HACK代码
- 业务逻辑强相关的代码

```javascript
/*
 * one space after '*'
 */
var x = 1


```

#### 引号

最外层统一使用单引号。

#### 变量命名

- 标准变量采用驼峰式命名；
- 'ID' 在变量名中全大写；
- 'URL' 在变量名中全大写；
- 'Android' 在变量名中大写第一个字母；
- 'iOS' 在变量名中只大写 OS；
- 'iPhone' 在变量名中只大写 P；
- 常量全大写，用下划线连接；
- 构造函数，大写第一个字母；
- jQuery 对象必须以 '$' 开头命名；

```javascript
var thisIsMyName

var goodID

var reportURL
var URLParser

var AndroidVersion
var isAndroidDevice

var iOSVersion
var isiOSDevice
var isiPhone

var MAX_COUNT = 10

function Person(name) {
  this.name = name
}

// not good
var body = $('body')

// good
var $body = $('body')

```

#### 变量声明

一个函数作用域中所有的变量声明尽量提到函数首部。

每个变量单独声明。

es6 环境下，常量定义用 const，非全局变量用 let。


#### 函数

无论是函数声明还是函数表达式，( 前不要空格，但 { 前一定要有空格；

函数调用括号前不需要空格；

立即执行函数外必须包一层括号；

不要给内联函数 (inline function) 命名；

参数之间用 , 分隔，注意逗号后有一个空格。

```javascript
// no space before '(', but one space before '{'
var doSomething = function(item) {
  // do something
}

function doSomething(item) {
  // do something
}

// not good
doSomething (item)

// good
doSomething(item)

// requires parentheses around immediately invoked function expressions
(function() {
  return 1
})()

// not good
[1, 2].forEach(function x() {
  ...
})

// good
[1, 2].forEach(function() {
  ...
})

// not good
var a = [1, 2, function a() {
  ...
}]

// good
var a = [1, 2, function() {
    ...
}]

// use ', ' between function parameters
var doSomething = function(a, b, c) {
  // do something
}


```

#### 数组、对象

对象属性名不需要加引号；

对象以缩进的形式书写，不要写在一行；

数组、对象最后不要有逗号。

```javascript
// not good
var a = {
  'b': 1
}

var a = {b: 1}

var a = {
  b: 1,
  c: 2,
}

// good
var a = {
  b: 1,
  c: 2
}

```

#### 括号
下列关键字后必须有大括号（即使代码块的内容只有一行）：if, else, for, while, do, switch, try, catch, finally, with。

```javascript
// not good
if (condition)
  doSomething()

// good
if (condition) {
  doSomething()
}

```

#### null

适用场景：
- 初始化一个将来可能被赋值为对象的变量
- 与已经初始化的变量做比较
- 作为一个参数为对象的函数的调用传参
- 作为一个返回对象的函数的返回值

不适用场景：
- 不要用 null 来判断函数调用时有无传参
- 不要与未初始化的变量做比较

```javascript
// not good
function test(a, b) {
  if (b === null) {
    // not mean b is not supply
    ...
  }
}

var a

if (a === null) {
  ...
}

// good
var a = null;

if (a === null) {
  ...
}

```

#### undefined

永远不要直接使用 undefined 进行变量判断；

使用typeof 和字符串 'undefined' 对变量进行判断。

```javascript
// not good
if (person === undefined) {
  ...
}

// good
if (typeof person === 'undefined') {
  ...
}

```

#### 代码校验相关

- 用 ===, !== 代替 == , != ；

- for-in 里一定要有 hasOwnProperty 的判断；

- 不要在内置对象的原型上添加方法，如 Array, Date；

- 不要在内层作用域的代码里声明了变量，之后却访问到了外层作用域的同名变量；

- 变量不要先使用后声明；

- 不要在一句代码中单单使用构造函数，记得将其赋值给某个变量；

- 不要在同个作用域下声明同名变量；

- 不要在一些不需要的地方加括号，例：delete(a.b) ；

- 不要声明了变量却不使用；

- 不要在应该做比较的地方做赋值；

- debugger 和 console 不要出现在提交的代码里；

- 数组中不要存在空元素；

- 不要在循环内部声明函数；

- 使用点号操作符来获取对象的属性，除非属性名称是变量；
(参考：http://eslint.cn/docs/rules/dot-notation)

```javascript
// not good
if (a == 1) {
  a++
}

// good
if (a === 1) {
  a++
}

// good
for (key in obj) {
  if (obj.hasOwnProperty(key)) {
    // be sure that obj[key] belongs to the object and was not inherited
    console.log(obj[key])
  }
}

// not good
Array.prototype.count = function(value) {
  return 4
}

// not good
var x = 1

function test() {
  if (true) {
    var x = 0
  }

  x += 1
}

// not good
function test() {
  console.log(x)

  var x = 1
}

// not good
new Person()

// good
var person = new Person()

// not good
delete(obj.attr)

// good
delete obj.attr

// not good
if (a = 10) {
  a++
}

// not good
var a = [1, , , 2, 3]

// not good
var nums = []

for (var i = 0; i < 10; i++) {
  (function(i) {
    nums[i] = function(j) {
      return i + j
    }
  }(i))
}

// not good
var x = foo['bar']

// good
var x = foo.bar
var x = foo[bar] // Property name is a variable, square-bracket notation required

```

#### 杂项

不要混用 tab 和 space；

不要在一处使用多个 tab 或 space；

对上下文this的引用只能使用 _this, that, self 其中一个来命名，优先使用 self；

行尾不要有空白字符；

不允许有空的代码块。

```javascript
// not good
var a   = 1

function Person() {
  // not good
  var me = this

  // good
  var _this = this

  // good
  var that = this

  // good
  var self = this
}

// not good with empty block
if (condition) {

}

```



  [1]: http://w3c.github.io/html/semantics.html#the-html-element
  [2]: https://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-link-element
  [3]: https://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-style-element
  [4]: https://www.w3.org/TR/2011/WD-html5-20110525/scripting-1.html#the-script-element
  [5]: https://www.zhihu.com/question/20298345