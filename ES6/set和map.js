// let s = new Set([1,2,3,1,3,4,2,1,3,'4'])
// let s = [1,2,3,1,3,4,2,1,3]
// console.log(s) 
//set函数可以接受已一个具有iterable接口的其他数据结构作为参数,,并且不会添加重复的值,
// 向set加入值的时候不会发生类型转换

// let array = JSON.parse(JSON.stringify(s))
// console.log(s.has('1'))
// console.log(s.delete(1))
// console.log(s.has(1))


const items = new Set([1, 2, 3, 4, 5]);
// console.log(items)
// console.log(typeof(items))
// console.log(items instanceof Object)
const array = Array.from(items);
// console.log(array)

// foreach适用于数组或实现了iterator的集合类, foreach就是使用Iterator接口来实现对集合的遍历的。
items.forEach( item => {
  // console.log(item)
})

// let obj = { 'haha': '123'} //不具备iterator的集合类
// obj.forEach( item => {//报错
//   console.log(item)
// })

// 使用set实现交集和并集
// 1.并集
let s1 = new Set([1,2,3])
let s2 = new Set([4,3,2])
console.log(new Set([...s1, ...s2]))

// 2.交集
console.log(new Set([...s1].filter( item => s2.has(item))))

console.log('-----------------------------------------------')


// map
const m = new Map()
const o = { p: 'Hello world'}
m.set(o, 'content')
// console.log(m)
// console.log(m.get(o))

