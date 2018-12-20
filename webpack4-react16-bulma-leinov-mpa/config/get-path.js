// /* eslint-env node */
//
// /**
//  * @project: 遍历文件目录
//  * @author: leinov
//  * @date: 2018-10-11
//  */
//
// const fs = require("fs");
//
// /**
//  * 【遍历某文件下的文件目录】
//  *
//  * @param {String} path 路径
//  * @returns {Array} ["about","index"]
//  */
// module.exports = function getPath(path) {
//     let arr = [];
//     // 是否存在目录
//     let existpath = fs.existsSync(path);
//     if (existpath) {
//         // 获取目录下所有文件
//         let readdirSync = fs.readdirSync(path);
//         readdirSync.map((item) => {
//
//             let currentPath = path + "/" + item;
//             // 判断是不是一个文件夹
//             let isDirector = fs.statSync(currentPath).isDirectory();
//
//             // components目录下为组件 需要排除
//             if (isDirector) {
//                 arr.push(item);
//             }
//         });
//
//         console.log(arr)
//         return arr;
//     }
// };
