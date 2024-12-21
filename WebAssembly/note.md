“WebAssembly 是基于栈式虚拟机的虚拟二进制指令集（V-ISA），它被设计为高级编程语言的可移植编译目标”。

Wasm 的出现更能够让我们直接在 Web 平台上，使用那些业界已存在许久的众多优秀的 C/C++ 代码库。


HTML、CSS 以及 JavaScript 之外的第四种，W3C 官方推荐在 Web 平台上使用的“语言”

为什么会出现 Wasm 这样一门技术？


为什么会出现 Wasm 这样一门技术？

Wasm不是一种新的编程语言，而是一种字节码 类似于Java 的.class字节码


Wasm 浏览器加载流程：

- “Fetch” 阶段：二进制模块的加载过程，同我们日常开发的 Web 应用在浏览器中加载 JavaScript 脚本文件等静态资源的过程，没有任何区别。对于 Wasm 模块，你也可以选择将它放置到 CDN 中，或者经由 Service Worker 缓存，以加速资源的下载和后续使用过程

“Compile” 阶段：浏览器会将从远程位置获取到的 Wasm 模块二进制代码，编译为可执行的平台相关代码和数据结构。这些代码可以通过 “postMessage()” 方法，在各个 Worker 线程中进行分发，以让 Worker 线程来使用这些模块，进而防止主线程被阻塞。此时，浏览器引擎只是将 Wasm 的字节码编译为平台相关的代码，而这些代码还并没有开始执行。

“Instantiate” ：览器引擎开始执行在上一步中生成的代码。这一阶段完成后，我们便可以得到一个动态的、保存有状态信息的 Wasm 模块实例对象。

“Call”：直接通过上一阶段生成的动态 Wasm 模块对象，来调用从 Wasm 模块内导出的方法


Wasm Runtime： call阶段
浏览器在为 Wasm 模块对象分配线性内存时，会将这部分内存与 JavaScript 现有的内存区域进行隔离，并单独管理，你可以参考我下面给你画的这张图。在以往的 JavaScript Memory 中，我们可以存放 JavaScript 中的一些数据类型，这些数据同时也可以被相应的 JavaScript / Web API 直接访问。而当数据不再使用时，它们便会被 JavaScript 引擎的 GC 进行垃圾回收。WebAssembly Memory 则有所不同。这部分内存可以被 Wasm 模块内部诸如 “i32.load” 与 “i32.store” 等指令直接使用，而外部浏览器宿主中的 JavaScript / Web API 则无法直接进行访问。

局限性：
无法直接引用 DOM：
在 MVP（“Minimum Viable Product”） 标准下，我们无法直接在 Wasm 二进制模块内引用外部宿主环境中的“不透明”（即数据内部的实际结构和组成方式未知）数据类型，比如 DOM 元素。因此目前通常的一种间接实现方式是使用 JavaScript 函数来封装相应的 DOM 操作逻辑，然后将该函数作为导入对象，导入到模块中，由模块在特定时机再进行间接调用来使用。但相对来说，这种借助 JavaScript 的间接调用方式，在某种程度上还是会产生无法弥补的性能损耗
（虚拟机没有像JS一样访问浏览器功能的诸多接口如DOM, webgl, 定位，传感器，语音...）

复杂数据类型需要进行编解码
还是类似的问题，对于除“数字值”以外的“透明”数据类型（比如字符串、字符），当我们想要将它们传递到 Wasm 模块中进行使用时，需要首先对这些数据进行编码（比如 UTF-8）。然后再将编码后的结果以二进制数据的形式存放到 Wasm 的线性内存段中。模块内部指令在实际使用时，再将这些数据进行解码。


现状：凡是能够使用 Wasm 来实现的功能，现阶段都可以通过 JavaScript 来实现；而能够使用 JavaScript 来实现的功能，其中部分还无法直接通过 Wasm 实现（比如调用 Web API）。