# 多页面

```
"scripts": {
    "install": "npm install",
    "install:cnpm": "cnpm install",
    "remove": "rimraf node_modules",
    "preview": "serve -s dist -p 9567",
},
```

# 常见问题

- webpack4 启动时报 Cannot read property 'properties' of undefined

```js
升级webpack-cli
npm i webpack-cli@3.1.1 -D
```
