/* eslint-env node */
const shouldReadAsEntry = require("./utils");

/**
 * @project: 获取entry文件入口
 * @author: leinov
 * @date: 2018-10-11
 * @update: 2018-11-04 优化入口方法 调用getPath
 */
const glob = require('glob')
const path = require("path");

// const getPath = require("./get-path");
// const config = require("../config");
// const consts = require("./consts");


/**
 * 【获取entry文件入口】
 *
 * @param {String} path 引入根路径
 * @returns {Object} 返回的entry { "about/about":"./src/about/about.js",...}
 */
function getEntry(globPath) {

  // console.log(globPath)

  let details = []
  let entries = {}

  glob.sync(globPath).forEach(function (entry) {
    let basename, prefixname = '', modulename
    let sections

    sections = entry.split('/').splice(-3);
    basename = path.basename(entry, path.extname(entry));

    // 首字母小写

    if (shouldReadAsEntry(basename)) {
      // 前缀
      if (basename.indexOf(sections[1]) != 0) {
        prefixname += `${sections[1]}-`
      }
      prefixname += basename
      modulename = `${sections[1]}/${basename}`

      // console.log(entry, basename, prefixname, sections, modulename)
      details.push({
        // eg--- ./_pages/index/page2.js
        entry: entry,
        // eg--- page2
        basename: basename,
        // eg--- index-page2
        prefixname: prefixname,
        // eg--- [ '_pages', 'index', 'page2.js' ]
        sections: sections,
        // eg--- index/page2
        modulename: modulename
      })

      entries[modulename] = entry
    }
  });

  // console.log('入口')
  // console.log(details)
  console.log('==============')
  details.map((item, index) => console.log(`Page${index}: http://localhost:3100/${item.prefixname}.html`))
  // console.log(entries)
  console.log('==============\n\n\n')


  return {
    details: details,
    entries: entries
  };
}

module.exports = getEntry
