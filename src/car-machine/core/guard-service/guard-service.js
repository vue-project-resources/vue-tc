export const beforeEach = (to, from, next) => {
  console.log('拦截器已经触发');
  if (to.matched.some(r => r.meta.requireAuth)) {
    // if (store.state.token) {
    //   next();
    // } else {
    //   next({
    //     name: 'login',
    //     param: {redirect: to.fullPath}
    //   })
    // }
  } else {
    next();
  }
};
