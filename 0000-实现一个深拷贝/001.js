// JSON.parse(JSON.stringify(Array))
// 1.此方法可实现大部分场景，但是有缺陷-- （如果对象中存在循环时,无法正确使用）
const a = {
  b: '111'
}
// a.c = a
// JSON.parse(JSON.stringify(a))
// 2.还有一个缺陷，如果数据中有时间对象，则JSON.stringfy()后再执行JSON.parse()的结果,  **时间将只是字符串的型式,而不是时间对象**
const aa = {
  b: new Date(1536627600000)
}
console.log(JSON.parse(JSON.stringify(aa)))

// function test1() {
//   return 'test1'
// }
// async function test2() {
//   let str = await test1()
//   console.log(str)
//   console.log('test2')
// }
// test2()

// const arrayBuffer = new Uint8Array()