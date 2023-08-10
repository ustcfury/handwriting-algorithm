扫码登录:
https://blog.csdn.net/qingfengxd1/article/details/118880261

jwt登录原理：
https://blog.csdn.net/weixin_45070175/article/details/118559272

cors跨域原理：它会在请求的头信息中增加一个Orign字段,浏览器根据这个值判断是否同意请求。请求方法为DELETE或者PUT等。非简单请求的CORS请求会在正式通信之前进行一次HTTP查询请求，称为预检请求。

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
使用CDN加速，将通用的库从 vendor 进行抽离
Nginx 的 gzip 压缩
React 异步组件
服务端渲染 SSR
如果使用了一些 UI 库，采用按需加载
Webpack 开启 gzip 压缩
如果首屏为登录页，可以做成多入口
Service Worker 缓存文件处理
使用 link 标签的 rel 属性设置 prefetch（这段资源将会在未来某个导航或者功能要用到，但是本资源的下载顺序权重比较低，prefetch通常用于加速下一次导航）、preload（preload将会把资源得下载顺序权重提高，使得关键数据提前下载好，优化页面打开速度

webpack 懒加载？
具体来说，当 Webpack 执行到包含 import() 函数的代码时，它会将该代码块单独打包成一个文件，并生成一个新的 chunk。这个 chunk 包含了需要动态加载的模块代码，以及一些额外的代码用于实现动态加载的逻辑。然后，Webpack 会将这个 chunk 文件输出到指定的目录中，并生成一个 JSON 文件用于描述该 chunk 的信息。
当需要动态加载模块时，浏览器会向服务器发送一个异步请求，请求该 chunk 文件。服务器返回该 chunk 文件后，浏览器会将该文件解析执行，并加载其中的模块代码。然后，浏览器会将执行结果返回给原始的代码块，从而实现懒加载的效果。

206 状态码？
HTTP 状态码 206 表示客户端发送了一个带有 Range 头部的 GET 请求，服务器成功地响应了这个请求，并返回了请求范围内的部分数据。206 状态码通常用于实现断点续传或分段下载等功能，可以在网络不稳定或带宽较低的情况下提高下载效率和用户体验。

Service Worker有哪些作用？
缓存资源：Service Worker 可以将网页所需的资源缓存到本地，从而提高网页的访问速度和用户体验。当用户再次访问网页时，Service Worker 可以从本地缓存中加载资源，而不需要重新从网络上下载，从而减少网络流量和服务器负载。
拦截请求：Service Worker 可以拦截浏览器发出的请求，并根据需要进行处理，例如修改请求参数、替换资源、重定向请求等。这种功能可以用于实现网络优化、广告拦截、安全防护等场景。
![](https://github.com/ustcfury/handwriting-algorithm/blob/master/img-storage/%E5%9B%BE%E7%89%871.png)

![](https://github.com/ustcfury/handwriting-algorithm/blob/master/img-storage/%E5%9B%BE%E7%89%872.png)

![](https://github.com/ustcfury/handwriting-algorithm/blob/master/img-storage/%E5%9B%BE%E7%89%873.png)

![](https://github.com/ustcfury/handwriting-algorithm/blob/master/img-storage/%E5%9B%BE%E7%89%874.png)

![](https://github.com/ustcfury/handwriting-algorithm/blob/master/img-storage/%E5%9B%BE%E7%89%875.png)

![](https://github.com/ustcfury/handwriting-algorithm/blob/master/img-storage/%E5%9B%BE%E7%89%876.png)