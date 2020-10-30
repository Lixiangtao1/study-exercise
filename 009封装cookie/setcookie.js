// Cname、value 存放键值对 , expiredays存储时长
setCookie = function (Cname, calue, expiredays) {
  let exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = cName + '=' + decodeURIComponent(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
}


// 获取cookie中key-value
getCookie = function (key) {
  if (document.cookie.length > 0) {
    let start = document.cookie.indexOf(key + '=')
    if (start !== -1) {
      start = start + key.length + 1
      let end = document.cookie.indexOf(';', start)
      if (end === -1) end = document.cookie.length
      return unescape(document.cookie.substring(start, end))
    }
  }
  return ''
}