# 输入URL到展示的过程（网络篇续）
## 前言
> 上一篇大概说了输入URL到展示的过程中，在网络上进行的一些步骤，这一篇会说说一些相关联的内容以及浏览器的缓存作为补充。

## HTTP请求报文
HTTP请求报文由三部分构成：
* 请求行
* 请求头
* 请求体

```
＜request-line＞ //请求行

＜headers＞ //首部行

＜blank line＞ //空行

＜request-body＞ //请求体
```

```
GET /user/index.html HTTP/1.1      //请求行
Host: www.example.com
Content-Type: application/x-www-form-urlencoded
Connection: Keep-Alive
User-agent: Mozilla/5.0.      //以上是请求头
（此处必须有一空行）  //空行分割header和请求内容
name=world   //请求体
```

### 请求行
``GET /user/index.html HTTP/1.1``

基本由请求方法、URL、协议版本构成。

### 请求头
> 首部分为请求首部（请求头）响应首部（响应头），而且有些首部是两者都有的。

**通用首部**

|   首部字段名  |   说明    |
|   ---------  |   ----:   |
|   Cache-Control   |   控制缓存的行为  |
|   Connection   |   逐跳首部、连接的管理  |
|   Date   |   创建报文的日期时间  |
|   Program   |   报文指令 |
|   Trailer   |   报文末端的首部一览  |
|   Transfer-Encoding   |   指定报文主体的传输编码方式  |
|   Upgrade   |   升级为其他协议  |
|   Via   |   代理服务器的相关信息  |
|   Warning   |   错误通知  |

**请求首部**

|   首部字段名  |   说明    |   首部字段名  |   说明    |
|   ---------  |   ----    |   ---------  |   ----:   |
|   Accept   |   用户代理可处理的媒体类型  | If-Modified-Since | 比较资源的更新时间 |  
|   Accept-Charset  | 优先的字符集  | If-None-Match | 比较实体标记（与If-Match相反） |
|   Accept-Encoding | 优先的内容编码  | If-Range | 资源未更新时发送实体Byte的范围请求 |
|   Accept-Language | 优先的语言（自然语言） | If-Unmodified-Since | 比较资源的更新时间（与If-Modified-Since相反） |
|   Authorization   |   Web认证信息  | Max-Forwards | 最大传输逐跳数 |
|   Expect   |   期待服务器的特定行为  | Proxy-Authorization | 代理服务器要求客户端的认证信息 |
|   From   |   用户的电子邮箱地址  | Range | 实体的字节范围请求 |
|   Host   |   请求资源所在的服务器  | Referer | 对请求中的URI的原始获取方 |
|   If-Match   |   比较实体标记（ETag）  | TE | 传输编码的优先级 |
|   User-Agent | HTTP客户端程序的信息 |   Cookie  |   客户端暂存服务端的信息    |

### 请求体（实体）
使用POST等请求时，需要在request body中上传数据的部分

## HTTP响应报文
HTTP请求报文由三部分构成：
* 状态行
* 响应头
* 响应体

```
＜status-line＞   //状态行

＜headers＞   //响应头

＜blank line＞   //空行

＜response-body＞    //响应体
```

```
HTTP/1.1 200 OK //状态行
Server: Apache-Coyote/1.1
Content-Type: application/json
Transfer-Encoding: chunked
Date: ...   //以上是响应头

{}  //响应体
```

### 状态行
``HTTP/1.1 200 OK``

状态行也由三部分组成：服务器HTTP协议版本，响应状态码，状态码的文本描述。

### 响应头
**响应首部**

|   首部字段名  |   说明    |
|   ---------  |   ----:   |
|   Accept-Ranges   |   是否接受字节范围请求  |
|   Age   |   可以控制返回的资源是下载还是预览（图片）  |
|   Content-Disposition   |   创建报文的日期时间  |
|   ETag   |   资源的匹配信息 |
|   Location   |   令客户端重定向至指定URI  |
|   Proxy-Authenticate   |   代理服务器对客户端的认证信息  |
|   Retry-After   |   对再次发起请求的时机要求  |
|   Server   |   HTTP服务器的安装信息  |
|   Vary   |   代理服务器缓存的管理信息  |
|   WWW-Authenticate    |   服务器对客户端的认证信息    |

### 响应体
即服务器返回给客户端的数据

## HTTP状态码

|   状态码  |   类别 |  原因    |
|   -------  | --------  | -----:  |
|   1xx | Informational（信息性状态码） |   接受的请求正在处理  |
|   2xx | Success（成功状态码） |   请求正常处理完毕    |
|   3xx | Redirection（重定向状态码） | 需要进行附加操作以完成请求  |
|   4xx | Client Error（客户端错误状态码） |    服务器无法处理请求  |
|   5xx | Server Error（服务器错误状态码） |    服务器处理请求错误  |

在我们发送完HTTP请求后，服务器会响应请求，之后浏览器会对响应中的状态码进行分析判断，来确定请求是否成功，是否成功得到我们想要的信息。

这里只说下常见的几个状态码的情况。

### 2xx
* 200 OK，表示从客户端发来的请求在服务器端被正确处理
* 204 No content，表示请求成功，但响应报文不含实体的主体部分
* 205 Reset Content，表示请求成功，但响应报文不含实体的主体部分，但是与204响应不同于要求请求方重置内容
* 206 Partial Content，进行范围请求

### 3xx
> 好像都不怎么碰到，有接触后会来改改
* ``301 Moved Permanently``，301永久移动(或叫301重定向，301跳转)被请求的资源已永久移动到新位置，并且将来任何对此资源的引用都应该使用本响应返回的若干个URL之一。如果可能，拥有链接编辑功能的客户端应当自动把请求的地址修改为从服务器反馈回来的地址。除非额外指定，否则这个响应也是可缓存的。
* ``302 Found``，请求的资源现在临时从不同的URL响应请求。由于这样的重定向是临时的，客户端应当继续向原有地址发送以后的请求。只有在Cache-Control或Expires中进行了指定的情况下，这个响应才是可缓存的。
在POST请求方式上，客户端收到服务端的 302 状态码，那么不能自动的向新的 URI 发送重复请求，必须跟用户确认是否该重发，因为第二次 POST 时，环境可能已经发生变化（POST 方法不是幂等），POST 操作会不符合用户预期。但是很多浏览器（user agent）在这种情况下都会把 POST 请求变为GET请求。
如果客户端发出非 GET、HEAD请求后，收到服务端的 302 状态码，那么就不能自动的向新 URI 发送重复请求，除非得到用户的确认。但是，很多浏览器都把 302 当作 303 处理了（注意，303 是 HTTP1.1 才加进来的，其实从 HTTP1.0 进化到 HTTP1.1，浏览器什么都没动），它们获取到 HTTP 响应报文头部的 Location 字段信息，并发起一个 GET 请求。
* ``303 see other``，表示资源存在着另一个 URL，应使用 GET 方法丁香获取资源。
* ``304 not modified``，表示服务器允许访问资源，但因发生请求未满足条件的情况（在后面的浏览器的缓存里会说）。
* ``307 temporary redirect``，在 GET、HEAD 这些幂等的请求方式上，302、303、307 没啥区别，而对于 POST 就不同了，大部分浏览器 都会 302 会将 POST 请求转为 GET，而 303 是规范强制规定将 POST 转为 GET 请求，请求地址为 header 头中的 Location，307 则不一样，规范要求浏览器继续向 Location 的地址 POST 内容。而在 HSTS 中，307 可以被缓存，缓存时间根据 max-age 而定，一般建议缓存 1 年甚至更长。

### 4xx
* 400 bad request，请求报文存在语法错误
* 401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息
* 403 forbidden，表示对请求资源的访问被服务器拒绝
* 404 not found，表示在服务器上没有找到请求的资源

### 5xx
* 500 internal sever error，表示服务器端在执行请求时发生了错误
* 503 service unavailable，表明服务器暂时处于超负载或正在停机维护，无法处理请求

## 浏览器缓存

> 浏览器缓存，也就是客户端缓存，既是网页性能优化里面静态资源相关优化的一大利器。

浏览器缓存分为强缓存和协商缓存：
1. 浏览器在加载资源时，先根据这个资源的一些http header判断它是否命中强缓存，强缓存如果命中，浏览器直接从自己的缓存中读取资源，不会发请求到服务器。比如某个css文件，如果浏览器在加载它所在的网页时，这个css文件的缓存配置命中了强缓存，浏览器就直接从缓存中加载这个css，连请求都不会发送到网页所在服务器；
2. 当强缓存没有命中的时候，浏览器一定会发送一个请求到服务器，通过服务器端依据资源的另外一些http header验证这个资源是否命中协商缓存，如果协商缓存命中，服务器会将这个请求返回，但是不会返回这个资源的数据，而是告诉客户端可以直接从缓存中加载这个资源，于是浏览器就又会从自己的缓存中去加载这个资源；
3. 强缓存与协商缓存的共同点是：如果命中，都是从客户端缓存中加载资源，而不是从服务器加载资源数据；区别是：强缓存不发请求到服务器，协商缓存会发请求到服务器；
4. 当协商缓存也没有命中的时候，浏览器直接从服务器加载资源数据。

简单的说下强缓存和协商缓存吧。

### 强缓存

强缓存是利用Expires或者Cache-Control这两个http response header实现的，它们都用来表示资源在客户端缓存的有效期。

```
Expires: Thu, 31 Dec 2037 23:55:55 GMT
Cache-Control: max-age=315360000
```

**Expires**
1. 客户端接收到带有Expires的header时，会把这个资源连同所有的response header一起缓存下来（所以缓存命中的请求返回的header并不是来自服务器，而是来自之前缓存的header）；
2. 浏览器再请求这个资源时，先从缓存中寻找，找到这个资源后，拿出它的Expires跟当前的请求时间比较，如果请求时间在Expires指定的时间之前，就能命中缓存，否则就不行。
3. 如果缓存没有命中，浏览器直接从服务器加载资源时，Expires Header在重新加载的时候会被更新。

Expires受限于本地时间，如果修改了本地时间，可能会导致缓存失效。

**Cache-Control**
1. 浏览器在接收到这个资源后，会把这个资源连同所有response header一起缓存下来；
2. 浏览器再请求这个资源时，先从缓存中寻找，找到这个资源后，根据它第一次的请求时间和Cache-Control设定的有效期，计算出一个资源过期时间，再拿这个过期时间跟当前的请求时间比较，如果请求时间在过期时间之前，就能命中缓存，否则就不行。
3. 如果缓存没有命中，浏览器直接从服务器加载资源时，Cache-Control Header在重新加载的时候会被更新。

Cache-Control描述的是一个相对时间，在进行缓存命中的时候，都是利用客户端时间进行判断，所以相比较Expires，Cache-Control的缓存管理更有效，安全一些。

这两个header可以只启用一个，也可以同时启用，当response header中，Expires和Cache-Control同时存在时，Cache-Control优先级高于Expires。

### 协商缓存

当浏览器对某个资源的请求没有命中强缓存，就会发一个请求到服务器，验证协商缓存是否命中，如果协商缓存命中，请求响应返回的http状态为304并且会显示一个Not Modified的字符串。

协商缓存是利用的是``Last-Modified、If-Modified-Since``和``ETag、If-None-Match``这两对Header来管理的。

Last-Modified、If-Modified-Since的控制缓存的原理是：
1. 浏览器第一次跟服务器请求一个资源，服务器在返回这个资源的同时，在response的header加上Last-Modified的header，这个header表示这个资源在服务器上的最后修改时间；
```
//response headers
Last-Modified: Tues, 2 Apr 2019 13:22:17 GMT
...
```
2. 浏览器再次跟服务器请求这个资源时，在request的header上加上If-Modified-Since的header，这个header的值就是上一次请求时返回的Last-Modified的值：
```
//request headers
If-Modified-Since: Tues, 2 Apr 2019 13:22:17 GMT
...
```
3. 服务器再次收到资源请求时，根据浏览器传过来If-Modified-Since和资源在服务器上的最后修改时间判断资源是否有变化，如果没有变化则返回304 Not Modified，但是不会返回资源内容；如果有变化，就正常返回资源内容。当服务器返回304 Not Modified的响应时，response header中不会再添加Last-Modified的header，因为既然资源没有变化，那么Last-Modified也就不会改变，响应报文：
```
HTTP/1.1 304 Not Modified
Date: Tues, 2 Apr 2019 16:02:39 GMT
Server: Apache/1.3.41 (Unix)
ETag: “92c027-897-4bd59389″
```
4. 浏览器收到304的响应后，就会从缓存中加载资源。
5. 如果协商缓存没有命中，浏览器直接从服务器加载资源时，Last-Modified Header在重新加载的时候会被更新，下次请求时，If-Modified-Since会启用上次返回的Last-Modified值。

Last-Modified、If-Modified-Since都是根据服务器时间返回的header，一般来说，在没有调整服务器时间和篡改客户端缓存的情况下，这两个header配合起来管理协商缓存是非常可靠的，但是有时候也会服务器上资源其实有变化，但是最后修改时间却没有变化的情况，而这种问题又很不容易被定位出来，而当这种情况出现的时候，就会影响协商缓存的可靠性。所以就有了另外一对header来管理协商缓存，这对header就是ETag、If-None-Match。

1. 浏览器第一次跟服务器请求一个资源，服务器在返回这个资源的同时，在respone的header加上ETag的header，这个header是服务器根据当前请求的资源生成的一个唯一标识，这个唯一标识是一个字符串，只要资源有变化这个串就不同，跟最后修改时间没有关系，所以能很好的补充Last-Modified的问题；
```
//response headers
ETag: "17fd8-529a5fd20"
...
```
2. 浏览器再次跟服务器请求这个资源时，在request的header上加上If-None-Match的header，这个header的值就是上一次请求时返回的ETag的值：
```
//request headers
If-None-Match: "17fd8-529a5fd20"
...
```
3. 服务器再次收到资源请求时，根据浏览器传过来If-None-Match和然后再根据资源生成一个新的ETag，如果这两个值相同就说明资源没有变化，否则就是有变化；如果没有变化则返回304 Not Modified，但是不会返回资源内容；如果有变化，就正常返回资源内容。与Last-Modified不一样的是，当服务器返回304 Not Modified的响应时，由于ETag重新生成过，response header中还会把这个ETag返回，即使这个ETag跟之前的没有变化：
```
//response headers
ETag: "17fd8-529a5fd20"
...
```
4. 浏览器收到304的响应后，就会从缓存中加载资源。

[浏览器缓存知识小结及应用](http://www.cnblogs.com/lyzg/p/5125934.html)

## 分享

<img src="../../images/mst/mst2-1.jpg">

Marcel Fuentes  2018-12-25 12-18-42