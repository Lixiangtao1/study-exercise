// 判断数组的方法（区别优劣）
// 1.Object.prototype.toString.call()、  instanceOf、 Array.isArray()、 typeof()

// 1.Object.prototype.toString.call()常用于判断浏览器内置对象
const arr = ['aa', 'bb']
console.log(Object.prototype.toString.call(arr))
console.log(arr instanceof Array)
console.log(Array.isArray(arr))
console.log(typeof arr)

// 2.instanceOf 的运行机制是去判断对象的原型链中是不是找到类型的prototype, 找到返回true,否则返回false

// 3.typeof 只能监测基本的数据类型 而null、Object、Array检测出来的都是Object(无法监测到具体的数据类型)


var b = 10;
(function b() {
  b = 20;
  console.log(b);
  // console.log(this);
})()

var a = 10;
(function () {
  console.log(a)//此时a会发生变量提升,var a ;变量提升并不会赋值 ==> undefined
  a = 5;
  // console.log(window.a)
  var a = 20;
  console.log(a)
})()

// 浏览器渲染过程
// 1.从DOM树的根节点开始遍历每个可见节点
// 2.对于每个可见节点,找到cssOM树中对应的规则,并应用他们
// 3.根据每个可见节点以及其对应的样式,组合成渲染树