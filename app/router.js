'use strict';

/**
 * @param {Egg.Application} app - egg application
 * 用于配置 URL 路由规则
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/api/getUserInfo', controller.user.getUserInfo);
  router.post('/api/updateUserInfo', controller.user.updateUserInfo);
  router.post('/api/createUserInfo', controller.user.createUserInfo);
  router.post('/api/removeUserInfo', controller.user.removeUserInfo);
};



// const router = require('koa-router')()
// const bodyParser = require('koa-bodyparser')
// module.exports = (app) => {
//   router.post( '/saveBlock', bodyParser(), app.controller.home.saveBlock )
//   router.get('/home', app.controller.home.home)
//   router.get('/home/:id/:name', app.controller.home.homeParams)
//   app.use(router.routes()).use(router.allowedMethods())
// }