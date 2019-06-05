export default (router: any) => {
  router.beforeEach((to: any, from: any, next: any) => {
    if (to.path.includes("bookshelf") && !localStorage.getItem("accessToken")) {
      location.href = "/user/signin.html";
    }
    next();
  });
  return router;
};
