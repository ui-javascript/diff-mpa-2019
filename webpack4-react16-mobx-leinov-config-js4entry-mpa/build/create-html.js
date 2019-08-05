/**
 * @file 页面html配置
 * @author:leinov
 * @date: 2018-10-09
 * @update: 2018-11-05
 * @use: 动态配置html页面，获取src下每个文件下的pageinfo.json内容,解析到HtmlWebpackPlugin中
 */

const config = require("../config");
const consts = require("./consts");

const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const getPath = require("./get-path");
let htmlArr = [];

function getInfoData(infoJsonFile) {
  let infoJson
  let infoData
  let tmpl

  tmpl = fs.existsSync(infoJsonFile) ? infoJsonFile : consts.DEFAULT_JSON
  infoJson = fs.readFileSync(tmpl, "utf-8")
  infoData = JSON.parse(infoJson)

  // @Deprecated
  // 如果在页面目录下没有找到info.json 捕获异常
  // try {
  //   infoJson = fs.readFileSync(infoJsonFile, "utf-8");
  //   infoData = JSON.parse(infoJson)
  // } catch (err) {
  //
  //   // 默认值
  //   infoData = {
  //     "title": "react-multi-page-app",
  //     "keywords": "react,multi-page,webpack,node",
  //     "description": "this is a react-multi-page-app"
  //   }
  // }

  return infoData
}


function createHtml(details) {

  // details like this!!
  // detsils = [{
  //     entry: './pages/index/page2.js',
  //     basename: 'page2',
  //     prefixname: 'index-page2',
  //     sections: [ 'pages', 'index', 'page2.js' ],
  //     modulename: 'index/page2'
  // }]

  details.map((item) => {

    // console.log(`${item.sections[0]}/${item.sections[1]}/${item.basename}.json`)
    const infoJson = `./${item.sections[0]}/${item.sections[1]}/${item.basename}.json`
    const infoData = getInfoData(infoJson)

    // 判断是否写入模板
    let templatePath = `${item.sections[0]}/${item.sections[1]}/${item.basename}.html`
    templatePath = fs.existsSync(templatePath) ? templatePath : (config.defaultTemplate || consts.DEFAULT_TPL)

    htmlArr.push(new HtmlWebpackPlugin({
      title: infoData.title,
      meta: {
        keywords: infoData.keywords,
        description: infoData.description
      },
      // 引入的js
      chunks: [`${item.modulename}`],
      template: templatePath,
      // @nice 便于直接访问index.html
      filename: item.modulename == "index/index" ? "index.html" : `${item.prefixname}.html`, //html位置
      minify: {
        //压缩html
        collapseWhitespace: true,
        preserveLineBreaks: true
      },
    }));
  });

  // console.log(htmlArr)
  return htmlArr;
}


module.exports = createHtml;
