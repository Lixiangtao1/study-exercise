-

  

# 构造函数在new一个实例的时候做了什么

1. 创建一个空对象，作为将要返回的对象实例
2. 将这个空对象的原型，指向构造函数的 prototype 属性
3. 将构造函数的this指向这个对象
4. 开始执行构造函数内部的代码

# 如何判断obj是否为数组

1.Array.isArray(obj)

2.判断obj.constructor.name是否为字符串“Array”

3.obj instanceof Array

4.Array.prototype.isPrototypeOf(obj)

# 同源策略

 所谓同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个 ip 地址，也非同源。同源策略/SOP（Same origin policy）是一种约定，由 Netscape 公司 1995 年引入浏览器，它是浏览器最核心也最基本的安全功能，现在所有支持 JavaScript 的浏览器都会使用这个策略。如果缺少了同源策略，浏览器很容易受到 XSS、 CSFR 等攻击。

同domain（或ip）,同端口，同协议视为同一个域，一个域内的脚本仅仅具有本域内的权限，可以理解为本域脚本只能读写本域内的资源，而无法访问其它域的资源。这种安全限制称为同源策略。 

# for in 与 for of区别

*for in遍历的是数组的索引（即键名），而 for of遍历的是数组元素值。* 

for in可以遍历对象，for of不可以

使用for in会遍历数组所有的可枚举属性，包括原型。 

for of专门针对具有 iterator(迭代器)（索引） 接口的对象

for..of适用遍历数/数组对象/字符串/map/set等拥有迭代器对象的集合.但是不能遍历对象,因为没有迭代器对象. 

使用for in会遍历数组所有的可枚举属性，包括原型。 

如果不想遍历对象的可枚举属性？

for in 可以遍历到myObject的原型方法method,如果不想遍历原型方法和属性的话，可以在循环内部判断一下,hasOwnPropery方法可以判断某属性是否是该对象的实例属性 

同样可以通过ES5的Object.keys(myObject)获取对象的实例属性组成的数组，不包括原型方法和属性 

# 什么是工厂模式，工厂模式与构造函数的区别

工厂模式是用来创建对象的一种最常用的设计模式。我们不暴露创建对象的具体逻辑，而是将逻辑封装在一个函数中，那么这个函数就可以被视为一个工厂。 

共同点:都是函数,都可以创建对象,都可以传入参数 
工厂模式:
函数名是小写，内部有new,
有返回值
new之后的对象是当前的对象 直接调用函数就可以创建对象 

自定义构造函数:
函数名首字母大写，没有new
没有返回值
this是当前的对象
通过new的方式来创建对象

# localStorage、sessionStorage与cookie的区别

cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。

sessionStorage：仅在当前浏览器窗口关闭前有效。

localStorage 始终有效，长期保存。



存储大小也不同，cookie数据不能超过4k，sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。



sessionStorage不在不同的浏览器窗口中共享；

localStorage在所有同源窗口中都是共享的；

cookie也是在所有同源窗口中都是共享的； 



| 特性         | cookie                                                       | sessionStorage                                               | localStorage                                                 |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 数据生命期   | 生成时就会被指定一个maxAge值，这就是cookie的生存周期，在这个周期内cookie有效，默认关闭浏览器失效 | 页面会话期间可用                                             | 除非数据被清除，否则一直存在                                 |
| 存放数据大小 | 4K左右（因为每次http请求都会携带cookie）                     | 一般5M或更大                                                 | 一般5M或更大                                                 |
| 与服务器通信 | 由对服务器的请求来传递，每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题 | 数据不是由每个服务器请求传递的，而是只有在请求时使用数据，不参与和服务器的通信 | 数据不是由每个服务器请求传递的，而是只有在请求时使用数据，不参与和服务器的通信 |
| 易用性       | cookie需要自己封装setCookie，getCookie                       | 可以用源生接口，也可再次封装来对Object和Array有更好的支持    | 可以用源生接口，也可再次封装来对Object和Array有更好的支持    |

# 宏任务微任务的区别

宏任务包括：script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering。
 微任务包括： Promises, Object.observe, MutationObserver

### 宏任务、微任务的执行顺序

- 先执行同步代码，
- 遇到异步宏任务则将异步宏任务放入宏任务队列中，
- 遇到异步微任务则将异步微任务放入微任务队列中，
- 当所有同步代码执行完毕后，再将异步微任务从队列中调入主线程执行，
- 微任务执行完毕后再将异步宏任务从队列中调入主线程执行，
- 一直循环直至所有任务执行完毕。

#防抖与节流

防抖：短时间内频繁触发某一事件不会一直执行事件回调函数，在延迟一段时间后才执行函数，在延迟时间内再触发事件，延迟时间重新计算 ，常用于搜索框

节流：短时间内频繁触发事件，会在间隔时间内执行一次函数

 # node.js是什么

node.js 是一个基于 Chrome V8 引擎的 JavaScirpt 运行环境。 

# express是什么

Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。 

# 说说你对路由的理解



# 网络中静态资源指的是什么

直接把相应文件发送到客户端的文件都是静态资源。 

**静态资源：**我的理解是前端的固定页面，这里面包含HTML、CSS、JS、图片等等，不需要查数据库也不需要程序处理，直接就能够显示的页面。 具体形式为：客户端发送请求到web服务器，web服务器拿到对应的文件，返回给客户端，客户端解析并渲染出来。 

**动态资源**：需要程序处理或者从数据库中读数据，能根据不同的条件在页面显示不同的数据，优点是内容更新不需要修改页面，缺点是访问速度不及静态页面。
具体形式为：客户端请求的动态资源，先把请求交给web的一个存储点，web存储点连接数据库，数据库处理数据之后，将数据交给web服务器，web服务器返回给客户端解析渲染处理。

**区别：**
1、静态资源一般都是设计好的html页面，而动态资源依靠设计好的程序来实现按照需求的动态响应或者从数据库中读数据；
2、静态资源的交互性差，不好更改，而动态资源可以根据需求获取内容；
3、在服务器的运行状态不同，静态资源不需要与数据库参于程序处理，动态资源需要一个或多个数据库的参与运算。

# 数据类型转换有几种？分别是在什么情况下？

隐式转换与显式转换

1.隐式转换：

​	任何数据类型与字符串型进行加法操作都是字符串的拼接

​	任何数据类型与字符串做除加法以外的操作，数字型字符串直接转为数字，非数字型字符串转为NaN

​	任何可以产生条件的地方都会转为布尔类型转换

2.显示转换

​	Number()  转为数字型

​	String()  转为字符串型（通吃）

​	toString() undefined和null不可转换

​	Boolean()



# num++与++num的区别？

num++  先取num值再进行++操作

++num  先进行++操作再取值

# 逻辑中断是怎么回事？

或运算：第一个表达式值为真时直接返回第一个表达式结果，第一个表达式结果为假时返回第二个表达式值

与运算：第一个表达式为假时直接返回第一个表达式结果，第一个表达式结果为真时返回第二个表达式值

# 全局变量与局部变量的区别？

全局变量：

​	位置：整个页面中

​	作用域：全局

​	生命周期：随着页面的关闭而销毁

局部变量：

​	位置：函数内部

​	作用域：函数内有效

​	生命周期：函数的调用结束而销毁



# 说说你对数组的理解

一组数据按一定顺序排列的集合，每个数据有唯一索引



# 数组的冒泡排序与去重是怎么回事？

冒泡排序：n个数比较n-1轮，每轮比较n-当前轮数，每轮找出一个最小数或者最大数

#### 利用for嵌套，splice()去重

```javascript

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] === arr[j]){
            arr.splice(j,1)
            j--
        }
    }
    return arr
}
```

#### 定义一个新数组,用indexOf()

```javascript
let newarr = []
for(let i=0;i<arr.length;i++){
    if(newarr.indexOf(arr[i])=== -1){
        newarr.push(arr[i])
    }
}
return newarr
```

#### 定义一个新数组，用includes()

```javascript
let newarr = []
for(let i=0;i<arr.length;i++){
    if(!newarr.includes(arr[i])){
        newarr.push(arr[i])
    }
}
return newarr
```

#### 利用filter()方法

```javascript
let res = arr.filter(function(item){
    return arr.indexOf(item,0) === index //当前元素第一次出现位置的索引等于当前索引
})
return res
```



# 如何求出一个数组中的最大值？你有几种方案？

math.Max()

排序

​                       

# 找出大字符串中出现小字符串的次数（至少3中解法） 

```javascript
//方法一
let b_str = "helloworldhellolifehelloyou"
let s_str = "hel"
let count =0
let index = 0
while(b_str.indexOf(s_str,index)!== -1){
    count++;
    index =b_str.indexOf(s_str,index)+ s_str.length
}
console.log(count);

//方法二
let b_str = "helloworldhellolifehelloyou"
let s_str = "hel"
let count =0
let index = b_str.length - 1
while(b_str.lastIndexOf(s_str,index)> 0){
    count++;
    index =b_str.lastIndexOf(s_str,index)-1
}

console.log(index);
console.log(count);

//方法三
// let b_str = "helloworldhellolifehelloyou"
// let s_str = "hel"
// var a = b_str.match(new RegExp(s_str,"g"))
//     if( a ){
//         console.log(a.length);
//     }else{
//         console.log( a );
//     }

//方法四
// let b_str = "helloworldhellolifehelloyou"
// var reg = /hel/g
// var count = 0
//     while( reg.exec(b_str) ){
//         count++
//     }
//     console.log( count );

//方法五
// let b_str = "helloworldhellolifehelloyou"
// let count = 0
// let reg = /hel/g
// while(reg.test(b_str)){
//     count++
// }
// console.log(count);


```

        # 找出字符串中出现次数最多的字符 

```javascript
let str = "aksjudafahbasujkdfbiusadhabfaaiuasduhifdsfsdfgdassadds"
let obj = {};
for(let i =0;i<str.length;i++){
    let key = str[i]
  if(obj[key]){
    obj[key]++;
  }else{
    obj[key] = 1
  }
}


```

   # 使用原型prototype完成对数组方法的实现 

```javascript
forEach2()
    // let arr = ["Hello","World","QF",10,20,30]
    
        // let fn = (item,index,array)=>{console.log( item,index,array );}
        // fn()
        // Array.prototype.forEach2 = function(fn){
        //     // 对象的方法中的this指向了调用者
        //     for( let i=0;i<this.length;i++ ){
        //         fn(this[i],i,this)
        //     }
        // }
        // arr.forEach2(function(item,index,array){
        //     console.log( item,index,array );
        // })
    // filter2()
    let arr = ["Hello","World","QF",10,20,30]
    Array.prototype.filter2=function(fn){
        let a=[]
        for(let i=0;i<this.length;i++){
           if( fn(i,this[i],this))
           a.push(this[i])
        }
        return a;
    }

       
    let a=   arr.filter2(function(index,item,arr){
           return typeof item === 'string'
       }) 
       console.log(a);
    // some2()
    // let arr = ["Hello","World","QF",10,20,30]
    Array.prototype.some2=function(fn){
       for(let i=0;i<this.length;i++){
           if(fn(i,this[i],this))
           return true
       }
       return false
    }
    
   let b= arr.some2(function(index,item,arr){
        return typeof item === 'string'
    })

    console.log(b);
    // every2()
    // let arr = ["Hello","World","QF",10,20,30]
    Array.prototype.every2 = function(fn){
        for(let i=0;i<this.length;i++){
            if(!fn(i,this[i],this)){
                return false;
            }
        }
        return true
    }

   let c = arr.every2(function(index,item,arr){
        return typeof item === 'string'
    })
    console.log(c);
    // map2()
    // let arr = ["Hello","World","QF",10,20,30]
    Array.prototype.map2=function(fn){
        let a=[]
        for(let i =0;i<this.length;i++){
           a.push( fn(i,this[i],this))
        }
        return a
    }


    let d = arr.map2(function(index,item,arr){
        return item+"o"
    })
    console.log(d);
```

​                                                                                                                                                                                                                                                                                           





# 说一下简单的实现一个取验证码的方案













# DOM中获取元素的方法有哪些？

document.querySelector()

document.querySelectorAll()

document.getElementById()

document.getElementsByTagsName()

documetn.getElementsByClassName()

document.getElementsByName()

 

# DOM中获取元素的属性有哪些？

document.getAttrabute()



# DOM中创建元素的方法有哪些？

1. document.write（“标签代码及内容”）；如果在页面加载完毕后创建元素.页面中的内容会被干掉
2. 父级对象.innerHTML=“标签代码及内容”；
3. document.createElement（“标签名字”）；得到的是一个对象，父级元素.appendChild（子级元素对象）

#什么是事件？  

JS就是为了实现一些动态的操作，而用户会有时候想去实现一些功能，如提交表单，鼠标点击等，就要在浏览器中触发这个事件，然后浏览器会感知（或者说捕获）到用户的这个行为，就会去响应处理这个事件。这个就称之为**事件。**  

#事件对象是什么？  

系统会在调用处理程序时，把**有关事件发生的一切信息**，封装成一个对象，作为**参数**，传送给**监听函数（事件处理程序）。**那么说这个对象，称之为**事件对象。** 



事件发生以后，会产生一个事件对象，作为参数传给监听函数，具体表现就是在回调函数中传入一个形参，形参名可以自己确定，这个形参的值是JS自己传入的。在这个事件对象中会包含这次事件的所有相关信息，包括是什么事件(鼠标/键盘)，事件的触发者，事件的目标等等。

# 一个完整的事件应该包括哪些部分？  

事件源、事件类型、事件处理程序



#事件代理如何实现？  

由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理（delegation）。

#事件代理的好处？  

**事件委托原理：**事件冒泡机制；

**优点：**

1、可以大量节省内存占用，减少事件注册。比如ul上代理所有li的click事件就很不错；

2、可以实现当新增子对象时，无需再对其进行事件绑定，对于动态内容部分尤为适合；

**缺点：**

事件代理的常用应用应该仅限于上述需求，如果把所有事件都用事件代理，可能会出现事件误判。即本不该被触发的事件被绑定上了事件；

#箭头函数作为事件回调函数需要注意什么?  

箭头函数没有它自己的this值，箭头函数内的this值继承自外围作用域。导致内部的this就是外层代码块的this。 

#正则(再看一遍)  

# ES6  

        数据解构
        对象解构
        Set()

#localStorage

## 	localStorage vs sessionStorage vs cookie

| 特性         | cookie                                                       | sessionStorage                                               | localStorage                                                 |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 数据生命期   | 生成时就会被指定一个maxAge值，这就是cookie的生存周期，在这个周期内cookie有效，默认关闭浏览器失效 | 页面会话期间可用                                             | 除非数据被清除，否则一直存在                                 |
| 存放数据大小 | 4K左右（因为每次http请求都会携带cookie）                     | 一般5M或更大                                                 | 一般5M或更大                                                 |
| 与服务器通信 | 由对服务器的请求来传递，每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题 | 数据不是由每个服务器请求传递的，而是只有在请求时使用数据，不参与和服务器的通信 | 数据不是由每个服务器请求传递的，而是只有在请求时使用数据，不参与和服务器的通信 |
| 易用性       | cookie需要自己封装setCookie，getCookie                       | 可以用源生接口，也可再次封装来对Object和Array有更好的支持    | 可以用源生接口，也可再次封装来对Object和Array有更好的支持    |

通信

ccokie：十种携带在同源的http请求中，即使不需要，故cookie在浏览器和服务器之间来回传递；如果使用cookie保存过多数据会造成性能问题

sessionStorage：仅在客户端（即浏览器）中保存，不参与和服务器的通信；不会自动把数据发送给服务器，仅在本地保存

localStorage：仅在客户端（即浏览器）中保存，不参与和服务器的通信；不会自动把数据发送给服务器，仅在本地保存

5）易用性

cookie：需要自己进行封装，原生的cookie接口不够友好

sessionStorage：原生接口可以接受，可以封装来对Object和Array有更好的支持

localStorage：原生接口可以接受，可以封装来对Object和Array有更好的支持

 

应用场景
cookie：判断用户是否登录过网站，以便实现下次自动登录或记住密码；保存事件信息等

sessionStorage：敏感账号一次性登录；单页面用的较多（sessionStorage 可以保证打开页面时 sessionStorage 的数据为空）

localStorage：常用于长期登录（判断用户是否已登录），适合长期保存在本地的数据

#ajax

        ## ajax是不是只能异步？

            不是 open方法第三个参数可以指定

       ## ajax如何中断请求？

            abort属性

##在什么场景下需要中断ajax请求？

            快速点击分页

        ## 如何才能知道该不该中断上一次请求

            xhr.readyState

#promise

Promise 是异步编程的一种解决方案：从语法上讲，promise是一个对象，从它可以获取异步操作的消息；从本意上讲，它是承诺，承诺它过一段时间会给你一个结果。promise有三种状态： **pending(等待态)，fulfiled(成功态)，rejected(失败态)**；状态一旦改变，就不会再变。创造promise实例后，它会立即执行。 

#jsonP

ajax 请求受同源策略影响，不允许进行跨域请求，而 script 标签 src 属性中的链接却可以访问跨域的js脚本，利用这个特性，服务端不再返回JSON格式的数据，而是返回一段调用某个函数的js代码，在src中进行了调用，这样实现了跨域。 

解决方案：

原理：

#原型？

**prototype:**

​    prototype属性，它是函数所独有的，它是从一个函数指向一个对象。它的含义是函数的原型对象，也就是这个函数（其实所有函数都可以作为构造函数）所创建的实例的原型对象; 这个属性是一个指针，指向一个对象，这个对象的用途就是包含所有实例共享的属性和方法（我们把这个对象叫做原型对象）;

**__proto__:**

​    __proto__ 是原型链查询中实际用到的，它总是指向 prototype，换句话说就是指向构造函数的原型对象，它是对象独有的。

​    1、__proto__ 是原型链查询中实际用到的，它总是指向 prototype；

​    2、prototype 是函数所独有的**，**在定义构造函数时自动创建，它总是被 __proto__ 所指。

所有对象都有__proto__属性，函数这个特殊对象除了具有__proto__属性，还有特有的原型属性prototype。prototype对象默认有两个属性，constructor属性和__proto__属性。prototype属性可以给函数和对象添加可共享（继承）的方法、属性，而__proto__是查找某函数或对象的原型链方式。constructor，这个属性包含了一个指针，指回原构造函数。

 

#原型链？

当访问一个对象的某个属性时，会先在这个对象本身属性上查找，如果没有找到，则会去它的`__proto__`隐式原型上查找，即它的构造函数的`prototype`，如果还没有找到就会再在构造函数的`prototype`的`__proto__`中查找，这样一层一层向上查找就会形成一个链式结构，我们称为`原型链`。 

#静态方法/实例方法

静态方法就是定义在 构造函数上的方法；实例方法就是定义在 构造函数原型（prototype）上的方法；

 

1、静态方法属于整个类所有，因此调用它不需要实例化，可以直接调用（类.静态方法（））。实例方法必须先实例化，创建一个对象，才能进行调用（对象.实例方法（））。

2、静态方法只能访问静态成员，不能访问实例成员；而实例方法可以访问静态成员和实例成员。 

3、在程序运行期间，静态方法是一直存放在内存中，因此调用速度快，但是却占用内存。实例方法是使用完成后由回收机制自动进行回收，下次再使用必须再实例化。 

4、一般来说，公共的函数、经常调用的可以写成静态方法，比如数据连接等（SqlHelper)。 

#继承的几种方式？

        1，原型式继承(js语言的默认继承方式)(能继承父类的原型上的方法和属性)
            父类的实例作为子类的原型
        2，构造函数式继承(不能继承父类的原型上的方法和属性)

​		call 、apply

        3，组合式继承
        4，class + extends   super()(能继承父类的原型上的方法和属性)
        5，拷贝式继承
            深 JSONStringify()/$.extend()
            浅 地址的赋值操作

#如何判断一个对象是否为数组，你有几种方案

Array.isArray(obj)  obj.instance of Array  objprototype.constructor.name

#instanceof可以判断一个对象的类型，有什么缺点？

typeof 可以准确的判断除object以外的基础数据类型，但不能区分object类型的具体类型， 

instanceof 用来判断 A 是否为 B 的实例对象，表达式为：A instanceof B，如果A是B的实例，则返回true,否则返回false。instanceof检测的是原型,最终指向null

instanceof能够正确判断[] 是Array的实例对象，但不能辨别 [] 不是Object的实例对象，  



#设计模式

#JQ面试题（掘金）

#link与import引入资源的区别

**1.从属关系区别**
`@import`是 CSS 提供的语法规则，只有导入样式表的作用；`link`是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。

**2.加载顺序区别**
加载页面时，`link`标签引入的 CSS 被同时加载；`@import`引入的 CSS 将在页面加载完毕后被加载。

**3.兼容性区别**
`@import`是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；`link`标签作为 HTML 元素，不存在兼容性问题。

**4.DOM可控性区别**
可以通过 JS 操作 DOM ，插入`link`标签来改变样式；由于 DOM 方法是基于文档的，无法使用`@import`的方式插入样式。

**5.权重区别(该项有争议，下文将详解)**
`link`引入的样式权重大于`@import`引入的样式。

#构造函数、原型和实例的关系：

每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。

# jQuery.fn的init方法返回的this指的是什么对象？为什么要返回this？

返回的this指的就是当前操作后的jquery对象，是为了实现jquery的链式操作

# 对文件和网站优化的方式

防抖和节流，文档碎片，文件合并，压缩代码，减少dom节点，cdn托管资源，事件代理

# 如何判断一个obj是否是一个对象



遍历。判断是否有元素存在





# typeof可以返回的数据类型

ypeof 可以返回的类型为：number、string、boolean、undefined、object、function

# 什么是闭包？闭包的缺点

闭包是指有权访问另外一个函数作用域中的变量的函数。可以理解为(能够读取另一个函数作用域的变量的函数) 

闭包的缺点与解决办法
1，由于闭包会是的函数中的变量都被保存到内存中,滥用闭包很容易造成内存消耗过大,导致网页性能问题
解决方法：
	1.能不用闭包就不用
	2.在退出函数之前，将不使用的局部变量全部删除，可以使变量赋值为null
	3.由于jQuery考虑到了内存泄漏的潜在危害，所以它会手动释放自己指定的所有事件处理程序。只要坚持使用jQuery的事件绑定方法，
	就可以一定程度上避免这种特定的常见原因导致的内存泄漏。

# 闭包造成的函数泄露如何解决

及时销毁变量

# 函数柯里化

把接受多个参数的函数变换成接受一个单一参数(译注：最初函数的第一个参数)的函数，如果其他的参数是必要的，返回接受余下的参数且返回结果的新函数。 

柯里化就是预先将某些参数传入，得到一个简单的函数。但是预先传入的参数被保存在闭包中，因此会有一些奇特的特性。 

```javascript
var adder = function(num) {
    return function(y) {
    return num + y;
    }
}
```



**柯理化函数思想：**一个js预先处理的思想；利用函数执行可以形成一个不销毁的作用域的原理，把需要预先处理的内容都储存在这个不销毁的作用域中，并且返回一个小函数，以后我们执行的都是小函数，在小函数中把之前预先存储的值进行相关的操作处理即可； 

1. 参数复用

2. 提前确认
3. 延迟运行

# 



# 什么是实例，什么是构造函数？

1. **构造函数是对一个实例的一个描述**
2. **构造函数 ，是一种特殊的方法。主要用来在创建对象时初始化对象， 即为对象成员变量赋初始值，总与new运算符一起使用在创建对象的语句中。特别的一个类可以有多个构造函数，可根据其参数个数的不同或参数类型的不同来区分它们 即构造函数的重载。**





#bind,apply,call的共同和不同点：

三者都可以用来改变this的指向
三者第一个参数都是this要指向的对象，也就是想指定的上下文，上下文就是指调用函数的那个对象。（点前的那个对象，没有就是全局window）
三者都可以传参，但是apply是数组，而call是有顺序的传入
bind 是返回对应函数，便于稍后调用；apply 、call 则是立即执行

bind方法
bind()方法会创建一个新函数,称为绑定函数.当调用这个绑定函数时,绑定函数会以创建它时传入 bind()方法的第一个参数作为 this,传入 bind()方法的
第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数.

#Vue和jquery的区别

​	概念上：vue：前端js库，是一个精简的MVVM，它专注于MVVM模型的viewModel层，通过双向数据绑定把view和model层连接起来，通过对数          据的操作就可以完成对页面视图的渲染。jquery：轻量级的js库

	在操作思想上
		vue是使用数据驱动的方式，通过vue对象将数据和view完全分离开，对数据操作，不在引用相应的DOM对象，通过vue对象，将数据和相应的DOM对象
		相互绑定起来；主要是操作数据 基于一种MVVM模式，
	
		jQuery是使用选择器（$）选取DOM对象，并对其进行赋值、取值、事件绑定等操作；主要是操作DOM
	
	应用场景的区别
	
		vue适用的场景：复杂数据操作的后台页面，表单填写页面

  		 jquery适用的场景：比如说一些html5的动画页面，一些需要js来操作页面样式的页面
		
	vue侧重数据绑定，jquery侧重样式操作，动画效果等

什么是MVVM
	M => Model(数据模型)
	V => View(视图模型,负责将数据模型转化成UI展现出来，就是那些DOM结构)
	VM => ViewModel(一个同步View和Model的对象)



# **清除浮动的方法**

.clear::after{content: "";display: block;clear: both{清除左右两侧浮动};height: 0;overflow: hidden;{溢出隐藏}visibility: hidden;{可见性为隐藏}}

 

#Socket

Socket是对TCP/IP协议的封装，Socket本身 并不是协议。而是一个调用接口(API) ,通过Socket,我们才能使用TCP/IP协议。

# Http连接: 



http连接就是所谓的短连接，及客户端向服务器发送一次请求， 服务器端相应后链接即会断开

socket连接: socket连接 及时所谓的长连接，理论上客户端和服务器建立连接。 则不会主动断开;但是由于各种环境因素可能会是连接断开，比如说:服务器端 或者客户端主机down了。网络故障。或者两者之间长时间没有数据传翰。网络防火墙可能会断开该链接已释放网络资源。所以当一个socket连接中没有数据的传输，那么为了位置连续的连接需要发送心跳消息,具体心跳消息格式是开发者自己定义的。

1.HTTP的长连接一般就只能坚持一分钟而已， 而且是浏览器决定的，你的页面很难控制这个行为。

Socket链接就可以维持很久，几天、数月都有可能，只要网络不斷，程序不结束，而且是可以编程灵活控制的。

2HTTP连接是建立在Socker链接之上。在实际的网络栈中，Socket链接的确是HTTP链接的一部分但是从HTTP协议看，它的连接一般是指它本身的那部分。

 

# 组件之间的通信

#### 父传子

在父组件的模板作用域里面,给子组件的 组件标签绑定一个属性 :fa = "msg"

再在 子组件里面 定义一个props:[ "fa"]来接收父组件传过来的值

 

#### 子传父

1.子传父需要在子组件的模板里面定义一个方法,调用该方法之后,通过 this.$emit("sendmsg","需要传递的参数")

2.在父组件的模板里面 找到子组件的标签 绑定一个事件名字就是 在$emit里面自定义的那个名字

3.@sendmsg = "父组件里面定义的一个方法"

4.定义的方法不要用驼峰命名法 不然不生效*

#  **继承的几种方式？**

## **1，原型式继承(js语言的默认继承方式)**

​            		父类的实例作为子类的原型

## **2，构造函数式继承**

​		构造函数式继承主要是利用了call()和apply()两个方法

​		apply():调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.apply(A, arguments);即A对象应用B对象的方法。

​		call():调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.call(A, args1,args2);即A对象调用B对象的方法。

l 	二者都是Function对象的方法, 每个函数都能调用

l 二者的第一个参数都是你要指定的执行上下文

l apply 和 call 的区别是: call 方法接受的是若干个参数列表，而 apply 接收的是一个包含多个参数的数组。

 

## **3，ES6继承**

​		ES6的继承更加简单 想要子类继承父类 那么就要有extends(继承)关键字

​		如果要实现子类继承父类，那么就必须在子类的构造器调用父类的构造器怎么调用？

​		使用super函数就可以了 

​		constructor(name,age){}

## **4，组合式继承**

​		就是构造函数式继承跟原型继承组合起来

## **5，拷贝式继承**

​		浅拷贝：直接赋值拷贝。

​			浅拷贝的坏处在于对B的操作会同步到A身上

​		深拷贝：将A对象的属性全部复制到B对象上。

​			深拷贝 的好处在于对B的操作不会影响到A

​                 4.6，class + extends   super()

 

 

#页面的优化方案?

减少网络请求

减少DOM节点

图片懒加载

事件代理

window. onload和domcontentloaded(优化)

防抖节流

文档碎片的用法

domcontentloaded

当初始的HTML文档被完全加载和解析完成之后, DOMContentLoaded事件被触发,而

无需等待样式表、图像和子框架的完成加载。

onload

onload通常用于<body>元素,在页面完全载入后(包括图片、css文件等) 。执行脚本

代码。

#同源策略与跨域

同源策略是Javascript重要的安全度量标准。它最早出自Netscape Navigator2.0，其目的是防止某个文档或脚本从多个不同源装载。所谓的同源就是同协议，同主机名，同端口号。
它的精髓很简单：它认为自任何站点装载的信赖内容是不安全的。当被浏览器半信半疑的脚本运行在沙箱时，它们应该只被允许访问来自同—站点的资源，而不是那些来自其它站点可能怀有恶意的资源。
跨域的场景:1、域名不同 2、二级域名相同，子域名不同 3、端口不同，协议不同
跨域解决方案:
1、通过jsonp跨域
2、跨域资源共享（CORS）
3、nodejs中间件代理跨域
4、nginx反向代理中设置proxy_cookie_domain
4.Jsonp
script.src 不受同源策略的限制，所以可以动态的创建script标签，将要请求数据的域写在src 中参数中附带回调的方法，服务器端返回回调函数的字符串，并带参数。

# 单双飞翼

单飞翼布局
<article>固定宽度</article> // width : 300px
  <aside>宽度自适应</aside> // width: cal(100% - 300px) margin-left = 300px
双飞翼布局
<div id="left">左</div> // width : 200px  float: left
  <div id="right">右</div> // overflow : hidden
  <div id="center">中</div> // width : 200px  float: right



# vue中数据传输，子传父 ，父传子的原理

父传子:
1、把父组件的数据以动态属性的方式当在子组件的行间属性上；
2、在子组件中用props这个属性接收，（对象、数组）
3、在子组件中使用动态的属性名保持一致；
子传父:
1、在vue的实例methods中写方法
2、在子组件标签的行间属性中订阅自定义方法@自定义事件=“方法名”
3、在子组件的方法中通过$emit来发布自定义事件
4、在子组件的template中绑定事件(比如click)

# document.querySelector() 与document.getElementById()获取元素的区别



getElementById()获取动态集合：通过函数获取元素之后，元素之后的改变还是会动态添加到已经获取的这个元素中。换句话说，通过这个方法获取到元素存储到变量的时候，以后每一次在Javascript函数中使用这个变量的时候都会再去访问一下这个变量对应的html元素。
querySelector()获取静态集合：通过函数获取元素之后，元素之后的改变并不会影响之前获取后存储到的变量。也就是获取到元素之后就和html中的这个元素没有关系了。

# 移动布局自适应不同屏幕的几种方式

1、响应式布局  2、100%布局（弹性布局）     3、等比缩放布局（rem）

# 同源策略与跨域：

同源策略是Javascript重要的安全度量标准。它最早出自Netscape Navigator2.0，其目的是防止某个文档或脚本从多个不同源装载。所谓的同源就是同协议，同主机名，同端口号。
它的精髓很简单：它认为自任何站点装载的信赖内容是不安全的。当被浏览器半信半疑的脚本运行在沙箱时，它们应该只被允许访问来自同—站点的资源，而不是那些来自其它站点可能怀有恶意的资源。
跨域的场景:1、域名不同 2、二级域名相同，子域名不同 3、端口不同，协议不同
跨域解决方案:
1、通过jsonp跨域
2、跨域资源共享（CORS）
3、nodejs中间件代理跨域
4、nginx反向代理中设置proxy_cookie_domain
4.Jsonp
script.src 不受同源策略的限制，所以可以动态的创建script标签，将要请求数据的域写在src 中参数中附带回调的方法，服务器端返回回调函数的字符串，并带参数。

# bind,apply,call的共同和不同点：

三者都可以用来改变this的指向
三者第一个参数都是this要指向的对象，也就是想指定的上下文，上下文就是指调用函数的那个对象。（点前的那个对象，没有就是全局window）
三者都可以传参，但是apply是数组，而call是有顺序的传入
bind 是返回对应函数，便于稍后调用；apply 、call 则是立即执行
bind方法
bind()方法会创建一个新函数,称为绑定函数.当调用这个绑定函数时,绑定函数会以创建它时传入 bind()方法的第一个参数作为 this,传入 bind()方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数.

# 闭包的缺点与解决办法：

1，由于闭包会是的函数中的变量都被保存到内存中,滥用闭包很容易造成内存消耗过大,导致网页性能问题
解决方法：
 1.能不用闭包就不用
 2.在退出函数之前，将不使用的局部变量全部删除，可以使变量赋值为null
 3.由于jQuery考虑到了内存泄漏的潜在危害，所以它会手动释放自己指定的所有事件处理程序。只要坚持使用jQuery的事件绑定方法，
 就可以一定程度上避免这种特定的常见原因导致的内存泄漏。

# 在讲解包装对象之前我们先思考一个问题，在JS语言中只有对象才能调用方法。基本数据类型的值并不是一个对象，但是它们也能够调用方法，为什么？

包装对象：所谓“包装对象”，就是将三种值类型相对应的Number,Boolean,String三个原生对象。这三个原生对象可以把原始类型的值变成对象

# 如何判断一个对象是空对象

json.stringify转为字符串

# 如何判断一个数是整数

取余运算判断余数是否为0，Math.ceil( ) Math.floor() Math.around() 判断是否与原来的数相等

## WebSocket与Socket的关系

Socket其实并不是一个协议，而是为了方便使用TCP或UDP而抽象出来的一层，是位于应用层和传输控制层之间的一组接口。

> Socket是应用层与TCP/IP协议族通信的中间软件抽象层，它是一组接口。在设计模式中，Socket其实就是一个门面模式，它把复杂的TCP/IP协议族隐藏在Socket接口后面，对用户来说，一组简单的接口就是全部，让Socket去组织数据，以符合指定的协议。

当两台主机通信时，必须通过Socket连接，Socket则利用TCP/IP协议建立TCP连接。TCP连接则更依靠于底层的IP协议，IP协议的连接则依赖于链路层等更低层次。

WebSocket则是一个典型的应用层协议。

区别

Socket是传输控制层协议，WebSocket是应用层协议。

## WebSocket与HTTP的关系

### 相同点

- \1. 都是一样基于TCP的，都是可靠性传输协议。
- \2. 都是应用层协议。

### 不同点

- \1. WebSocket是双向通信协议，模拟Socket协议，可以双向发送或接受信息。HTTP是单向的。
- \2. WebSocket是需要握手进行建立连接的。

### 联系

WebSocket在建立握手时，数据是通过HTTP传输的。但是建立之后，在真正传输时候是不需要HTTP协议的。

#什么是HTTP?

> 超文本传输协议，是一个基于请求与响应，无状态的，应用层的协议，常基于TCP/IP协议传输数据，互联网上应用最为广泛的一种网络协议,所有的WWW文件都必须遵守这个标准。设计HTTP的初衷是为了提供一种发布和接收HTML页面的方法。

# https与HTTP

HTTPS 主要由两部分组成：HTTP + SSL / TLS，也就是在 HTTP 上又加了一层处理加密信息的模块。服务端和客户端的信息传输都会通过 TLS 进行加密，所以传输的数据都是加密后的数据。 

# h5中datalist标签与selected标签

select：用来创建下拉列表。

Datalist：对象是HTML5新增的。定义选项列表，与input元素配合使用该元素，来定义input可能的值。

使用datalist标签必须要和<input>、<form>标签联合起来使用

input标签中的list属性值要和datalist标签中的id属性值保持一致

![img](https://img2020.cnblogs.com/blog/1551294/202011/1551294-20201103163832220-337699104.png) 




#深拷贝

浅拷贝：也就是在对象复制时，只是对对象中的数据成员进行简单的赋值，如果对象中存在动态成员，即指针，浅拷贝就会出现问题。
深拷贝：对于深拷贝，针对成员变量存在指针的情况，不仅仅是简单的指针赋值，而是重新分配内存空间。
实现深拷贝
1 JSON.stringify() 、 JSON.parse()
是否支持深拷贝多层引用类型嵌套：支持
不可以拷贝 undefined ， function， RegExp 等类型的数据

```javascript
function deepClone(obj){
    let objClone = Array.isArray(obj)?[]:{};
    if(obj && typeof obj==="object"){
        for(key in obj){
            if(obj.hasOwnProperty(key)){//判断对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。
                //判断ojb子元素是否为对象，如果是，递归复制
                if(obj[key]&&typeof obj[key] ==="object"){
                    objClone[key] = deepClone(obj[key]);
                }else{
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}    
let a=[1,2,3,4],
    b=deepClone(a);
a[0]=2;
console.log(a,b);
```



**展开运算符… **
是否支持深拷贝多层引用类型嵌套：不支持
Object.assign(target, source)
是否支持深拷贝多层引用类型嵌套：不支持
递归拷贝 - 深拷贝函数
是否支持深拷贝多层引用类型嵌套：支持

#状态码

100(信息类)
    100表示确认，继续发送信息
200(响应成功)
    200最好的状态
    201提示指定新文件的URL
    202接受和处理，但是未完成
300(资源重定向)
    300请求的资源可在多出得到
    301本网页被永久性转移到另一个URL
    303建议客户访问其他URL或访问方式
400(客户端错误类)
    400客户端请求有语法错误，不能被服务器理解
    401请求未经授权
        401.1未授权，登录失败
        401.2未授权，服务器匹配问题导致登录失败
        401.3ACL禁止访问资源
        401.4未授权，授权被筛选器拒绝
        401.5未授权，ISAPI或CGI授权失败
500(服务器错误类)
    500服务器遇到错误，无法完成请求
    502网关错误
    503加载或停机维护，服务器目前无法使用，一段时间后恢复正常

#单页应用的优缺点

优点：
1.具有桌面应用的及时性、网站的可移植性和可访问性
2.用户体验好、快，内容的改变不需要重新加载整个页面
3.良好的前后端分离
缺点：
1.分功能的鉴权不好实现
2.不利于SEO（搜索引擎）
3.导航不可用，如果一定要导航需要自行实现前进、后退
4.对开发人员技能水平、开发成本高

#页面的优化方案

1.文件合并
2.文件压缩
3.使用CDN资源托管
4.使用缓存
5.懒加载、精灵图等

#函数柯里化

函数柯里化柯里化是把接受多个参数的函数变换成接受一个单一参数的函数，并且返回接受余下的参数而且返回结果的新函数的技术。
简单的说就是把一个你写好的具有多个参数的函数可以一级级（递归+闭包）调用（每次传入一个参数）。
柯里化的好处1.参数复用2.提前确认3.延迟运行
bind就是柯里化的函数

#递归

递归，就是在运行的过程中调用自己。
构成递归需具备的条件
1.子问题需与原始问题为同样的事，且更为简单
2.不能无限制地调用本身，需有个出口，化简为非递归状况处理



# attrs和listeners

attrs：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件。通常配合 interitAttrs 选项一起使用。

listeners：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件

#中央事件总线

新建一个Vue事件bus对象，然后通过bus.$emit触发事件，bus.$on监听触发的事件。

#provide和inject

父组件中通过provider来提供变量，然后在子组件中通过inject来注入变量。不论子组件有多深，只要调用了inject那么就可以注入provider中的数据。而不是局限于只能从当前父组件的prop属性来获取数据，只要在父组件的生命周期内，子组件都可以调用。

#v-model

父组件通过v-model传递值给子组件时，会自动传递一个value的prop属性，在子组件中通过this.$emit(‘input’,val)自动修改v-model绑定的值

#parent/$children与ref

ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例。
$parent/$children：访问父 / 子实例
需要注意的是：这两种都是直接得到组件实例，使用后可以直接调用组件的方法或访问数据。
这两种方法的弊端是，无法在跨级或兄弟间通信。


常见使用场景可以分为三类：
1、父子通信：
父向子传递数据是通过 props，子向父是通过 events（$emit）；通过父链 / 子链也可以通信（$parent/$children）；ref 也可以访问组件实例；provide / inject API；$attrs和$listeners
2、兄弟通信
Bus;Vuex
3、跨级通信
Bus；Vuex；provide / inject API、$attrs和$listeners

#为什么要用vuex

如果业务逻辑复杂，很多组件之间需要同时处理一些公共的数据，这个时候可能不利于项目的维护，vuex的做法就是将这一些公共的数据抽离出来，然后其他组件就可以对这个公共数据进行读写操作，这样达到了解耦的目的。

啊                                 

#什么是懒加载

懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。
实现     

实现方式：
第一种是纯粹的延迟加载，使用setTimeout或setInterval进行加载延迟。
第二种是条件加载，复合某些条件，或触发了某些事件才开始异步下载。
第三种是可视区加载，即仅加载用户可以看到的区域，这个主要由监控滚动条来实现，一般会在距用户看到某图片前一定距离便开始加载，这样能保证用户拉下时正好能看到图片。



图片懒加载
对页面加载速度影响最大的就是图片，一张普通的图片可以达到几M的大小，而代码也许就只有几十KB。当页面图片很多时，页面的加载速度缓慢。
所以，对于图片过多的页面，为了加速页面加载速度，所以很多时候我们需要将页面内未出现在可视区域内的图片先不做加载， 等到滚动到可视区域后再去加载。这样子对于页面加载性能上会有很大的提升，也提高了用户体验。
原理
将页面中的img标签src指向一张小图片或者src为空，然后定义data-src（这个属性可以自定义命名，我才用data-src）属性指向真实的图片。
< img src="default.jpg" data-src="http://xxx"/>当载入页面时，先把可视区域内的img标签的data-src属性值负给src，然后监听滚动事件，把用户即将看到的图片加载。这样便实现了懒加载。

#在严格模式下，类的this丢失会指向哪里，普通函数的this丢失会指向哪里？

类里面this丢失，会指向undefined
普通函数this丢失 会指向window

#单页应用

一个项目只有一个html页面,所有的页面跳转依据路由进行
优点:用户体验好,切换速度快,不需要刷新整个页面
缺点:不利于seo(Search Engine optimization 搜索引擎优化),首页加载速度慢



#v-model实现数据双向绑定的原理 

vue.js是采用数据劫持结合发布者-订阅者模式的方式，通过object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。



#history和hash的区别

1.hash有#号

2.hash路由使用onhashchange监听 history使用popstate监听
3.当hash值相同时,不会触发事件,history当输入相同的路径的时候,会将浏览器中的地址当成是请求地址向后台发送请求,会造成页面404
4.关键字 onhashchange pushstate replacestate popstate



#什么是路由？

根据不同的路径响应不同的资源

#可视化加载如何实现？

监听滚动条

#父组件的mounted还是子组件的mounted先实现？

父子组件嵌套，子组件的mounted先执行，当子组件的数据更新时，父组件的update不会更新。

#websocket和http协议的区别

(1)http协议只能由客户端发起请求，服务端根据请求url和传过去的参数返回对应结果
(2)websocket是双向通信的，只要链接建立起来，可以由客户端给服务器发送数据，也可以由服务器端给客户端发送数据
(3)websocket只需完成一次握手，而http需要三次

#ajax,axios和fetch的区别

##ajax

传统ajax指的是XMLHttpRequest(XHR)，最早出现的发送后端请求技术，隶属于原始JS中，核心使用XMLHttpRequest对象，多个请求之间如果有先后关系的话，就会出现回调地狱。
优点：
(1)不需要插件支持
(2)用户体验极佳
(3)提升web程序性能
(4)减轻服务器和宽带的负担
缺点：
(1)本身针对MVC的编程，不符合现在前端MVVM的趋势
(2)基于原生的XHR开发，XHR本身的架构不清晰
(3)不符合关注分离的原则
(4)配置和调用方式非常混乱，而且基于事件的异步模型不友好

##axios

axios是一个基于promise用于浏览器和nodejs的HTTP客户端，本质上也是对原生XHR的封装，只不过它是Promise的实现版本，符合最新的ES规范。它具有以下特征：
(1)从浏览器中创建XMLHttpRequest
(2)支持promise API
(3)客户端支持防止CSRF
(4)提供了一些并发请求的接口(重要，方便了很多的操作)
(5)从node.js创建http请求
(6)拦截请求和响应
(7)转换请求和响应数据
(8)取消请求
(9)自动转换JSON数据
防止csrf：就是让你的每个请求都带一个从cookie中拿到的key，根据浏览器同源策略，假冒的网站是拿不到你cookie中的key的，这样后台就可以轻松辨别出这个请求是否是用户在假冒网站上的误导输入，从而采取正确的策略

##fetch

fetch号称是ajax的替代品，是在ES6中出现的，使用了ES6的promise对象。fetch是基于promise设计的。fetch的代码解构比ajax简单多了，参数优点像jQuery ajax。但是fetch不是ajax的进一步封装，而是原生js，没有使用XMLHttpRequest对象。
优点：
(1)符合关注分离，没有将输入、输出和用事件来跟踪的状态混杂在一个对象里
(2)语法简单，更加语义化
(3)同构方便
(4)更加底层，提供丰富的API
(5)脱离了XHR，是ES规范里新的实现方式
缺点：
(1)fet                                           不会reject
(2)fetch默认不会带cookie，需要添加配置项：fetch(url,{credentials:'include'})
(3)fetch不支持abort，不支持超时控制，使用setTimeout及promise.reject的实现的超时控制并不能阻止请求
(4)fetch没有办法原生检测请求的进度，而XHR可以



#ajax axios promis的区别

ajax和json的优缺点
      ----------ajax的优点
      
   （1）页面无刷新，用户体验比较好。
   （2）使用异步方式与服务器通信，具有更加迅速的响应能力
   （3）可以把以前一些服务器负担的工作转嫁到客户端，利用客户端闲置的能力来处理，减轻服务器和带宽的负担，节约空间和带宽租用成本，并且减轻服务器负担。Ajax的原则 是“按需取数据”，可以最大程度地减少冗余请求和响应对服务器造成的负担。

   （4）基于标准化的并被广泛支持的技术。不需要下载插件或小程序

      ----------ajax的缺点
  （1）Ajax不支持浏览器back按钮
  （2）安全问题。Ajax暴露了与服务器交互的细节
  （3）对搜索引擎的支持比较弱
  （4）破坏了程序的异常机制
  （5）不容易调试

    ----------json优点
    （1）作为一种数据传输格式，JSON与XML很相似，但是它更加灵巧
   （2）JSON不需要从服务器发送端发送含有特定内容的类型的首部信息

     ----------json缺点
      (1）语法过于严谨
   （2）代码不易读
   （3）eval函数存在风险

#作用域，作用域链的概念

​     ----------作用域
     ☆☆全局作用域
    (1):最外层函数和在最外层函数外面定义的变量拥有全局作用域
    (2):所有末定义直接赋值的变量自动声明为拥有全局作用域，
    (3):所有window对象的属性拥有全局作用域
     ☆☆局部作用域
     全局作用域相反，局部作用域一般只在固定的代码片段内可访问到，最常见的例如函数内部，所有在一些地方也会看到有人把这种作用域称为函数作用域，

     ----------作用域链
    如果父级也没呢？再一层一层向上寻找，直到找到全局作用域还是没找到，就宣布放弃。这种一层一层的关系，就是 作用域链 

#如何处理多个ajax并发执行？

1：什么情况下会产生多个ajax请求？
答：通常为了减少页面加载时间，为了用户体验，页面加载完成后再发送ajax请求获取其他数据，这时候可能产生多个ajax请求，为了用户体验，最好是发送并行请求，这就产生并发问题

2：多个ajax请求之间会存在一定影响的情况，常见情况：
答：(1)多个ajax返回的是同一个数据的不同部分。我们需要在前端把这些数据组合成一个完整的数据来运用。
           我们要知道这些数据的次序来够正确拼接。
       (2)不同查询条件下的同一组数据。（我们可能需要的是最新的一组数据）。
     （3）后面的ajax要用到的前面ajax的数据。

3:处理方法   (具体代码，麻烦同学百度，俺的实力总结不出来)
答：(1)利用Promise.all方法，将多个promise实例包装成新的Promise实例
     （2）并行改串行
       (3)回调计数  
       (4)循环非阻塞 :使用jquery的延时处理方法，每个ajax请求完成后，把对应的Deferred置为完成状态，然后用jquery判断全部完成后再进行后续处理
       (5)jquery   :使用jquery的延时处理方法，每个ajax请求完成后，把对应的Deferred置为完成状态，然后用jquery判断全部完成后再进行后续处理


        相关博客：https://blog.csdn.net/yintianqin/article/details/60962175
             https://www.cnblogs.com/yanglongbo/articles/9842895.html

#单页应用的优缺点

​    ----------优点
    1：具有桌面应用的即时性,网站的可移植性和可访问性。
    2：用户体验好、快，内容的改变不需要重新加载整个页面，web应用更具响应性和更令人着迷。
    3：基于上面一点，SPA相对对服务器压力小。
    4：良好的前后端分离。SPA和RESTful架构一起使用，后端不再负责模板渲染、输出页面工作，web前端和各种移动         终端地位对等，后端API通用化
    5：对前端人员javascript技能要求更高，促使团队技能提升。

    ----------缺点
     1：分功能模块的鉴权不好实现。
     2：不利于SEO。
     3：初次加载耗时相对增多。
     4：导航不可用，如果一定要导航需要自行实现前进、后退。
     5：对开发人员技能水平、开发成本高。
    
    ///////////////////////////
     SEO：通俗解释seo的含义在于seo是一门技术，此技术的目的在于提升网站在搜索引擎中特有的关键词排名。seo是什么意思？它是从搜索引擎上的“免费”，“获取”，“展现”或者“自然”搜索结果中获取用户流量的行为/过程。以百度搜索引擎为例，在搜索框中搜索任何一个词语，都会出现相应的列表页，排名有第一位到几千几万位                  不 等  ，seo  的目的就是让网站或者网页在搜索结果中，处于靠前的位置

#css选择器有哪些，选择器的权重的优先级

​    ----------选择器类型：
    1、ID　　#id
    2、class　　.class
    3、标签　　p
    4、通用　　*
    5、属性　　[type="text"]
    6、伪类　　：hover
    7、伪元素　　::first-line
    8、子选择器、相邻选择器
    ---------权重优先级：
   第一等：行内样式是 1000，行内样式虽然没被列入选择器里，但它的权重是最高的
   第二等：id选择器是 100
   第三等：类选择器、伪类选择。属性选择器、属性选择器 10
   第四等：标签选择器和伪元素选择器 1
                其他选择器的权重为0
                继承的样式没有权重
                如果等级相同，那么最后的样式会覆盖前面的样式
    ☆☆☆☆☆☆ 最后请记住!important 的权重是无限大的

# 圣杯布局

```javascript
<style type="text/css">
			*{margin: 0;padding: 0;}
			html{
				height: 100%;
			}
			body{
				height: 100%;
				display: flex;
				flex-direction: column;
			}
			header{
				height: 140px;background: orange;
			}
			section{
				flex: 1;
				background: yellow;
				display: flex;
			}
			section article{
				background: red;
				width: 200px;
			}
			section div{
				background: green;
				flex: 1;
			}
			section aside{
				background: blue;
				width: 200px;
			}
			footer{
				height: 140px;background: pink;
			}
		</style>
	</head>
	<body>
		<header>上</header>
		<section>
			<article>左</article>
			<div>中</div>
			<aside>右</aside>
		</section>
		<footer>下</footer>
	</body>
```



# 单飞翼

```javascript
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			*{margin: 0;padding: 0;}
			/*元素高度自适应窗口高度*/
			html{height: 100%;}
			body{height: 100%;}
			
			article{
				width: 300px;
				height: 100%;
				background: orange;
				float: left;
			}
			aside{
				height: 100%;
				background: yellow;
				overflow: hidden;
			}
		</style>
	</head>
	<body>
		<article>固定宽度</article>
		<aside>宽度自适应</aside>
	</body>
</html>

```

### 双飞翼

```javascript

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			*{margin: 0;padding: 0;}
			html{height: 100%;}
			body{height: 100%;}
			#left{
				width: 200px;height: 100%;background: red;
				float: left;
			}
			#center{
				height: 100%;background: green;
				overflow: hidden;
			}
			#right{
				width: 200px;height: 100%;background: blue;
				float: right;
			}
			
		</style>
	</head>
	<body>
		<div id="left">左</div>
		<div id="right">右</div>
		<div id="center">中</div>
	</body>
</html>

```

# BFC

### BFC的布局规则

- 内部的Box会在垂直方向，一个接一个地放置。
- Box垂直方向的距离由margin决定。属于**同一个**BFC的两个相邻Box的margin会发生重叠。
- 每个盒子（块盒与行盒）的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
- BFC的区域不会与float box重叠。
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
- 计算BFC的高度时，浮动元素也参与计算。

### 如何创建BFC

- 1、float的值不是none。
- 2、position的值不是static或者relative。
- 3、display的值是inline-block、table-cell、flex、table-caption或者inline-flex
- 4、overflow的值不是visible

# vue中修饰符

# Vue中编程式导航

this.$router.push/go/replace

# 路由的钩子

# JSON.strinify和JSON.parse深拷贝弊端

不能拷贝原型上的数据

缺点：

（1）如果对象里有函数,函数无法被拷贝下来

（2）无法拷贝copyObj对象原型链上的属性和方法

（3）当数据的层次很深，会栈溢出

# Promise.all和Promise.race

简单的说就是**Promise.all()**可以实现将多个的Promise实例包装成一个Promise实例，成功返回一个数组，失败的话就返回最先失败的结果。 

**Promise.all成功结果输里面的数据的顺序和其接收时数组的顺序是一样的，比如示例中的one，two，就算one获取的速度比two慢也依旧是one的结果在前。这样我们就可以根据请求的顺序获取和使用数据了** 

> `Promise.race(iterable)` 方法返回一个 promise，一旦迭代器中的某个promise成功或失败，返回的 promise就会解决或拒绝。

race这个词有竞赛的含义，即是在多个请求中返回获取速度最快的结果，无论其是成功还是失败

1.watch和computed的区别
 computed:
①支持缓存，只有依赖数据发生改变，才会重新进行计算
②不支持异步，当computed内有异步操作时无效，无法监听数据的变化
③computed属性值会默认走缓存，计算属性是基于他们的响应依赖进行缓存的也就是基于data中声明过父组件传递的props中的数据通过计算得到的值
④如果computed属性值是函数，那么会默认会走get()方法，函数的返回值就是属性属性值，在computed中的，属性都有一个get和set方法，当数据变化时，调用set方法
watch:
①不支持缓存，数据变化，会直接触发相应的操作。
②watch支持异步
③监听的函数接收两个参数，第一个参数是最新的值，第二个参数是输入之前的值
④当一个属性发生变化时，需要执行对应的操作，一对多
⑤监听数据必须是data中声明过或者父组件传递过来的props中的数据，当数据变化，触发其他操作，函数有两个参数
immediate:组件加载立即触发回调函数执行
deep:deep的意思就是深入观察，监听器会一层层的往下遍历，给对象的所有属性都加上这个监听器，但是这样性能开销就会非常大了，任何修改obj里面任何一个属性都会触发这个监听器里的handler
2.路由钩子有哪些
①前置钩子:Router.beforeEach():在路由跳转之前触发
router.beforeEach(to,from,next)
②后置钩子:Router.afterEach():在路由跳转之后触发，在此函数里面没有next()
③组件内钩子:
1.beforeRouterEnter:路由进入之前触发，此处获取不到当前实例的this
2.beforeRouterUpdate():在当前路由改变，但是该组件被复用时调用，举例来说，对于一个/foo:/:id,在/foo/1和/foo/2之前跳转的时候，由于会渲染同样的foo组件，因此组件实例会被复用，而这个钩子就会正在这种情况下被调用
3.beforeRouterLeave():导航离开该组件的对应路由时调用，可以访问组件实例的this
3.render函数（渲染函数）
render函数是用来生成虚拟DOM的。vue推荐使用模板来构建我们的界面，在底层实现中vue会将模板编译成渲染函数，通过编写渲染函数，获得更好 
promise.all可以将多个promise实例包装成一个新的promise实例。同时，成功和失败得到返回值是不同的，成功时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。
注意:promise.all获得成功结果的数组里面的数据顺序和promise.all接收到的数组顺序是一致的，即p1的结果在前，即便p1的结果获取的比p2要晚。
promise.race可以将多个promise实例包装成一个新的promise实例，里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。



**侧栏菜单

​	1.定义全部的路由和组件

​	2.设置递归函数（根据服务器返回的menuList数据和allRoutes进行匹配，得到符合当前用户的有效路由配置）

通过qf-sub-menu组件渲染（  使用之前先1.安装yarn add qf-sub-menu，2.在main.js里面引入组件import qfSubMenu from “qf-sub-menu” 3.使用组件 Vue.use(qfSubMenu)  ）

**深拷贝jsonstrify弊端、**

​	1、如果obj里面有时间对象，则JSON.stringify后再JSON.parse的结果，时间将只是字符串的形式。

​	2、如果obj里有RegExp、Error对象，则序列化的结果将只得到空对象；

​	3、如果obj里有函数，undefined，则序列化的结果会把函数或 undefined丢失；

​	4、如果obj里有NaN、Infinity和-Infinity，则序列化的结果会变成null

​	5、JSON.stringify()只能序列化对象的可枚举的自有属性，例如：如果obj中的对象是有构造函数生成的，则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢失对象的constructor

​	6、如果对象中存在循环引用的情况，也无法正确实现深拷贝

**.promise**

**了解promise吗？**

​		Promise简单的说就是一个容器，里面保存着某个未来才会结束的事件的结果。从语法上说，promise是一个对象，它可以获取异步操作的消息。Promise状态（resolved、rejected、pending）具有不受外界的影响和不可逆两个特点。

**promise解决了什么问题？**

​		Promise解决了回调地狱的问题，提高了代码的可读性以及解决信任度问题。

**promise如何使用？**

​		ES6规定，promise对象是一个构造函数，用来生成promise实例。

var promise = new Promise(function(resolve, reject) {
  *// ... some code*
  if (*/\* 异步操作成功 */*){
    resolve(value);
  } else {
    reject(error);
  }
});

 

 

​	**5.4promise常用的方法有哪些？它们的作用是什么？**

​		Promise.then():里面接受两个参数，分别是成功和失败的回调函数。

​		Promise.catch():一般用catch方法替代reject，这样更语义化

​		Promise.all()：将多个promise实例，包装成一个新的promise实例。同时成功和失败得到的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。

​		Promise.race：同样是将多个promise实例，包装成一个新的promise实例。返回最先执行结束的promise任务的结果，不管这个promise结果是成功还是失败

​	**什么是单例模式**

单例模式是一种很常见的设计模式。它只有一个实例，并且可以全局访问。

优点：1.内存里只有一个实例，减少了内存的开销，尤其是频繁的创建和销毁实例（比如管理首页页面缓存）2.避免对资源的多重占用（比如写文件操作）

缺点：没有接口，不能继承，与单一职责原则冲突（一个类应该只关系内部逻辑，而不是关心外面怎么样实例化）

使用场景：1.全局缓存。2.弹窗



## Object.definePropety() 方法详解

[参考资料](https://blog.csdn.net/yuhk231/article/details/77993231)

**Object.definePropety()** 方法直接在一个对象上定义一个新属性，或者修改一个已经存在的属性，并返回这个对象

语法 `Object.defintPropety(obj, prop, descriptor)`

### 参数

- `obj`需要定义属性的对象
- `prop`需被定义或修改的属性名
- `descript`需被定义或修改的属性的描述符

### 描述

该方法允许精确添加或修改对象的属性，一般情况下，我们为对象添加属性是通过赋值来创建并显示在属性枚举中(`for...in`或`Object.keys`方法)，但这种方式添加的属性值可以被改变或被删除。而使用`Object.definePropety()`添加的属性是默认不可改变的



### CommonJS模块的特点如下。

所有代码都运行在模块作用域，不会污染全局作用域。

模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。

模块加载的顺序，按照其在代码中出现的顺序。

# module对象

​        1.module.exports属性 

module.exports属性表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取module.exports变量。

​        2.exports变量

node为每一个模块提供了一个exports变量(可以说是一个对象)，指向 module.exports。这相当于每个模块中都有一句这样的命令 var exports = module.exports;

这样，在对外输出时，可以在这个变量上添加方法。例如  exports.add = function (r){return Math.PI * r *r};注意：不能把exports直接指向一个值，这样就相当于切断了 exports 和module.exports 的关系。例如 exports=function(x){console.log(x)};

一个模块的对外接口，就是一个单一的值，不能使用exports输出，必须使用 module.exports输出。module.exports=function(x){console.log(x);}; 

 

# AMD规范和commonJS规范

1.相同点：都是为了模块化。

2.不同点：AMD规范则是非同步加载模块，允许指定回调函数。CommonJS规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。

 

 # 自定义指令



 一个自定义指令定义对象可以提供如下几个钩子函数 (均为可选)：
**inserted**：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。

**bind**：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。

**update**：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。

**componentUpdated**：指令所在组件的 VNode 及其子 VNode 全部更新后调用。

**unbind**：只调用一次，指令与元素解绑时调用。

指令钩子函数会被传入以下参数：
**el**：指令所绑定的元素，可以用来直接操作 DOM 。77
**binding**：一个对象，包含以下属性：
**name**：指令名，不包括 v- 前缀。
**value**：指令的绑定值，例如：v-my-directive=“1 + 1” 中，绑定值为 2。
**oldValue**：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
**expression**：字符串形式的指令表达式。例如 v-my-directive=“1 + 1” 中，表达式为 “1 + 1”。
**arg**：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 “foo”。
**modifiers**：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
**vnode：** Vue编译生成的虚拟节点。移步 VNode API 来了解更多详情。
**oldVnode**：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。

 

 



#1到-2的随机数

Math.random()*(max-min)+min
Math.random()*(1-(-2))-2

#promise.all和promise.race，promise.all有一个失败了，只返回失败的，但是我想让它返回成功，怎么做？

Primse.race:方法用于将多个 Promise 实例，包装成一个新的 Promise 实例, 返回最先执行结束的 Promise 任务的结果，不管这个 Promise 结果是成功还是失败，
Primse.all:方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。如果全部成功执行，则以数组的方式返回所有 Promise 任务的执行结果。如果有一个 Promise 任务 rejected，则只返回 rejected 任务的结果。
想返回成功的数据：在promise数组添加了一个回调函数，当数组中有接口reject时，catch住结果直接返回，这样失败的结果也可以当做成功处理，所以在promise.all中我们可以监听到所有结果的返回，然后在针对不同的返回值进行处理。

#promise解决了什么问题？回调地狱？

Promise解决了回调地狱的问题, 提高代码的可读性以及解决信任度问题.
回调地狱：函数作为参数层层嵌套

#图片首次加载，图片比较大，打开比较慢，怎么解决？

懒加载，精灵图，使用缓存、节流，防抖

#懒加载

实现原理：先加载一部分数据，当触发某个条件时利用异步加载剩余的数据，新得到的数据不会影响原有数据的显示，同时最大程度上减少服务器端的资源消耗
实现方式：
1、纯粹的延迟加载，使用setTimeout或setinterval进行加载延迟
2、加载条件，符合某些条件或触发了某些事件，才开始异步加载
3、可视区加载，仅加载用户可以看到的区域，这个主要由监控滚动条来实现一般会在距用户看到某图片前一定距离便开始加载，这样能保证用户下拉时，正好能看到图片

#深拷贝方法？json.stringify弊端？

递归，json.stringify

json.stringify弊端：
1、如果obj里面有时间对象，则JSON.stringify后再JSON.parse的结果，时间将只是字符串的形式。
2、如果obj里有RegExp、Error对象，则序列化的结果将只得到空对象；
3、如果obj里有函数，undefined，则序列化的结果会把函数或undefined丢失；4、如果obj里有NaN、Infinity和-Infinity，则序列化的结果会变成null
5、JSON.stringify()只能序列化对象的可枚举的自有属性，例如：如果obj中的对象是有构造函数生成的，则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢失对象的constructor
6、如果对象中存在循环引用的情况，也无法正确实现深拷贝

#for..in..for..of区别，怎么遍历不可枚举的属性

For...in遍历得到是索引（即键名），for...of 遍历的元素值（键值）
For...in遍历的是无序的，for...of针对具有iterator接口的对象，数组或类数组
For...in会遍历原型 for...of不会遍历原型 
遍历对象只能用for...in
用Object.getOwnpropertyDescriptors(data)遍历不可枚举的属性

Object.getOwnPropertyNames()获取对象自身所有的属性键名 



#ajax、fetch和axios区别

①.ajax优点：
       不需要插件支持、用户体验极佳、提升web程序性能、减轻服务器和宽带的负担
缺点：
(1)本身针对MVC的编程，不符合现在前端MVVM的趋势
(2)基于原生的XHR开发，XHR本身的架构不清晰
(3)不符合关注分离的原则
②.axios
axios是一个基于promise用于浏览器和nodejs的HTTP客户端，
(1)从浏览器中创建XMLHttpRequest、支持promise API、客户端支持防止CSRF
(2)提供了一些并发请求的接口
(3)拦截请求和响应、转换请求和响应数据、取消请求

③.fetch
fetch号称是ajax的替代品，fetch是基于promise设计的。fetch不是ajax的进一步封装，而是原生js，没有使用XMLHttpRequest对象。
优点：
(1)符合关注分离，没有将输入、输出和用事件来跟踪的状态混杂在一个对象里
(2)语法简单，更加语义化、同构方便
(3)更加底层，提供丰富的API
(4)脱离了XHR，是ES规范里新的实现方式
缺点：
(1)fetch只对网络请求报错，对400，500都当作成功请求，服务器返回400，500错误时并不会reject
(2)fetch默认不会带cookie，需要添加配置项：fetch(url,{credentials:'include'})
(3)fetch不支持abort，不支持超时控制，使用setTimeout及promise.reject的实现的超时控制并不能阻止请求
(4)fetch没有办法原生检测请求的进度，而XHR可以

#编程式导航（历史记录栈）

push 往浏览器历史记录栈中添加一项记录
replace 替换当前历史记录栈，不会产生历史记录栈
go  定位到历史记录栈的某一处

#弹性盒flex属性

伸缩容器：
     display: flex
     flex-direction【主轴方向】
     flex-wrap【主轴换行方式】
     justify-content【设置伸缩项目在主轴上对齐的方式】
     align-items【单行项目在侧轴对齐方式】
     align-content【多行项目在侧轴对齐方式】
伸缩项目：
     align-self【伸缩项目在侧轴对齐方式】
     order【项目在容器的排列位置】
     flex-grow【主轴方向放大比例】
     flex-shrink【主轴方向上缩小比例】
     flex-basis【设置项目在主轴方向大小轴】

#css能继承的属性有哪些

字体系列：
font-family,font-weight.font-size,font-style
文本系列：
text-align、line-height、word-spacing、letter-spacing、color
元素可见性： visibility
光标属性： cursor：光标显示何种形态

#时间对象的方法

getFullYear()年 / getMonth()月 / getDate()日 / getDay()周 / getHours()小时 / getMinutes() 分钟 / getSecondes() 秒钟 / 
getTime() 时间对象转换为毫秒数

#渲染中的，回流和重绘

回流:当render tree的一部分或者全部的元素因改变了自身的宽高.布局,显示或隐藏,或者元素内部的文字结构发生变化,导致需要重新构建页面的时候,回流就产生了

重绘：当一个元素自身的宽高,布局,及显示或者隐藏没有改变,而只是改变看元素的外观风格的时候,就会产生重绘.

回流必定出发重绘,而重绘不一定触发回流

#虚拟dom的作用

由于虚拟dom是运行于内存中,并非操作的真实dom,所以在更新的时候可以在内存中计算出最后的结果,再一次的更新到dom上,提高性能

 

 # 数据懒加载

#jquery里的attr和prop 

对于HTML元素本身就带有的固有属性，在处理时，使用prop方法。
对于HTML元素我们自己自定义的DOM属性，在处理时，使用attr方法。

#jquery中的extend的意思

1.jQuery.extend() 函数用于将一个或多个对象的内容合并到目标对象。

注意：1. 如果只为$.extend()指定了一个参数，则意味着参数target被省略。此时，target就是jQuery对象本身。通过这种方式，我们可以为全局对象jQuery添加新的函数。
          2. 如果多个对象具有相同的属性，则后者会覆盖前

 

#flex属性 

父元素（7）

display: flex(块级弹性盒) inline-flex(行内块弹性盒)。注：设置为flex布局以后，子元素的float,clear,vertical-align属性失效。

flex-direction: 设置弹性盒主轴方向

flex-wrap: 设置在主轴上的换行方式

flex-flow: 为flex-direction和flex-wrap的属性简写

justify-content:主轴上的对齐方式

align-items:设置单行在侧轴上的对齐方式

align-content：设置多行在侧轴上的对齐方式

子元素（6）

align-self:设置伸缩项目在侧轴的对齐方式

order:设置伸缩项目的排列位置

flex-grow：设置伸缩项目的放大比例（主轴方向）

flex-shrink:设置伸缩项目的缩小比例（主轴方向）

flex-basis:设置弹性盒伸缩基准值

flex: 为flex-grow flex-shrink flex- basis 的简写 (一般使用flex:1; === flex-grow:1;)

#元素在盒子中水平垂直居中？  

①子元素相对于父元素绝对定位， 将子元素的top，right，bottom，left均设为0，然后设置子元素 margin: auto;

②子元素相对于父元素绝对定位， 子元素top，left设置为50%，子元素margin的top，left减去自身高，宽的一半。

③父元素设置 display: flex; justify-content: center; align-items: center;  

④子元素相对定位，top，let设为50%，transform: translate(-50%, -50%); 这种方式并不会释放子元素在文档中所占的位置。 

#IE中遇到的兼容问题 

①，获取滚动高度：document.documentElement.scrollTop||document.body.scrollTop

②，事件对象兼容window.event只能在IE下运行，而不能在Firefox下运行,这是因为Firefox的event只能在事件发生的现场使用。Firefox必须从源处加入event作参数传递。IE忽略该参数，用window.event来读取该event。

解决方法：event = event || window.event;

③，event.pageX和event.pageY：获取鼠标相对于整个文档的水平及垂直坐标event.pageX和event.pageY，IE9之前的版本不支持　　

解决方法：　　event.clientX(document.documentElement.scrollLeft||document.body.scrollLeft);　　　　event.clientY+(document.documentElement.scrollTop||document.body.scrollTop);
④，阻止事件冒泡兼容stopPropagation()和cancelBubble，前者是方法，是标准的写法，后者是属性，赋值true表示阻止，是IE的写法。　　

解决方法：　　　　

判断stopPropagation是否存在，如果存在则用标准写法否则则用IE的写法，不可反过来判断。　　　　event.stopPropagation ? event.stopPropagation() : event.cancelBubble=true; 

⑥，阻止默认行为兼容　　preventDefault()和returnValue()前者标准写法，后者IE写法。　　

解决方法：　　 

（常规方法）event.preventDefaultevent.preventDefault():event.returnValue=false;　　　 或者（非常规方法）直接在事件处理程序中return false;

⑦，事件监听兼容　　标准浏览器的写法addEventListener()和IE的写法attachEvent()。　　

解决方法：　　　　

判断addEventListener是否存在，如果存在则用否则用IE8以下的版本（含IE8）的绑定方法attachEvent，removeEventListener()和detachEvent()也是一样的用法。　　　　

```javascript
if(document.all){　　　　　　
    dom.attactEvent(“onclick”, fn);　　　　
} else {　　　　
    dom.addEventListener(“click”, fn);　　　　
}
```

⑧，ie6对!important属性不支持

#元素消失的方法？  

①：visibility (visible:默认元素可见。hidden:元素不可见，占据空间)

②：opacity:0；设置元素透明度，属性值0-1。IE中属性值0-100。占据空间

③：display：none；不占据空间

#元素渐变？ 

linear-gradient线性渐变（方向值,color1 (渐变起点),color2,······）//方向值忽略不写，默认自上而下

radial-gradient径向渐变（形状,color1,color2,······）//形状忽略不写，默认正方形元素为圆形，长方形元素为椭圆形。

//每一个颜色后面都可以设置渐变起点（可忽略不写）

#Csfilter，页面变成黑白？  

filter: grayscale(100%)

#Cs里动画的定义方式？  

@keyframes  名字{

​	from{动画开始时的样式}    //0%

​	to{动画结束时的样式}    //100%

}

.class{

​	animation-name:名字；

​	animation-duration:10s; //规定一个周期所需时间

​	animation-timing-function:linear;  //设置动画的过渡类型

(属性值：linear匀速 ease慢快慢 ease-in慢开始 ease-out慢结束   cubic-bezier(，，，，)四个值在[0-1] 贝塞尔曲线)

​	animation-delay:2s；//设置延迟时间，可设置负数(提前进入)

​	animation-iteration-count:number/infinite;//设置动画执行次数

（默认1次，可写数字(写几次执行几次) 。infinite:表示无限循环播放执行。）

​	animation-direction:normal;//设置动画播放方向

（normal:默认值，正向播放。reverse:反向播放。alternate:奇数次正向，偶数次反向。alternate-reverse:奇数次反向，偶数次正向。）

​	animation-fill-mode:none;//设置动画时间之外元素的状态

（none:不改变默认行为。forwards:当动画结束后，保持动画最后的状态。backwards:当动画开始之前，(延迟的时间)保持动画开始的状态。both:开始之前保持动画最开始状态，结束之后保持动画最后的状态。）

​	animation-play-state:running;//设置对象动画的状态

（running:默认值，运行。paused:暂停。）

}

注：简写  animation：名字，周期时间，过渡类型，延迟时间······，名字······，······；

​	顺序不分前后，但在前的时间为周期时间，在后的时间为延迟时间(可忽略不写)，取默认值可忽略不写

​	animation-play-state此属性不写在简写属性中

#BFC  

- BFC 即 Block Formatting Contexts (块级格式化上下文),是页面盒模型布局中的一种 CSS 渲染模式，相当于一个独立的容器，里面的元素和外部的元素相互不影响。
- 创建 BFC 的方式有：
  html 根元素
  float 浮动
  position (absolute、fixed)脱离正常文档流
  overflow 除了 visible 以外的值 (hidden、auto、scroll)
  display 为 inline-block、table-cells、flex

#回流与重绘？  

**回流：**回流是布局或者几何属性需要改变就称为回流。回流是影响浏览器性能的关键因素，因为其变化涉及到部分页面（或是整个页面）的布局更新。一个元素的回流可能会导致了其所有子元素以及DOM中紧随其后的节点、祖先节点元素的随后的回流。

**重绘：**重绘是由于节点的几何属性发生改变或者由于样式发生改变但不会影响布局。例如outline, visibility, color、background-color等，重绘的代价是高昂的，因为浏览器必须验证DOM树上其他节点元素的可见性。

回流一定会触发重绘，而重绘不一定会回流

#微任务与宏任务都有谁？  

宏任务主要包含：script( 整体代码)、setTimeout、setInterval、I/O、UI 交互事件、setImmediate(Node.js 环境)

 微任务主要包含：Promise、MutaionObserver、process.nextTick(Node.js 环境)

#window.onload 与  $(document).ready()的区别？

1.执行时间

window.onload必须等到页面内包括图片的所有元素加载完毕后才能执行。
$(document).ready()是DOM结构绘制完毕后就执行，不必等到加载完毕。

2.编写个数不同

window.onload不能同时编写多个，如果有多个window.onload方法，只会执行一个

$(document).ready()可以同时编写多个，并且都可以得到执行

3.简化写法

window.onload没有简化写法

```javascript
$(document).ready(function(){})可以简写成$(function(){});
```

#iframe内联框架标签

```html
<iframe sec="引入页面的路径">提示信息(浏览器不支持时显示)</iframe>//行内块元素
```

width:设置框架的显示宽度

height:设置框架的显示高度

frameborder:是否显示边框，0不显示，1显示

scrolling:是否显示滑动条，Yes显示，No不显示

#三角形

```html
div{
	width: 0;
	height: 0;
	border:100px solid transparent;
	border-bottom-color:red;
}
```



 

#怎么定义一个symbol类型,symbol是一种特殊类型

var a = Symbol()
var b = Symbol()
console.log(a===b)//false

通常symbol有两个基本类型特点：
1.利用symbol来做为对象的属性名
2.使用Symbol()来定义常量

#React与vue的不同之处(重要)

1. 组件化方面,react用的是jsx,一个js文件就是一个组件,而vue使用的是单文件组件
2. 数据流方面,react完全遵循单向数据流的原则,vue里面,理论上也是单向数据流,没有react严格,vue是可以双向数据绑定的
3. 语法方面,react使用jsx
4. vue是响应式编程,react是函数式编程
5. 两者的diff算法不同 react用的算法是fiber  (vue3.0)算法比react快
6. 在react中,有纯函数的概念
7. vue是一个渐进式的架构
8. react的元素(对象)创建出来是不允许改变的,只能通过新的值来覆盖



# 1. **怎么设置边宽为0.5px**

设置border为1px ，transform：scale (0.5) 

 

# 2. **怎么把font-size设置到10px以下**

设置合适的字体大小，然后  transform :scale(合适的缩小倍数) 缩放

 

# 3. **创建对象的几种方式**

1.字面量创建

2.构造函数创建

通过new一个构造函数得到

3.工厂模式

创建一个函数，先创建一个空对象，在给这个空对象绑定属性和方法，最后返回这个对象

 

# 4. **H5新增了哪些特性**

1、简化的文档类型和字符集

（1）文档类型<!DOCTYPE HTML> 

（2）字符集  < meta charset="UTF-8">

2、富有语义化的新结构元素

​	header ， footer ，main ， nav ，article ，aside ，filedset  ，hgroup 等

3、新增的内联元素

　   figure元素一个典型用途是包含图像,代码和其他内容对主要内容进行说明，删除不会影响主内容

figcaption元素主要用于figure的标题

　　mark元素突出显示以表示引用的内容，或者突出显示与用户当前活动相关的内容，他不同于en或strong元素

　　time元素，当需要在内容中显示时间或者日期时，则建议使用time元素

　　time元素可以包涵两个属性，一个datetime表示在元素中指定的确切日期和世家，pubdate表示文章或者整个文档发布		时time元素所指定的日期和时间

　　meter元素用于定义度量衡，规定最大最小宽高，通常要结合css一起作用

​	progress元素用于定义一个进度条，有max（完成值）和value（进度条当前值）两个属性。

 

4、强大的绘图功能和多媒体功能

　　1）canvas 可以动态地绘制各种效果精美的图形，结合js就能让网页图形动起来

　　2）SVG 绘制可伸缩的矢量图形

　　3）audio和 video 可以不依赖任何插件播放音频和视频

5、获取地理位置信息

　　新增Geolocation API，可以通过浏览器获取用户的地理位置，不再需要借助第三方地址数据库或专业的开发包

​	navigator.geolocation.getCurrentPosition(showPosition);  通过此方法获取地理位置信息，如果getCurrentPosition()运行成功，则向参数showPosition中规定的函数返回一个coordinates对象，然后showPosition就能获得其位置信息

 

# 5. **ES6新增特性**

1.const 与 let 

支持块级作用域 ， 

暂时性死区 ， 

没有变量提升 ，

const声明的常量声明必须赋值且不允许二次赋值 ， 

let不允许重复声明同一变量两次，

2.模板字符串

模板字面量用倒引号 ( `` ) 表示， 可以包含用${expression}` 表示的占位符 

3.解构

1.数组解构

必须按照数组元素顺序进行依次解构赋值

2.对象结构

没有顺序 ， 只要变量名和对象中的属性名相同则解构成功

4.对象字面量简写

属性名和属性值相同时，可以简写为一个变量名

5.展开运算符

展开运算符（用三个连续的点 (...) 表示），使你能够将字面量对象展开为多个元素 

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = [...fruits,...vegetables];
console.log(produce);
//["apples", "bananas", "pears","corn", "potatoes", "carrots"]

6.剩余参数（ 可变参数 ）

剩余参数也用三个连续的点 ( ... ) 表示，使你能够将不定数量的元素表示为数组.

const order = [20, 18, 1, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);
//20  18  1  (4) ["cheese", "eggs", "milk", "bread"]

箭头函数 和 class类 

class类中添加静态方法，在方法前面加上static

8.super 和 extend 扩展类

子类继承父类，子类使用super来调用父类的构造函数，修改其this指向，指向子类的实例对象，

子类构造函数中使用this之前，必须调用super

 

# 6. **Set转换成数组**

1.展开运算符

var s = new Set([1,2,3,4]);

var arr = [...s];

 

2. Array.from 

var s = new Set([1,2,3,4]);

Array.from(s)

 

 

# 7. **改变原数组的方法**

1. Push  向数组的末尾添加一个或多个元素，并返回新的长度。

2. Pop   删除并返回数组最后一个元素 

3. Shift   删除并返回数组的第一个元素

4. Unshift  向数组开头添加一个元素，并返回数组长度

5. Reverse 颠倒原数组

6. Sort    改变数组的排序

7. Splice  返回的是被删除元素的数组

 

# 8. **浏览器的渲染过程**

1. 解析html文件，创建DOM树

2. 解析css，生成CSSOM，css对象模型

3. dom和css合并，构建渲染树（Render Tree）

4. 布局（Layout）和绘制（Paint）

 

# 9. **如何中断ajax请求 ， axios中断请求**

1. 中断ajax请求

```javascript
var ajax = $.ajax({

    'error':function(jqXHR, textStatus, errorThrown){

        if(errorThrown != 'abort'){

            //ajax被调用abort后执行的方法

            alert('您的ajax方法被停止了');

        }

    }

})

ajax.abort();//停止ajax 

```

2. 中断axios请求



 ```javascript
const CancelToken = axios.CancelToken;

let cancel;

axios.get('/user/12345', {

  cancelToken: new CancelToken(function executor(c) {

    // executor 函数接收一个 c 函数作为参数，c函数用来中断请求

    cancel = c;

  })

});

// 调用axios请求中的的c函数中断此axios请求

cancel();

 ```



# 10. **Get post 的区别**

1. 显示位置  

(1) get可以在地址栏显示

(2) Post不会

2. 缓存   

(1) get可以在地址栏中缓存 

(2) post不会缓存

3. 编码方式 

(1) Get只支持url编码方式

(2) Post支持多种编码方式

4. 长度限制

(1) Get长度根据浏览器而定

(2) Post长度不受限制

5. 性能

(1) Get产生一个数据包

(2) Post产生两个数据包

6. 安全性

(1) Get因为数据保存在地址栏，数据可能会被二次发掘

(2) Post相对安全

 

 

# 11. **http的状态码**

1** （信息类）

100：continue继续

101：客户根据服务器请求转换http协议版本

2** （响应成功）

200：正常返回信息

201：请求成功并且服务器创建新的资源

202：服务器接受请求，但尚未处理

3** （重定向类））

301：永久重定向

302：临时重定向

304：自从上次请求，网页未修改过

4** （客户端错误）

401：请求未授权

403：禁止访问

404：找不到路径匹配的资源

5** （服务器错误）

500：最常见的服务器错误

503：服务器暂时无法处理请求

 

# 12. **jsonP的原理**

1. 利用script的src属性来实现跨域

2. 通过将前端方法作为参数通过src传到服务器端，服务器注入参数后返回给前端，实现服务器端与客户端的通信

3. 由于使用script的src属性，只能用get请求

#@supports 

@supports是CSS3新引入的规则之一，主要用于检测当前浏览器是否支持某个CSS属性并加载具体样式. 

用在防止旧浏览器不支持某些属性造成排版混乱的情况，使用@supports当做备选项。 

#CSS calc() 函数 

calc() 函数用于动态计算长度值。 

比如说，你可以使用calc()给元素的border、margin、pading、font-size和 width等属性设置动态值。为何说是动 

态值呢?因为我们使用的表达式来得到的值。不过calc.()最大的好处就是用在流体布局上，可以通过calc()计算得到 

元素的宽度。 

calc()可以用来做元素的计算，可以给一个div元素，使用百分比、em、px和rem单位值计算出其宽度或者高度，比 

如说“width:calc(50% + 2em)”，这样就不用考虑元素DIV的宽度值到底是多少，把这个烦人的任务交由浏览器去计 

算，这意味着浏览器中的值可以更加动态，并且可以随着视图的变化而改变 。 

需要注意的是，运算符前后都需要保留一个空格，例如： width: calc(100% - 10px) ； 

任何长度值都可以使用calc()函数进行计算； 

calc()函数支持 "+", "-", "*", "/" 运算； 

calc()函数使用标准的数学运算优先级规则； 

#获取地理位置信息 

新增Geolocation API，可以通过浏览器获取用户的地理位置，不再需要借助第三方地址数据库或专业的开发包 

navigator.geolocation.getCurrentPosition(showPosition); 通过此方法获取地理位置信息，如果 

getCurrentPosition()运行成功，则向参数showPosition中规定的函数返回一个coordinates对象，然后 

showPosition就能获得其位置信息 

#css让盒子水平垂直居中 

1.子元素相对定位，top，let设为50%，transform: translate(-50%, -50%); 这种方式并不会释放子元素在文档中 

所占的位置。 

```javascript
*{padding: 0;margin: 0;} 
div{
width: 300px; 
height: 300px; 
border: 1px solid #000; 
}
div>p { 
width: 100px; 
height: 100px; 
background-color: green; 
position: relative; 
top: 50%; 
left: 50%; 
transform:translate(50%,-50%); 
}

```



2.水平垂直居中，子元素相对于父元素绝对定位， 

将子元素的top，right，bottom，left均设为0，然后设置子元素 margin: auto; 

```javascript
#div {
width: 300px; 
height: 300px; 
border: 1px solid #000; 
position: relative; 
}
#div>p{ 
width: 100px; 
height: 100px; 
background-color: green; 
position: absolute; 
top: 0; 
left: 0; 
bottom: 0; 
right: 0; 
margin: auto; 
} 

```



3.子元素相对于父元素绝对定位,子元素top，left设置为50%，子元素margin的top，left减去自身高，宽的一半。 

```javascript
div{ 
width: 300px; 
height: 300px; 
border: 1px solid #000; 
position: relative; 
}
div>p{
width: 100px; 
height: 100px; 
background-color: green; 
/* 百分比相对于父元素 */ 
position: absolute; 
top: 50%; 
left: 50%; 
margin-top: -50px; 
margin-left: -50px; 
} 

```



4. 父元素设置 display: table-cell; vertical-align: middle; 

子元素设置 margin: auto; 这种方式是让所有的子元素作为一个整体垂直居中，并不能单独指定某一个子元素居中 

```javascript
div{
width: 300px; 
height: 300px; 
border: 1px solid #000; 
display: table-cell; 
vertical-align: middle;}
div>p{
width: 100px; 
height: 100px; 
background-color: green; 
margin: auto; 
}
div>h3{ 
width: 50px; 
height: 50px; 
background-color:orange; 
margin: auto; 
} 

```



\5. 水平垂直居中，子元素相对于父元素绝对定位， 子元素top，let设为50%，transform:translate(-50%, -50%); 

这种方式会释放子元素在文档中所占的位置 

```javascript
*{padding: 0;margin: 0;} 
div {
width: 300px; 
height: 300px; 
border: 1px solid #000; 
position: relative; 
}
div>p { 
width: 100px; 
height: 100px; 
background-color: green; 
position: absolute; 
top: 50%; 
left: 50%; 
transform: translate(-50%, -50%); 
} 

```



\6. 父元素设置 display: flex; justify-content: center; align-items: center; 

justify-content: center; 是让所有的子元素作为一个整体居中。 

```javascript
div {
width: 300px; 
height: 300px; 
border: 1px solid #000; 
display: flex; 
justify-content: center; 
align-items: center; 
}
div>p {5.单飞翼布局 
width: 100px; 
height: 100px; 
background-color: green; 
} 

```



\7. 1、父元素有固定宽高 

2、给需要垂直居中的行内块元素设定一定参照物(是行内块元素，高度和父元素一样高,宽度必须为0) 

3、给需要垂直居中的行内块元素和参照物元素同时设定 vertical-align: middle; 

4、给父元素添加 text-align: center; 

```javascript
*{padding: 0;margin: 0;} 
div {
width: 300px; 
height: 300px; 
border: 1px solid #000; 
text-align: center; 
}
div>p{
display: inline-block; 
width: 100px; 
height: 100px; 
background-color: green; 
vertical-align: middle; 
}
div>h1{ 
height: 300px; 
width: 0; 
display: inline-block; 
vertical-align: middle; 
} 
\1. * {padding: 0;margin: 0;} 
body {
display: flex; 
}
article { 
width: 300px; 
background: orange; 
}
aside { 
flex: 1; 
background: yellow; 
}

```



#rem与em区别 

em是相对长度单位，em是相对于父元素来设计字体大小的。如果当前对行内文本的字体尺寸未被人为设置，则相 

对于浏览器的默认字体尺寸。em会继承父级元素的字体大小。 

rem是是相对长度单位,是相对HTML根元素的font-size。 

例：a嵌套b，b嵌套c， a:20px b：2em  c:2em 

 b的font-size:40px  

 c的font-size :80px 

#vw 与 vh 

vw：viewpoint width，视窗宽度，1vw等于视窗宽度的1% 

vh：viewpoint height，视窗高度，1vh等于视窗高度的1% 

#如何画一个0.5px的直线（有些浏览器会忽略小数点) 

 background-color: black; 

height: 1px; 

transform: scale(0.5); //使用缩放功能将直线缩放0.5倍 

#html的label标签 

用于为输入控件定义文本标签 ——即显示在输入控件旁边的说明性文字。 

用元素定义的文本标签，从显示上看与其他文本毫无差异。不过，它为鼠标用户增强了可用性：当用户点击由元素 

定义的文本标签时，与该文本标签关联的输入控件将获得焦点。 

要为指定关联的输入控件，只需把相关控件的id赋值给标签的for属性即可。 

举例：上传文件： 



\2. *{margin: 0;padding: 0;} 

article{ 

width: 300px; 

background: orange; 

float: left; 

}

aside{

background: yellow; 

overflow: hidden; 

} 

### 10.使用递归 计算1-100的累加 

```javascript
1. function sum(n){
    if(n == 1){ 
        return 1;
    }
    return sum(n-1) + n; 
}
console.log( sum(100));
```

```javascript
2.function sum( n ){ 
    if( n >= 100 ) return 100 // 1+2+3+sum(4)+....+98+99+100 
    return n + sum( ++n ) 
}
console.log(sum(1));
```



#html的渲染过程 

 1.创建DOM树 

 2.解析CSS，生成CSS对象模型 

 3.DOM与CSS合并，构建渲染树 

 4.布局Layout 

 5.绘制Painting 

#ERP: 企业资源计划 (Enterprise Resource Planning) 

OA：办公自动化（Offiffiffice Automation） 

CRM ：客户关系管理 (Customer Relationship Management ) 



 