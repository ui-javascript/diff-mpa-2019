// 入口文件判断标准：小写字母开头
function shouldReadAsEntry(baseName) {
  const entryFirstLetter = baseName.charAt(0)

  // return entryFirstLetter < 'A' || entryFirstLetter > 'Z'

  return entryFirstLetter.match(/^.*[a-z]+.*$/)
}

module.exports = shouldReadAsEntry
