'use strict';

//egg-jwt
module.exports = options => {
  return async function jwt(ctx, next) {
    const token = ctx.request.header.authorization;
    if (token) {
      try {
        ctx.app.jwt.verify(token, options.secret);
        await next();
      } catch (error) {
        ctx.status = 401;
        ctx.body = {
          message: error.message,
        };
        return;
      }
    } else {
      ctx.status = 401;
      ctx.body = {
        message: '没有token',
      };
      return;
    }
  };
};


// config.jwt = {
//     secret: 'bigbang',
// };

// jwt: {
//     enable: true,
//     package: 'egg-jwt',
// },

// const jwt = app.middleware.jwt(app.config.jwt);
// router.post('/api/systems/login', jwt, controller.systems.login.index);