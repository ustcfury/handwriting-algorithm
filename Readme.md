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

![](https://github.com/ustcfury/handwriting-algorithm/blob/master/img-storage/%E5%9B%BE%E7%89%871.png)

![](https://github.com/ustcfury/handwriting-algorithm/blob/master/img-storage/%E5%9B%BE%E7%89%872.png)

![](https://github.com/ustcfury/handwriting-algorithm/blob/master/img-storage/%E5%9B%BE%E7%89%873.png)

![](https://github.com/ustcfury/handwriting-algorithm/blob/master/img-storage/%E5%9B%BE%E7%89%874.png)

![](https://github.com/ustcfury/handwriting-algorithm/blob/master/img-storage/%E5%9B%BE%E7%89%875.png)

![](https://github.com/ustcfury/handwriting-algorithm/blob/master/img-storage/%E5%9B%BE%E7%89%876.png)