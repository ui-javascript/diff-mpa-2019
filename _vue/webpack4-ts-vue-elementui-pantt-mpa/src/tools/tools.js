// 获取菜单列表
export function getPageOperateCode (path) {
  if (path.length > 0 && path.substring(0, 1) == '/') {
    path = path.substring(1)
    var list = JSON.parse(sessionStorage.getItem('menuList'))
    if (list == null || list.length <= 0) {
      return []
    }
    for (var i = 0; i < list.length; i++) {
      if (list[i].url === path) {
        return list[i].operateCode
      }
      if (list[i] == null || list[i].childModule == null) {
        return []
      }
      var childrenlist = list[i].childModule
      for (var j = 0; j < childrenlist.length; j++) {
        if (childrenlist[j].url === path) {
          return childrenlist[j].operateCode
        }
      }
    }
    return []
  }
  return []
}
// 相等赋值
export function setTargetToSource (source, target) {
  for (var x in source) {
    source[x] = target[x]
  }
}

// 格式化日期yyyy-MM-dd HH:mm:ss
export function formatDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
};

// 当前日期
export function getDateNow () {
  var date = new Date()
  var seperator = '-'
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  var currentdate = year + seperator + month + seperator + strDate
  return currentdate
}
// 字符串操作
function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}

// 是否合法的字串（字母数字下划线）
export function isKey (strKey) {
  if (strKey == null || strKey.length < 1) {
    return false
  }
  var reg = new RegExp(/^[a-zA-Z_0-9]+$/)
  if (reg.test(strKey)) {
    return true
  }
}
