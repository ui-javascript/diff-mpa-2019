/**
 * @file 页面html配置
 * @author:leinov
 * @date: 2018-10-09
 * @update: 2018-11-05
 * @use: 动态配置html页面，获取src下每个文件下的pageinfo.json内容,解析到HtmlWebpackPlugin中
 */

const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const getPath = require("./get-path");
let htmlArr = [];

function getInfoData(infoJsonFile) {
    let infoJson = {}, infoData = {}

    // 如果在页面目录下没有找到info.json 捕获异常
    try {
        infoJson = fs.readFileSync(infoJsonFile, "utf-8");
        infoData = JSON.parse(infoJson)
    } catch (err) {

        // 默认值
        infoData = {
            "title": "react-multi-page-app",
            "keywords": "react,multi-page,webpack,node",
            "description": "this is a react-multi-page-app"
        }
    }

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

        // console.log(`${item.sections[0]}/${item.sections[0]}/${item.basename}.json`)
        let infoData = getInfoData(`./${item.sections[0]}/${item.sections[1]}/${item.basename}.json`)

        htmlArr.push(new HtmlWebpackPlugin({
            title: infoData.title,
            meta: {
                keywords: infoData.keywords,
                description: infoData.description
            },
            // 引入的js
            chunks: [`${item.modulename}`],
            template: "./public/template.html",
            // @nice 便于直接访问index.html
            filename: item.modulename == "index/index" ? "index.html" : `${item.prefixname}.html`, //html位置
            minify: {//压缩html
                collapseWhitespace: true,
                preserveLineBreaks: true
            },
        }));
    });

    // console.log(htmlArr)
    return htmlArr;
}


module.exports = createHtml;
