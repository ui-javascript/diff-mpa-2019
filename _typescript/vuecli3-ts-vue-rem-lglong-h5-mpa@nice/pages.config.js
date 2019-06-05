module.exports = {
  // index
  entry: "src/main.ts",
  path: "index",
  template: "public/index.html", // default
  pagesRoot: "src/pages/", // => @/
  pages: [
    {
      entry: "@/sort/main.ts",
      path: "sort",
      template: "public/index.html", // optional.use default if undefined
    },
    {
      entry: "@/top/main.ts",
      path: "top",
    },
    {
      entry: "@/full/main.ts",
      path: "full",
    },
    // book
    {
      entry: "@/book/sections/main.ts",
      path: "book/sections",
    },
    {
      entry: "@/book/sections/contents/main.ts",
      path: "book/sections/contents",
    },
    // user
    {
      entry: "@/user/bookshelf/main.ts",
      path: "user/bookshelf",
    },
    {
      entry: "@/user/signin/main.ts",
      path: "user/signin",
    },
    {
      entry: "@/user/signup/main.ts",
      path: "user/signup",
    },
  ],
};
