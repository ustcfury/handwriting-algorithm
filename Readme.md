扫码登录:
https://blog.csdn.net/qingfengxd1/article/details/118880261

jwt登录原理：
https://blog.csdn.net/weixin_45070175/article/details/118559272

cors跨域原理：它会在请求的头信息中增加一个 Orign 字段,浏览器根据这个值判断是否同意请求。请求方法为DELETE或者PUT等。非简单请求的CORS请求会在正式通信之前进行一次HTTP查询请求，称为预检请求。

Symbol主要用于什么场景下:定义一些不可重名的方法防止覆盖，为对象定义一些非私有的、但又希望只用于内部的方法（Symbol作为键名，不会被常规方法遍历到，除非Object.getOwnPropertySymbols()）

tcp和http的keep-alive
Tcp：链接建立之后，如果应用程序或者上层协议一直不发送数据，或者隔很长时间才发送一次数据，当链接很久没有数据报文传输时如何去确定对方还在线，到底是掉线了还是确实没有数据传输，链接还需不需要保持，这种情况在TCP协议设计中是需要考虑到的。
http：复用TCP链接

堆内存和栈内存：栈内存中变量一般在它的当前执行环境结束就会被销毁被垃圾回收制回收， 而堆内存中的变量则不会，因为不确定其他的地方是不是还有一些对它的引用。
堆内存中的变量只有在所有对它的引用都结束的时候才会被回收。

监控和埋点：
https://blog.csdn.net/sinat_17775997/article/details/89414014?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-89414014-blog-114626915.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-89414014-blog-114626915.pc_relevant_default&utm_relevant_index=1

Object.prototype.toString.call的原理:获取this对象的[[Class]]属性的值.

react中key：简单的来说就是为了提高diff的同级比较的效率,避免原地复用带来的副作用

单网页应用：页面切换快，不利于seo，首屏渲染慢

es6新增：Let,const，解构赋值，模板字符串，箭头函数，rest参数，展开运算符，generator，promise，Set，Map，symbol，bigInt，include，async，正则表达式，import动态导入。

node事件循环
timer:setTimeout,setInterval,
I/O:close事件，定时器，setImmediate事件回调，
idle,prepare:内部实现，
poll:执行poll队列里的事件
check:setImmediate
closebacks:close事件

http1.1:
持久链接：复用TCP；
请求方法新增：put,head,option；
缓存：etag,
资源请求：范围请求206

http2.0:
二进制传输：数据采用二进制编码；
多路复用：解决队头堵塞；
header压缩：减少header大小；
服务端push：请求后主动发送其他资源；

Nginx 反向代理是一种常见的服务器架构设计模式，它可以将客户端的请求转发给不同的服务器进行处理，并将处理结果返回给客户端。在这种架构中，Nginx 作为反向代理服务器，它接收客户端的请求，并根据请求的内容将请求转发给不同的后端服务器，然后将后端服务器返回的结果返回给客户端。
反向代理的好处在于，它可以隐藏后端服务器的真实 IP 地址和域名，从而增加了服务器的安全性。此外，反向代理还可以实现负载均衡，将请求分发给多个后端服务器，从而提高服务器的性能和可靠性。

首页加载优化？
React路由懒加载 lazyLoad
React 异步组件
服务端渲染 SSR
如果使用了一些 UI 库，采用按需加载
使用CDN加速，将通用的库从 vendor 进行抽离
Nginx 的 gzip 压缩
Webpack 开启 gzip 压缩
如果首屏为登录页，可以做成多入口
Service Worker 缓存文件处理
使用 link 标签的 rel 属性设置 prefetch（这段资源将会在未来某个导航或者功能要用到，但是本资源的下载顺序权重比较低，prefetch通常用于加速下一次导航）、preload（preload将会把资源得下载顺序权重提高，使得关键数据提前下载好，优化页面打开速度

webpack 懒加载？
具体来说，当 Webpack 执行到包含 import() 函数的代码时，它会将该代码块单独打包成一个文件，并生成一个新的 chunk。这个 chunk 包含了需要动态加载的模块代码，以及一些额外的代码用于实现动态加载的逻辑。然后，Webpack 会将这个 chunk 文件输出到指定的目录中，并生成一个 JSON 文件用于描述该 chunk 的信息。
当需要动态加载模块时，浏览器会向服务器发送一个异步请求，请求该 chunk 文件。服务器返回该 chunk 文件后，浏览器会将该文件解析执行，并加载其中的模块代码。然后，浏览器会将执行结果返回给原始的代码块，从而实现懒加载的效果。

206 状态码？
HTTP 状态码 206 表示客户端发送了一个带有 Range 头部的 GET 请求，服务器成功地响应了这个请求，并返回了请求范围内的部分数据。206 状态码通常用于实现断点续传或分段下载等功能，可以在网络不稳定或带宽较低的情况下提高下载效率和用户体验。

Service Worker 有哪些作用？
缓存资源：Service Worker 可以将网页所需的资源缓存到本地，从而提高网页的访问速度和用户体验。当用户再次访问网页时，Service Worker 可以从本地缓存中加载资源，而不需要重新从网络上下载，从而减少网络流量和服务器负载。
拦截请求：Service Worker 可以拦截浏览器发出的请求，并根据需要进行处理，例如修改请求参数、替换资源、重定向请求等。这种功能可以用于实现网络优化、广告拦截、安全防护等场景。

JS 模块化？
前端模块化是指将一个大的 JavaScript 应用程序拆分成多个小模块，每个模块负责完成一个特定的功能。通过模块化的方式，可以提高代码的可维护性、可读性和可复用性，降低代码的耦合度，从而提高开发效率和代码质量。
在前端开发中，常见的模块化方案有 CommonJS、AMD、ES6 Module 等。其中，ES6 Module 是官方标准的模块化方案，已经被现代浏览器广泛支持，并且也可以通过 Babel 等工具转换成其他模块化方案的代码。
ES6 Module 使用 import 和 export 关键字来导入和导出模块。

webpack 中如何处理图片的？
file-loader：解决CSS等中引入图片的路径问题；(解决通过url,import/require()等引入图片的问题)
url-loader：当图片小于设置的limit参数值时，url-loader将图片进行base64编码(当项目中有很多图片，通过url-loader进行base64编码后会减少http请求数量，提高性能)，大于limit参数值，则使用file-loader拷贝图片并输出到编译目录中；

前后端如何验证一个用户是否下线了？
心跳检测：前端定时向后端发送请求，后端返回响应后，前端根据响应的时间戳判断用户是否在线。如果一段时间内没有收到响应，就认为用户已经下线。
WebSocket：使用 WebSocket 技术建立长连接，前后端可以实时通信，从而判断用户是否在线。如果一段时间内没有收到用户的消息，就认为用户已经下线。
Token 验证：前端在登录后获取到一个 Token，后端在验证请求时可以检查 Token 是否过期，从而判断用户是否在线。如果 Token 过期，就认为用户已经下线。

requestAnimationFrame 和 setTimeout 的区别？
requestAnimationFrame 是浏览器用于定时循环操作的一个接口，类似于 setTimeout，主要用途是按帧对网页进行重绘。对于 JS 动画，用 requestAnimationFrame 会比 setInterval 效果更好。

React Fiber 的 Virtual DOM Diff 算法相比旧版的算法，具有以下优点：
更加灵活：React Fiber 可以根据不同的场景选择不同的遍历策略，从而更好地支持异步渲染和优化性能。
更加高效：React Fiber 可以将渲染和更新过程分解成多个小任务，从而提高性能和用户体验。
更加可靠：React Fiber 可以在中断和恢复渲染过程中保存现场和恢复现场，从而提高可靠性和稳定性。

HTTP/2 是如何压缩头部的？
首先是在服务器和客户端之间建立哈希表，将用到的字段存放在这张表中，那么在传输的时候对于之前出现过的值，只需要把索引(比如0，1，2，...)传给对方即可，对方拿到索引查表就行了。这种传索引的方式，可以说让请求头字段得到极大程度的精简和复用。
其次是对于整数和字符串进行哈夫曼编码，哈夫曼编码的原理就是先将所有出现的字符建立一张索引表，然后让出现次数多的字符对应的索引尽可能短，传输的时候也是传输这样的索引序列，可以达到非常高的压缩率。

下面是一个简单的 Webpack 插件示例，它会在编译完成后输出一个文件：
const fs = require('fs');
class MyPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('MyPlugin', (stats) => {
      const outputPath = stats.compilation.outputOptions.path;
      const outputFilename = 'my-plugin-output.txt';
      const outputContent = 'Hello, MyPlugin!';

      fs.writeFileSync(`${outputPath}/${outputFilename}`, outputContent);
    });
  }
}
module.exports = MyPlugin;

什么是尾调用，使用尾调用有什么好处？
尾调用指的是函数的最后一步调用另一个函数。代码执行是基于执行栈的，所以当在一个函数里调用另一个函数
时，会保留当前的执行上下文，然后再新建另外一个执行上下文加入栈中。使用尾调用的话，因为已经是函数的
最后一步，所以这时可以不必再保留当前的执行上下文，从而节省了内存，这就是尾调用优化。但是 ES6 的尾调用优化只在严格模式下开启，正常模式是无效的。

use strict:
变量必须先声明再使用：在严格模式下，变量必须先声明再使用，否则会抛出 ReferenceError 错误。
函数必须声明在顶层：在严格模式下，函数必须声明在顶层，不能在非函数代码块中声明函数，否则会抛出 SyntaxError 错误。
禁止使用 eval 和 arguments：在严格模式下，禁止使用 eval 和 arguments，否则会抛出 SyntaxError 错误。
严格模式下的 this：在严格模式下，函数内部的 this 指向 undefined，而不是全局对象。

axios 的请求拦截器和相应拦截器
添加请求头：可以在请求拦截器中添加一些请求头，例如 token 等信息。
参数序列化：可以在请求拦截器中对请求参数进行序列化，例如将对象转换为 URL 查询字符串等。
统一处理错误：可以在响应拦截器中统一处理错误，例如处理 401、403 等未授权的错误。

setTimeout函数的执行时间间隔是不固定的，它会在指定的时间间隔后将回调函数添加到事件队列中，等待JavaScript引擎的空闲时间执行。而setInterval函数的执行时间间隔是固定的，它会每隔指定的时间间隔将回调函数添加到事件队列中，不受JavaScript引擎的空闲时间影响。
解决方案：
while 循环记录时间戳，webworker，requestAnimationFrame，

ajax:
基于原生 XHR 开发，架构不清晰；
针对 MVC 编程，不符合 MVVM；
fetch：
语法简洁；
基于 promise，api 丰富；
只会对网络请求报错，400，500不报错；默认不带 cookie
axios:
支持 promise api；可以取消请求，自动转换 json 数据，支持低于 CSRF 攻击

![](https://github.com/ustcfury/handwriting-algorithm/blob/master/img-storage/%E5%9B%BE%E7%89%871.png)

![](https://github.com/ustcfury/handwriting-algorithm/blob/master/img-storage/%E5%9B%BE%E7%89%872.png)

![](https://github.com/ustcfury/handwriting-algorithm/blob/master/img-storage/%E5%9B%BE%E7%89%873.png)

![](https://github.com/ustcfury/handwriting-algorithm/blob/master/img-storage/%E5%9B%BE%E7%89%874.png)

![](https://github.com/ustcfury/handwriting-algorithm/blob/master/img-storage/%E5%9B%BE%E7%89%875.png)

![](https://github.com/ustcfury/handwriting-algorithm/blob/master/img-storage/%E5%9B%BE%E7%89%876.png)