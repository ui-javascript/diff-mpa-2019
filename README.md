# README

- node.js = 8.11.3

# 多页面

```
"scripts": {
    "install": "npm install",
    "install:taobao": "npm install --registry=https://registry.npm.taobao.org",
    "install:cnpm": "cnpm install",
    "install:yarn": "yarn install",
    "remove": "rimraf node_modules",
    "preview": "serve -s dist -p 9567",
},
```

# 调整

- webpack4-vue-sanjs-libin1991-ie9-pagefirstmpa ->> natural-code-ui(利用多页面来攒组件)

# 常见问题

- webpack4 启动时报 Cannot read property 'properties' of undefined

```
升级webpack-cli
npm i webpack-cli@3.1.1 -D
```
