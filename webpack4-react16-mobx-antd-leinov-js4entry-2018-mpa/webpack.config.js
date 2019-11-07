/* eslint-env node */

/**************************
 * @file: webpack配置
 * @author: leinov
 * @date: 2018-10-08
 * @update: 2018-11-04 优化html文件
 * 1.修改htmlConfig.js
 * 2.在页面文件夹下添加pageinfo.json
 ***************************/

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//css分离打包
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");//js压缩
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //css压缩
const createHtml = require("./build/create-html");// html配置

const config = require("./config")
const getEntry = require("./build/get-entry");
const entry = getEntry(config.entries);
const htmlArr = createHtml(entry.details);

//主配置
module.exports = (env, argv) => ({
    entry: entry.entries,
    // node: {
    //   fs: "empty"
    // },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "static/[name].[hash:7].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            // 这句很重要 不然箭头函数出错
                            {"plugins": ["@babel/plugin-proposal-class-properties"]}
                        ],
                    }
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                // exclude: /node_modules/,
            },
            {
                //css打包 路径在plugins里
                test: /\.(css|less|scss)$/,
                use: [
                    // 是否提取
                    argv.mode == "development" ? {loader: "style-loader"} : MiniCssExtractPlugin.loader,

                    {loader: "css-loader", options: {url: false, sourceMap: true}},
                    {loader: "sass-loader", options: {sourceMap: true}},
                    {loader: "less-loader", options: {sourceMap: true, javascriptEnabled: true}},
                ],
                // exclude: /node_modules/,

            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=images/[name].[hash:7].[ext]',
                options: {
                    publicPath: '/'
                }
            },

        ],
    },
    devServer: {
        port: 3100,
        open: false,
        quiet: true,
    },
    resolve: {
        alias: {
            // src: path.resolve(__dirname, "src"),
            '@': path.resolve(__dirname, "src"),
            // components: path.resolve(__dirname, "src/components/"),
            // store: path.resolve(__dirname, "src/store/"),
        }
    },
    plugins: [
      // html插件数组
        ...htmlArr,
      //分离css插件
        new MiniCssExtractPlugin({
            filename: "static/[name].[hash:7].css",
            chunkFilename: "static/[id].[hash:7].css"
        }),
        // 临时配置下, 别瞎输出
        new FriendlyErrorsWebpackPlugin({
          compilationSuccessInfo: {
            // messages: [`Your application is running here: http://${config.dev.host}:${config.dev.port}`],
          },
          // onErrors: config.dev.notifyOnErrors
          //   ? utils.createNotifierCallback()
          //   : undefined,
          clearConsole: true,
        }),
    ],
    optimization: {
        minimizer: [//压缩js
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: { //压缩css
            cacheGroups: {
                styles: {
                    name: "styles",
                    test: /\.css$/,
                    chunks: "all",
                    enforce: true
                }
            }
        }
    }
});
