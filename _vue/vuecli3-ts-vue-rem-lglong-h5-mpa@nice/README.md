# multi-pages

**Live:** <a href="http://book.mofunc.com" target="_blank">http://book.mofunc.com</a>

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
```
pages => pages.config.js
{
    // page index.html
    entry: "src/main.ts",
    path: "index",
    template: "public/index.html", // default
    pagesRoot: "src/pages/", // => @/
    pages: [
        {
            // page sort.html
            entry: "@/sort/main.ts",
            path: "sort",
            template: "public/index.html", // optional. use default if undefined
        },
        {
            // page top.html
            entry: "@/top/main.ts",
            path: "top",
        }
    ]
}
```

```
api config => src/utils/config.ts
{
    MODE: "localhost", // or development
    ...
    REQUST: {
        // for localhost
        localhost: {
            BASE_URL: "http://192.168.244.121:51202/",
        },
        // for development
        development: {
            BASE_URL: "http://dev.mofunc.com/ws/",
        },
        // ...
    },
};
```
### Previews

![Alt text](previews/1-index.png)![Alt text](previews/2-sort.png)![Alt text](previews/3-top.png)
![Alt text](previews/4-full.png)![Alt text](previews/5-sections.png)![Alt text](previews/6-contents.png)
![Alt text](previews/7-sigin.png)![Alt text](previews/8-singup.png)![Alt text](previews/9-bookshelf.png)